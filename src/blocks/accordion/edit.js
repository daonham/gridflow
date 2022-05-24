import classnames from 'classnames';

import { compose } from '@wordpress/compose';
import { useBlockProps, InnerBlocks, useInnerBlocksProps, store as blockEditorStore } from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

import Controls from './controls';
import Inspector from './inspector';

const { withInlineStyle, GridFlowInspectorControls } = wp.gridflowCompose;

const TEMPLATE = [ [ 'gridflow/accordion-item' ] ];

function Edit( { name, isSelected, attributes, setAttributes, clientId } ) {
	const { uniqueId, icon, iconAlign, iconActive, tagName, close } = attributes;

	const innerBlocksProps = useInnerBlocksProps( {}, {
		allowedBlocks: [ 'gridflow/accordion-item' ],
		template: TEMPLATE,
		orientation: 'vertical',
		renderAppender: isSelected ? InnerBlocks.ButtonBlockAppender : false,
	} );

	const innerBlockClientIds = useSelect( ( select ) => {
		const { getBlockOrder } = select( blockEditorStore );

		return getBlockOrder( clientId );
	}, [ clientId ] );

	const { updateBlockAttributes } = useDispatch( blockEditorStore );

	useEffect( () => {
		innerBlockClientIds.forEach( ( innerBlockClientId ) => {
			updateBlockAttributes( innerBlockClientId, {
				icon, iconActive, iconAlign, tagName,
			} );
		} );
	}, [ icon, iconActive, iconAlign, tagName, clientId, innerBlockClientIds ] );

	return (
		<>
			{ isSelected && (
				<Controls
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			) }

			{ isSelected && (
				<GridFlowInspectorControls name={ name } attributes={ attributes } setAttributes={ setAttributes }>
					<Inspector
						attributes={ attributes }
						setAttributes={ setAttributes }
					/>
				</GridFlowInspectorControls>
			) }

			<div { ...useBlockProps( { className: classnames( 'gridflow-accordion', uniqueId ) } ) }>
				<div className={ classnames( 'gridflow-accordion__inner', 'gridflow-block-inner' ) }>
					<div className={ classnames(
						'gridflow-accordion__wrapper',
						{ 'gridflow-accordion__wrapper--close': close },
					) }>
						<div { ...innerBlocksProps } />
					</div>
				</div>
			</div>
		</>
	);
}
export default compose( [
	withInlineStyle,
] )( Edit );
