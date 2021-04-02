import assign from 'lodash/assign';

import gridflowAttributes from './attributes';
import { addFilter } from '@wordpress/hooks';

export function addAttributes( settings ) {
	const blockName = settings.name.split( '/' );

	if ( blockName[ 0 ] === 'gridflow' ) {
		settings.attributes = assign( settings.attributes, gridflowAttributes );
	}

	return settings;
}

addFilter( 'blocks.registerBlockType', 'gridflow/inspector/attributes', addAttributes );
