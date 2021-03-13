import { addFilter, hasFilter } from '@wordpress/hooks';
const { GridHubStyleTypography, GridHubStyleTextShadow, GridHubStyleBox, GridHubStyleBorder, GridHubStyleBoxShadow } = wp.gridhubComponents;
const { gridHubDeviceValue } = wp.gridhubUtils;

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
		padding,
		margin,
		border,
		borderRadius,
		boxShadow,
	} = attributes;

	const desktop = {
		'': {
			'text-transform': transform || undefined,
			'text-align': gridHubDeviceValue( textAligns, 'desktop' ),
		},
		' .gridhub-heading__inner': {
			...GridHubStyleBox( padding, 'padding', 'desktop' ),
			...GridHubStyleBox( margin, 'margin', 'desktop' ),
			...GridHubStyleBorder( border, 'desktop' ),
			...GridHubStyleBox( borderRadius, 'border-radius', 'desktop' ),
			...GridHubStyleBoxShadow( boxShadow ),
		},
		' .gridhub-heading__content': {
			...GridHubStyleTypography( { font, fontSize, lineHeight, fontWeight, decoration, transform, fontStyle, letterSpacing, device: 'desktop' } ),
			color: color || undefined,
			...GridHubStyleTextShadow( textShadow ),
		},
	};

	const tablet = {
		'': {
			'text-align': gridHubDeviceValue( textAligns, 'tablet' ),
		},
		' .gridhub-heading__inner': {
			...GridHubStyleBox( padding, 'padding', 'tablet' ),
			...GridHubStyleBox( margin, 'margin', 'tablet' ),
			...GridHubStyleBorder( border, 'tablet' ),
			...GridHubStyleBox( borderRadius, 'border-radius', 'tablet' ),
		},
		' .gridhub-heading__content': {
			...GridHubStyleTypography( { fontSize, lineHeight, letterSpacing, device: 'tablet' } ),
		},
	};

	const mobile = {
		'': {
			'text-align': gridHubDeviceValue( textAligns, 'mobile' ),
		},
		' .gridhub-heading__inner': {
			...GridHubStyleBox( padding, 'padding', 'mobile' ),
			...GridHubStyleBox( margin, 'margin', 'mobile' ),
			...GridHubStyleBorder( border, 'mobile' ),
			...GridHubStyleBox( borderRadius, 'border-radius', 'mobile' ),
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
