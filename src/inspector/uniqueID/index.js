import assign from 'lodash/assign';

import gridhubAttributes from './attributes';
import { addFilter } from '@wordpress/hooks';

export function addAttributes( settings ) {
	const blockName = settings.name.split( '/' );

	if ( blockName[ 0 ] === 'gridhub' ) {
		settings.attributes = assign( settings.attributes, gridhubAttributes );
	}

	return settings;
}

addFilter( 'blocks.registerBlockType', 'gridhub/inspector/attributes', addAttributes );
