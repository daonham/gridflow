import assign from 'lodash/assign';

import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';

import Inspector from './inspector';
import gridhubAttributes from './attributes';

const allowedBlocks = [
	'gridhub/heading',
];

export function addAttributes( settings ) {
	if ( allowedBlocks.includes( settings.name ) ) {
		settings.attributes = assign( settings.attributes, gridhubAttributes );
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

addFilter( 'blocks.registerBlockType', 'gridhub/inspector/attributes', addAttributes );
addFilter( 'editor.BlockEdit', 'gridhub/spacing', withInspectorControl );

