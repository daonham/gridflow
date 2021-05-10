import getStyle from '../inline-style';
import inlineStyle from '../inline-style/filter';

const gridFlowEditorData = window.gridFlowEditorData;

function getStyles( block, styles, fonts ) {
	const { attributes, name } = block;
	const { uniqueId } = attributes;
	const blockName = name.split( '/' );

	if ( blockName[ 0 ] === 'gridflow' && uniqueId ) {
		if ( attributes.gridflowFont ) {
			const { gridflowFont } = attributes;

			Object.values( gridflowFont ).map( ( font ) => {
				let weight = [ '400', '400i' ];

				if ( attributes[ font.weight ] ) {
					if ( attributes[ font.weight ] !== 'regular' ) {
						weight = [ attributes[ font.weight ], `${ attributes[ font.weight ] }i` ];
					}
				}

				if ( attributes[ font.name ] && gridFlowEditorData?.systemFont && ! ( gridFlowEditorData.systemFont ).includes( attributes[ font.name ] ) ) {
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

	return { styles, fonts };
}
export default getStyles;
