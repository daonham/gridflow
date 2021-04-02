import { useEffect, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { createHigherOrderComponent } from '@wordpress/compose';

import GoogleFontLoader from 'react-google-font-loader';

import getStyle from '../inline-style';
import inlineStyle from '../inline-style/filter';

const withInlineStyle = createHigherOrderComponent(
	( WrappedComponent ) => ( props ) => {
		const { attributes, setAttributes, clientId, name } = props;
		const [ ggFont, setGGFont ] = useState( [] );

		const { uniqueId } = attributes;

		const blockName = name.split( '/' );

		const getPreviewDeviceType = useSelect( ( select ) => {
			const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' );

			return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : false;
		}, [] );

		const getFonts = () => {
			if ( attributes.gridflowFont ) {
				const { gridflowFont } = attributes;

				const fonts = [];

				Object.values( gridflowFont ).map( ( font ) => {
					let weight = 'regular';

					if ( attributes[ font.weight ] ) {
						if ( attributes[ font.weight ] !== 'regular' ) {
							weight = `${ attributes[ font.weight ] },${ attributes[ font.weight ] }i`;
						}
					}

					if ( attributes[ font.name ] && gridFlowEditorData.systemFont && ! ( gridFlowEditorData.systemFont ).includes( attributes[ font.name ] ) ) {
						fonts.push( {
							font: attributes[ font.name ],
							weights: [ weight ],
						} );
					}
				} );

				setGGFont( fonts );
			}
		};

		useEffect( () => {
			const id = `gridflow-block-${ clientId.substr( 0, 8 ) }`;

			getFonts();

			if ( ! uniqueId ) {
				setAttributes( { uniqueId: id } );
			} else if ( uniqueId && uniqueId !== id ) {
				setAttributes( { uniqueId: id } );
			}

			if ( uniqueId ) {
				const inline = typeof inlineStyle !== 'undefined' ? inlineStyle( { name: blockName[ 1 ], attributes } ) : undefined;

				if ( inline ) {
					let styles = getStyle( inline.desktop, uniqueId );

					if ( inline.tablet && getPreviewDeviceType !== 'Desktop' ) {
						styles += getStyle( inline.tablet, uniqueId );
					}

					if ( inline.mobile && getPreviewDeviceType === 'Mobile' ) {
						styles += getStyle( inline.mobile, uniqueId );
					}

					const styleSelector = window.document;

					if ( styleSelector.getElementById( uniqueId ) === null ) {
						const cssInline = document.createElement( 'style' );
						cssInline.id = uniqueId;

						if ( cssInline.styleSheet ) {
							cssInline.styleSheet.cssText = styles;
						} else {
							cssInline.innerHTML = styles;
						}

						styleSelector.getElementsByTagName( 'head' )[ 0 ].appendChild( cssInline );
					} else {
						styleSelector.getElementById( uniqueId ).innerHTML = styles;
					}
				}
			}
		}, [ attributes, getPreviewDeviceType ] );

		return (
			<>
				{ ggFont.length > 0 && (
					<GoogleFontLoader
						fonts={ ggFont }
					/>
				) }
				<WrappedComponent { ...props } />
			</>
		);
	},
	'withInlineStyle'
);

export default withInlineStyle;
