import assign from 'lodash/assign';

import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { hasBlockSupport } from '@wordpress/blocks';

import Inspector from './inspector';
import gridflowAttributes from './attributes';
import './style';

export function addAttributes( settings ) {
	if ( hasBlockSupport( settings, 'gridflowBackground' ) ) {
		settings.attributes = assign( settings.attributes, gridflowAttributes );
	}

	return settings;
}

export const withInspectorControl = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		return (
			<>
				<BlockEdit { ...props } />
				{ props.isSelected && hasBlockSupport( props.name, 'gridflowBackground' ) && (
					<Inspector
						setAttributes={ props.setAttributes }
						attributes={ props.attributes }
					/>
				) }
			</>
		);
	};
}, 'withInspectorControl' );

addFilter( 'blocks.registerBlockType', 'gridflow/inspector/attributes', addAttributes );
addFilter( 'editor.BlockEdit', 'gridflow/spacing', withInspectorControl );

