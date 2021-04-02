/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { image as icon } from '@wordpress/icons';
import { useState } from '@wordpress/element';
import { useBlockProps, BlockIcon, MediaPlaceholder, RichText } from '@wordpress/block-editor';

import Controls from './controls';
import Inspector from './inspector';

const { withInlineStyle } = wp.gridflowCompose;

function Edit( {
	isSelected,
	attributes,
	setAttributes,
	noticeUI,
	noticeOperations,
} ) {
	const { uniqueId, url, id, alt, linkType, links, overlay, overlayHover, enableCaption, caption } = attributes;

	const [ captionFocused, setCaptionFocused ] = useState( false );

	function onSelectImage( media ) {
		if ( media && media.url ) {
			setAttributes( { url: media.url } );
		}

		if ( media && media.id ) {
			setAttributes( { id: media.id } );
		}
	}

	function onSelectURL( newURL ) {
		if ( newURL !== url ) {
			setAttributes( {
				url: newURL,
				id: undefined,
			} );
		}
	}

	function onUploadError( message ) {
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice( message );
	}

	const mediaPreview = !! url && (
		<img
			alt={ __( 'Edit image', 'gridflow' ) }
			title={ __( 'Edit image', 'gridflow' ) }
			className={ 'edit-image-preview' }
			src={ url }
		/>
	);

	let href, target, rel;

	if ( linkType === 'media' ) {
		href = url;
	} else if ( linkType === 'custom' ) {
		href = links?.url;
		target = links?.target && '_blank';
		rel = links?.rel;

		if ( links?.target && ! rel.includes( 'noreferrer' ) ) {
			rel = rel ? `noreferrer noopener ${ rel }` : 'noreferrer noopener';
		}
	}

	function onFocusCaption() {
		if ( ! captionFocused ) {
			setCaptionFocused( true );
		}
	}

	function contentLink() {
		return (
			<>
				{ linkType ? (
					<a className={ classnames( 'gridflow-image__wrapper', { 'gridflow-image__wrapper--overlay': overlay || overlayHover } ) } href={ href } target={ target } rel={ rel } onClick={ ( e ) => e.preventDefault() }>
						<img src={ url } alt={ alt || '' } />
					</a>
				) : (
					<div className={ classnames( 'gridflow-image__wrapper', { 'gridflow-image__wrapper--overlay': overlay || overlayHover } ) }>
						<img src={ url } alt={ alt || '' } />
					</div>
				) }
			</>
		);
	}

	return (
		<>
			{ isSelected && (
				<Controls
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			) }

			{ isSelected && (
				<Inspector
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			) }

			<div { ...useBlockProps( { className: classnames( 'gridflow-image', uniqueId ) } ) }>
				{ url ? (
					<div className={ classnames( 'gridflow-image__inner', 'gridflow-block-inner' ) }>
						{ enableCaption ? (
							<figure className={ 'gridflow-image__caption' }>
								{ contentLink() }

								{ ( ! RichText.isEmpty( caption ) || isSelected ) && (
									<RichText
										tagName="figcaption"
										className={ 'gridflow-image__caption__text' }
										aria-label={ __( 'Image caption text' ) }
										placeholder={ __( 'Write caption…' ) }
										unstableOnFocus={ onFocusCaption }
										value={ caption }
										onChange={ ( value ) =>
											setAttributes( { caption: value } )
										}
										isSelected={ captionFocused }
										inlineToolbar
									/>
								) }
							</figure>
						) : (
							contentLink()
						) }
					</div>
				) : (
					<MediaPlaceholder
						icon={ <BlockIcon icon={ icon } /> }
						onSelect={ onSelectImage }
						onSelectURL={ onSelectURL }
						notices={ noticeUI }
						onError={ onUploadError }
						accept="image/*"
						allowedTypes={ [ 'image' ] }
						value={ { id, url } }
						mediaPreview={ mediaPreview }
						disableMediaButtons={ url }
					/>
				) }
			</div>
		</>
	);
}
export default compose( [
	withInlineStyle,
] )( Edit );
