import { select } from '@wordpress/data';

import getStyle from '../inline-style';
import inlineStyle from '../inline-style/filter';
import gridhubApi from './api';

function parseStyle( isPreview = false ) {
	const allBlocks = select( 'core/block-editor' ).getBlocks();
	const { getCurrentPostId } = select( 'core/editor' );

	let styles = '';
	const fonts = [];

	allBlocks.map( ( block ) => {
		const { attributes, name } = block;
		const { uniqueId } = attributes;
		const blockName = name.split( '/' );

		if ( blockName[ 0 ] === 'gridhub' && uniqueId ) {
			if ( attributes.gridhubFont ) {
				const { gridhubFont } = attributes;

				Object.values( gridhubFont ).map( ( font ) => {
					let weight = [ '400', '400i' ];

					if ( attributes[ font.weight ] ) {
						if ( attributes[ font.weight ] !== 'regular' ) {
							weight = [ attributes[ font.weight ], `${ attributes[ font.weight ] }i` ];
						}
					}

					if ( attributes[ font.name ] && gridHubEditorData.systemFont && ! ( gridHubEditorData.systemFont ).includes( attributes[ font.name ] ) ) {
						fonts.push( {
							font: attributes[ font.name ],
							weights: weight,
						} );
					}
				} );
			}

			const inline = typeof inlineStyle !== 'undefined' ? inlineStyle( { name: blockName[ 1 ], attributes } ) : undefined;
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

	if ( styles ) {
		gridhubApi( {
			path: '/gridhub/v1/style/save',
			method: 'POST',
			data: {
				postId: getCurrentPostId(),
				css: styles,
				isPreview,
				fonts: fonts.length > 0 ? fonts : '',
			},
		} );
	}
}
export default parseStyle;

