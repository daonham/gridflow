/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
	BlockIcon,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';
import { image as icon } from '@wordpress/icons';

import Controls from './controls';
import Inspector from './inspector';

const { withInlineStyle } = wp.gridflowCompose;

const TEMPLATE = [
	[
		'gridflow/heading',
		{
			placeholder: __( 'Add heading', 'gridflow' ),
			tagName: 'h3',
		},
	],
	[
		'gridflow/heading',
		{
			placeholder: __( 'Add content...', 'gridflow' ),
			tagName: 'p',
		},
	],
];

function Edit( { isSelected, attributes, setAttributes, noticeOperations, noticeUI } ) {
	const { uniqueId, url, id, alt, linkType, links } = attributes;

	const innerBlocksContent = useInnerBlocksProps( { className: 'gridflow-image-box__content' }, {
		allowedBlocks: [ 'gridflow/heading' ],
		template: TEMPLATE,
		orientation: 'vertical',
		renderAppender: isSelected ? InnerBlocks.ButtonBlockAppender : false,
	} );

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

	function imageBoxImage() {
		return (
			<>
				{ linkType ? (
					<a
						className={ classnames( 'gridflow-image-box__image' ) }
						href={ href }
						target={ target }
						rel={ rel }
						onClick={ ( e ) => e.preventDefault() }
					>
						<img src={ url } alt={ alt || '' } />
					</a>
				) : (
					<div className={ classnames( 'gridflow-image-box__image' ) }>
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
					isSelected={ isSelected }
				/>
			) }

			<div { ...useBlockProps( { className: classnames( 'gridflow-image-box', uniqueId ) } ) }>
				<div className={ classnames( 'gridflow-image-box_inner', 'gridflow-block-inner' ) }>
					<div className={ 'gridflow-image-box__wrapper' }>
						{ url ? (
							imageBoxImage()
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
						<div { ...innerBlocksContent } />
					</div>
				</div>
			</div>
		</>
	);
}
export default compose( [
	withInlineStyle,
] )( Edit );
