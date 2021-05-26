import assign from 'lodash/assign';

import { addFilter } from '@wordpress/hooks';
import { hasBlockSupport } from '@wordpress/blocks';

import Inspector from './inspector';
import gridflowAttributes from './attributes';
import './style';

export function addAttributes( settings ) {
	if ( hasBlockSupport( settings, 'gridflowSpacing' ) ) {
		settings.attributes = assign( settings.attributes, gridflowAttributes );
	}

	return settings;
}

export function spacingControl( output, name, attributes, setAttributes ) {
	return (
		<>
			{ output }

			{ hasBlockSupport( name, 'gridflowSpacing' ) && (
				<Inspector
					setAttributes={ setAttributes }
					attributes={ attributes }
				/>
			) }
		</>
	);
}

addFilter( 'blocks.registerBlockType', 'gridflow/inspector/attributes', addAttributes );
addFilter( 'gridflow.inspector.advanced', 'gridflow/spacing/inspector', spacingControl );
