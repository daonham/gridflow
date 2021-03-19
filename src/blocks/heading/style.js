import { addFilter, hasFilter } from '@wordpress/hooks';
const { GridHubStyleTypography, GridHubStyleTextShadow } = wp.gridhubComponents;

function inlineStyle( { attributes } ) {
	const {
		textAligns,
		color,
		font,
		fontSize,
		lineHeight,
		fontWeight,
		decoration,
		transform,
		fontStyle,
		letterSpacing,
		textShadow,
	} = attributes;

	const desktop = {
		'': {
			'text-transform': transform || undefined,
			'text-align': textAligns?.desktop,
		},
		' .gridhub-heading__content': {
			...GridHubStyleTypography( { font, fontSize, lineHeight, fontWeight, decoration, transform, fontStyle, letterSpacing, device: 'desktop' } ),
			color: color || undefined,
			...GridHubStyleTextShadow( textShadow ),
		},
	};

	const tablet = {
		'': {
			'text-align': textAligns?.tablet,
		},
		' .gridhub-heading__content': {
			...GridHubStyleTypography( { fontSize, lineHeight, letterSpacing, device: 'tablet' } ),
		},
	};

	const mobile = {
		'': {
			'text-align': textAligns?.mobile,
		},
		' .gridhub-heading__content': {
			...GridHubStyleTypography( { fontSize, lineHeight, letterSpacing, device: 'mobile' } ),
		},
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridhub.inlineStyle.heading', 'gridhub/inline/styles' ) ) {
	addFilter( 'gridhub.inlineStyle.heading', 'gridhub/inline/styles', function( attributes ) {
		return inlineStyle( { attributes } );
	} );
}
