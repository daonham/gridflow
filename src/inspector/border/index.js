import assign from 'lodash/assign';

import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';

import Inspector from './inspector';
import gridflowAttributes from './attributes';
import './style';

const allowedBlocks = [
	'gridflow/heading',
	'gridflow/button',
	'gridflow/image',
	'gridflow/icon',
	'gridflow/accordion',
	'gridflow/progress-bar',
	'gridflow/google-map',
	'gridflow/counter',
	'gridflow/tabs',
	'gridflow/divider',
	'gridflow/image-box',
	'gridflow/icon-box',
	'gridflow/social',
	'gridflow/alert',
];

export function addAttributes( settings ) {
	if ( allowedBlocks.includes( settings.name ) ) {
		settings.attributes = assign( settings.attributes, gridflowAttributes );
	}

	return settings;
}

export const withInspectorControl = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		return (
			<>
				<BlockEdit { ...props } />

				{ props.isSelected && allowedBlocks.includes( props.name ) && (
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

