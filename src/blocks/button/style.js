import { addFilter, hasFilter } from '@wordpress/hooks';
const {
	GridHubStyleTypography,
	GridHubStyleBox,
	GridHubStyleBorder,
	GridHubStyleBoxShadow,
} = wp.gridhubComponents;

function inlineStyle( { attributes } ) {
	const {
		textAligns,
		width,
		height,

		color,
		bgColor,
		padding,
		border,
		borderRadius,
		boxShadow,

		colorHover,
		bgColorHover,
		borderHover,
		borderRadiusHover,
		boxShadowHover,

		font,
		fontSize,
		lineHeight,
		fontWeight,
		decoration,
		transform,
		fontStyle,
		letterSpacing,
		iconPosition,
		iconSpacing,
		iconWidth,
		iconFontSize,
		iconLineHeight,
		iconColor,
		iconColorHover,
	} = attributes;

	const desktop = {
		'': {
			'text-align': textAligns?.desktop,
		},
		' a.gridhub-button__link': {
			width: width?.desktop,
			height: height?.desktop,
			color: color || undefined,
			background: bgColor || undefined,
			...GridHubStyleBox( padding, 'padding', 'desktop' ),
			...GridHubStyleBorder( border, 'desktop' ),
			...GridHubStyleBox( borderRadius, 'border-radius', 'desktop' ),
			...GridHubStyleBoxShadow( boxShadow ),
		},
		' a.gridhub-button__link:hover': {
			color: colorHover || undefined,
			background: bgColorHover || undefined,
			...GridHubStyleBorder( borderHover, 'desktop' ),
			...GridHubStyleBox( borderRadiusHover, 'border-radius', 'desktop' ),
			...GridHubStyleBoxShadow( boxShadowHover ),
		},
		' .gridhub-button__text': {
			...GridHubStyleTypography( { font, fontSize, lineHeight, fontWeight, decoration, transform, fontStyle, letterSpacing, device: 'desktop' } ),
		},
		' .gridhub-button__icon': {
			'margin-right': iconPosition === 'left' && iconSpacing ? iconSpacing : undefined,
			'margin-left': iconPosition === 'right' && iconSpacing ? iconSpacing : undefined,
		},
		' .gridhub-button__icon > img': {
			width: iconWidth?.desktop || undefined,
		},
		' .gridhub-button__icon > i': {
			'font-size': iconFontSize?.desktop,
			'line-height': iconLineHeight?.desktop,
			color: iconColor || undefined,
		},
		' a.gridhub-button__link:hover .gridhub-button__icon > i': {
			color: iconColorHover || undefined,
		},
	};

	const tablet = {
		'': {
			'text-align': textAligns?.tablet,
		},
		' a.gridhub-button__link': {
			width: width?.tablet,
			height: height?.tablet,
			...GridHubStyleBox( padding, 'padding', 'tablet' ),
			...GridHubStyleBorder( border, 'tablet' ),
			...GridHubStyleBox( borderRadius, 'border-radius', 'tablet' ),
		},
		' a.gridhub-button__link:hover': {
			...GridHubStyleBorder( borderHover, 'tablet' ),
			...GridHubStyleBox( borderRadiusHover, 'border-radius', 'tablet' ),
		},
		' .gridhub-button__text': {
			...GridHubStyleTypography( { fontSize, lineHeight, letterSpacing, device: 'tablet' } ),
		},
		' .gridhub-button__icon > img': {
			width: iconWidth?.tablet || undefined,
		},
		' .gridhub-button__icon > i': {
			'font-size': iconFontSize?.tablet,
			'line-height': iconLineHeight?.tablet,
		},
	};

	const mobile = {
		'': {
			'text-align': textAligns?.mobile,
		},
		' a.gridhub-button__link': {
			width: width?.mobile,
			height: height?.mobile,
			...GridHubStyleBox( padding, 'padding', 'mobile' ),
			...GridHubStyleBorder( border, 'mobile' ),
			...GridHubStyleBox( borderRadius, 'border-radius', 'mobile' ),
		},
		' a.gridhub-button__link:hover': {
			...GridHubStyleBorder( borderHover, 'mobile' ),
			...GridHubStyleBox( borderRadiusHover, 'border-radius', 'mobile' ),
		},
		' .gridhub-button__text': {
			...GridHubStyleTypography( { fontSize, lineHeight, letterSpacing, device: 'mobile' } ),
		},
		' .gridhub-button__icon > img': {
			width: iconWidth?.mobile || undefined,
		},
		' .gridhub-button__icon > i': {
			'font-size': iconFontSize?.mobile,
			'line-height': iconLineHeight?.mobile,
		},
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridhub.inlineStyle.button', 'gridhub/inline/styles' ) ) {
	addFilter( 'gridhub.inlineStyle.button', 'gridhub/inline/styles', function( attributes ) {
		return inlineStyle( { attributes } );
	} );
}
