import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { useBlockProps, InnerBlocks, RichText, store as blockEditorStore } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';

import Controls from './controls';
import Inspector from './inspector';

const { withInlineStyle } = wp.gridflowCompose;

const TEMPLATE = [
	[ 'gridflow/heading', { placeholder: __( 'Add content…', 'gridflow' ), tagName: 'p' } ],
];

function Edit( { isSelected, attributes, setAttributes, clientId } ) {
	const { uniqueId, index, tabTitles } = attributes;

	const onChangeLabel = ( value ) => {
		const newTabTitle = parentTitles;

		newTabTitle[ index ] = { title: value };

		setAttributes( { tabTitles: { title: value } } );

		updateBlockAttributes( rootClientId, {
			tabTitles: newTabTitle,
		} );
	};

	const { rootClientId, parentTitles } = useSelect( ( select ) => {
		const { getBlockRootClientId, getBlockAttributes } = select( blockEditorStore );
		const parentId = getBlockRootClientId( clientId );

		return {
			rootClientId: parentId,
			parentTitles: getBlockAttributes( parentId ).tabTitles,
		};
	}, [ clientId ] );

	const getPreviewDeviceType = useSelect( ( select ) => {
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' );

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : 'Desktop';
	}, [] );

	const { updateBlockAttributes } = useDispatch( blockEditorStore );

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

			<div { ...useBlockProps( { className: classnames( 'gridflow-tab', uniqueId ) } ) }>
				{ getPreviewDeviceType === 'Mobile' && (
					<button className="gridflow-tabs__title__button gridflow-tabs__title__button--mobile">
						<RichText
							tagName="span"
							placeholder={ __( 'Tab label', 'gridflow' ) }
							keepplaceholderonfocus="true"
							value={ tabTitles?.title }
							onChange={ ( value ) => {
								onChangeLabel( value );
							} }
						/>
					</button>
				) }

				<div className={ classnames( 'gridflow-tab__panel', `gridflow-tab__panel-${ index }` ) } style={ { display: isSelected && 'block' } }>
					<div className={ classnames( 'gridflow-tab__inner', 'gridflow-block-inner' ) }>
						<InnerBlocks
							template={ TEMPLATE }
							templateInsertUpdatesSelection={ false }
							__experimentalCaptureToolbars={ true }
						/>
					</div>
				</div>
			</div>
		</>
	);
}
export default compose( [
	withInlineStyle,
] )( Edit );
