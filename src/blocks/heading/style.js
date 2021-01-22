import { addFilter, hasFilter } from '@wordpress/hooks';

function inlineStyle( { attributes } ) {
	const {
		fontSizes,
		color,
		transform,
	} = attributes;

	let desktop = {},
		tablet = {},
		mobile = {};

	desktop = {
		'': {
			color: color || undefined,
			'text-transform': transform || undefined,
		},
		' .gridhub-heading__content': {
			'font-size': fontSizes.desktop || undefined,
			color: color || undefined,
			'text-transform': transform || undefined,
		},
	};

	tablet = {
		' .gridhub-heading__content': {
			'font-size': fontSizes.tablet || undefined,
		},
	};

	mobile = {
		' .gridhub-heading__content': {
			'font-size': fontSizes.mobile || undefined,
		},
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridhub.inlineStyle.heading', 'gridhub/inline/styles' ) ) {
	addFilter( 'gridhub.inlineStyle.heading', 'gridhub/inline/styles', function( output, attributes ) {
		return inlineStyle( { attributes } );
	} );
}
