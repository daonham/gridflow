/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { useDispatch } from '@wordpress/data';
import { image as icon } from '@wordpress/icons';
import { useBlockProps, BlockIcon, MediaPlaceholder, store as blockEditorStore } from '@wordpress/block-editor';
import { ResizableBox } from '@wordpress/components';

import Controls from './controls';
import Inspector from './inspector';

const { withInlineStyle } = wp.gridhubCompose;

function Edit( {
	isSelected,
	attributes,
	setAttributes,
	noticeUI,
	noticeOperations,
} ) {
	const { uniqueId, url, id, alt, width, height } = attributes;

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
			alt={ __( 'Edit image', 'gridhub' ) }
			title={ __( 'Edit image', 'gridhub' ) }
			className={ 'edit-image-preview' }
			src={ url }
		/>
	);

	const { toggleSelection } = useDispatch( blockEditorStore );

	function onResizeStart() {
		toggleSelection( false );
	}

	function onResizeStop() {
		toggleSelection( true );
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

			<div { ...useBlockProps( { className: classnames( 'gridhub-image', uniqueId ) } ) }>
				{ url ? (
					<div className={ classnames( 'gridhub-image__inner', 'gridhub-block-inner' ) }>
						<div className={ 'gridhub-image__wrapper' }>
							<ResizableBox
								size={ { width, height } }
								showHandle={ isSelected }
								lockAspectRatio
								enable={ {
									top: false,
									right: true,
									bottom: true,
									left: false,
								} }
								onResizeStart={ onResizeStart }
								onResizeStop={ ( event, direction, elt, delta ) => {
									onResizeStop();

									setAttributes( {
										width: parseInt( width + delta.width, 10 ),
										height: parseInt( height + delta.height, 10 ),
									} );
								} }
							>
								<img src={ url } alt={ alt } />
							</ResizableBox>
						</div>
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
