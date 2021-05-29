import assign from 'lodash/assign';

import { addFilter } from '@wordpress/hooks';
import { hasBlockSupport } from '@wordpress/blocks';

import Inspector from './inspector';
import gridflowAttributes from './attributes';
import './style';

export function addAttributes( settings ) {
	if ( hasBlockSupport( settings, 'gridflowPositioning' ) ) {
		settings.attributes = assign( settings.attributes, gridflowAttributes );
	}

	return settings;
}

export function positionControl( output, name, attributes, setAttributes ) {
	return (
		<>
			{ output }

			{ hasBlockSupport( name, 'gridflowPositioning' ) && (
				<Inspector
					setAttributes={ setAttributes }
					attributes={ attributes }
				/>
			) }
		</>
	);
}

addFilter( 'blocks.registerBlockType', 'gridflow/inspector/attributes', addAttributes );
addFilter( 'gridflow.inspector.advanced', 'gridflow/positioning/inspector', positionControl );
