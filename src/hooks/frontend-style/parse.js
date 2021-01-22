import { select } from '@wordpress/data';
import { applyFilters } from '@wordpress/hooks';

import getStyle from '../inline-style';

function parseStyle() {
	const allBlocks = select( 'core/block-editor' ).getBlocks();
	let styles = '';

	allBlocks.map( ( block ) => {
		const { attributes, name } = block;
		const { uniqueId } = attributes;
		const blockName = name.split( '/' );

		if ( blockName[ 0 ] === 'gridhub' && uniqueId ) {
			const inline = typeof getStyleBlock !== 'undefined' ? getStyleBlock( blockName[ 1 ], attributes ) : undefined;

			if ( inline ) {
				styles += getStyle( inline.desktop, uniqueId );

				if ( inline.tablet ) {
					styles += getStyle( inline.tablet, uniqueId, true, 'tablet' );
				}

				if ( inline.mobile ) {
					styles += getStyle( inline.mobile, uniqueId, true, 'mobile' );
				}
			}
		}
	} );

	return styles;
}
export default parseStyle;

function getStyleBlock( name, attributes ) {
	let output;

	return applyFilters( `gridhub.inlineStyle.${ name }`, output, attributes );
}
