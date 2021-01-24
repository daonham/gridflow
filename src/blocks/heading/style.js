import { addFilter, hasFilter } from '@wordpress/hooks';
const { GridHubStyleTypography } = wp.gridhubComponents;

function inlineStyle( { attributes } ) {
	const {
		color,
		font,
		fontSize,
		lineHeight,
		fontWeight,
		decoration,
		transform,
		fontStyle,
		letterSpacing,
	} = attributes;

	const desktop = {
		'': {
			color: color || undefined,
			'text-transform': transform || undefined,
		},
		' .gridhub-heading__content': {
			...GridHubStyleTypography( { font, fontSize, lineHeight, fontWeight, decoration, transform, fontStyle, letterSpacing, device: 'desktop' } ),
			color: color || undefined,
		},
	};

	const tablet = {
		' .gridhub-heading__content': {
			...GridHubStyleTypography( { fontSize, lineHeight, letterSpacing, device: 'tablet' } ),
		},
	};

	const mobile = {
		' .gridhub-heading__content': {
			...GridHubStyleTypography( { fontSize, lineHeight, letterSpacing, device: 'mobile' } ),
		},
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridhub.inlineStyle.heading', 'gridhub/inline/styles' ) ) {
	addFilter( 'gridhub.inlineStyle.heading', 'gridhub/inline/styles', function( output, attributes ) {
		return inlineStyle( { attributes } );
	} );
}
