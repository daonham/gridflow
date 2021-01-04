import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { BaseControl } from '@wordpress/components';

import ggFonts from './google-fonts.json';

const Text = ( {
	label = __( 'Text', 'gridhub' ),
	font,
	setFont,
	size,
	setSize,
} ) => {
	const [ fonts, setFonts ] = useState( null );
	const [ variants, setVariants ] = useState( null );
	const [ search, setSearch ] = useState( '' );

	useEffect( () => {
		setFonts( ggFonts.items );

		if ( font ) {
			ggFonts.items.find( ( i ) => {
				if ( font === i.family ) {
					const variant = i.variants
						.filter( ( o ) => false === o.includes( 'italic' ) )
						.map( ( o ) => {
							return ( o = {
								label: startCase( toLower( o ) ),
								value: o,
							} );
						} );

					return setVariants( variant );
				}
			} );
		}
	}, [] );

	return (
		<>
			<BaseControl id={ null } className="gridhub-text-editor-component" label={ label }>

			</BaseControl>
		</>
	);
};
export default Text;
