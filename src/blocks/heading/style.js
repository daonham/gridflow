import { addFilter, hasFilter } from '@wordpress/hooks';
const {
	GridHubStyleTypography,
	GridHubStyleTextShadow,
	GridHubStyleBox,
	GridHubStyleBorder,
	GridHubStyleBoxShadow,
} = wp.gridhubComponents;

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
		iconPosition,
		iconSpacing,
		iconAlignment,
		iconWidth,
		iconFontSize,
		iconLineHeight,
		iconColor,
		iconBackgroundColor,
		iconPadding,
		iconBorder,
		iconBorderRadius,
		iconBoxShadow,
	} = attributes;

	const desktop = {
		'': {
			'text-align': textAligns?.desktop,
		},
		' .gridhub-heading__content': {
			...GridHubStyleTypography( { font, fontSize, lineHeight, fontWeight, decoration, transform, fontStyle, letterSpacing, device: 'desktop' } ),
			color: color || undefined,
			...GridHubStyleTextShadow( textShadow ),
		},
		' .gridhub-heading__wrapper > span': {
			'margin-right': iconPosition === 'left' && iconSpacing ? iconSpacing : undefined,
			'margin-left': iconPosition === 'right' && iconSpacing ? iconSpacing : undefined,
			'align-self': iconAlignment || undefined,
			background: iconBackgroundColor || undefined,
			...GridHubStyleBox( iconPadding, 'padding', 'desktop' ),
			...GridHubStyleBorder( iconBorder, 'desktop' ),
			...GridHubStyleBox( iconBorderRadius, 'border-radius', 'desktop' ),
			...GridHubStyleBoxShadow( iconBoxShadow ),
		},
		' .gridhub-heading__wrapper > span > img': {
			width: iconWidth?.desktop || undefined,
		},
		' .gridhub-heading__wrapper > span > i': {
			'font-size': iconFontSize?.desktop,
			'line-height': iconLineHeight?.desktop,
			color: iconColor || undefined,
		},
	};

	const tablet = {
		'': {
			'text-align': textAligns?.tablet,
		},
		' .gridhub-heading__content': {
			...GridHubStyleTypography( { fontSize, lineHeight, letterSpacing, device: 'tablet' } ),
		},
		' .gridhub-heading__wrapper > span': {
			...GridHubStyleBox( iconPadding, 'padding', 'tablet' ),
			...GridHubStyleBorder( iconBorder, 'tablet' ),
			...GridHubStyleBox( iconBorderRadius, 'border-radius', 'tablet' ),
			...GridHubStyleBoxShadow( iconBoxShadow ),
		},
		' .gridhub-heading__wrapper > span > img': {
			width: iconWidth?.tablet || undefined,
		},
		' .gridhub-heading__wrapper > span > i': {
			'font-size': iconFontSize?.tablet,
			'line-height': iconLineHeight?.tablet,
		},
	};

	const mobile = {
		'': {
			'text-align': textAligns?.mobile,
		},
		' .gridhub-heading__content': {
			...GridHubStyleTypography( { fontSize, lineHeight, letterSpacing, device: 'mobile' } ),
		},
		' .gridhub-heading__wrapper > span': {
			...GridHubStyleBox( iconPadding, 'padding', 'mobile' ),
			...GridHubStyleBorder( iconBorder, 'mobile' ),
			...GridHubStyleBox( iconBorderRadius, 'border-radius', 'mobile' ),
			...GridHubStyleBoxShadow( iconBoxShadow ),
		},
		' .gridhub-heading__wrapper > span > img': {
			width: iconWidth?.mobile || undefined,
		},
		' .gridhub-heading__wrapper > span > i': {
			'font-size': iconFontSize?.mobile,
			'line-height': iconLineHeight?.mobile,
		},
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridhub.inlineStyle.heading', 'gridhub/inline/styles' ) ) {
	addFilter( 'gridhub.inlineStyle.heading', 'gridhub/inline/styles', function( attributes ) {
		return inlineStyle( { attributes } );
	} );
}
