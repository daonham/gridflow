import { addFilter, hasFilter } from '@wordpress/hooks';
const {
	GridFlowStyleTypography,
	GridFlowStyleTextShadow,
	GridFlowStyleBox,
	GridFlowStyleBorder,
	GridFlowStyleBoxShadow,
} = wp.gridflowComponents;

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
		' .gridflow-heading__content': {
			...GridFlowStyleTypography( {
				font,
				fontSize,
				lineHeight,
				fontWeight,
				decoration,
				transform,
				fontStyle,
				letterSpacing,
				device: 'desktop',
			} ),
			color: color || undefined,
			...GridFlowStyleTextShadow( textShadow ),
		},
		' .gridflow-heading__wrapper > span': {
			'margin-right':
				iconPosition === 'left' && iconSpacing
					? iconSpacing
					: undefined,
			'margin-left':
				iconPosition === 'right' && iconSpacing
					? iconSpacing
					: undefined,
			'align-self': iconAlignment || undefined,
			background: iconBackgroundColor || undefined,
			...GridFlowStyleBox( iconPadding, 'padding', 'desktop' ),
			...GridFlowStyleBorder( iconBorder, 'desktop' ),
			...GridFlowStyleBox( iconBorderRadius, 'border-radius', 'desktop' ),
			...GridFlowStyleBoxShadow( iconBoxShadow ),
		},
		' .gridflow-heading__wrapper > span > img': {
			width: iconWidth?.desktop || undefined,
		},
		' .gridflow-heading__wrapper > span > i': {
			'font-size': iconFontSize?.desktop,
			'line-height': iconLineHeight?.desktop,
			color: iconColor || undefined,
		},
	};

	const tablet = {
		'': {
			'text-align': textAligns?.tablet,
		},
		' .gridflow-heading__content': {
			...GridFlowStyleTypography( {
				fontSize,
				lineHeight,
				letterSpacing,
				device: 'tablet',
			} ),
		},
		' .gridflow-heading__wrapper > span': {
			...GridFlowStyleBox( iconPadding, 'padding', 'tablet' ),
			...GridFlowStyleBorder( iconBorder, 'tablet' ),
			...GridFlowStyleBox( iconBorderRadius, 'border-radius', 'tablet' ),
			...GridFlowStyleBoxShadow( iconBoxShadow ),
		},
		' .gridflow-heading__wrapper > span > img': {
			width: iconWidth?.tablet || undefined,
		},
		' .gridflow-heading__wrapper > span > i': {
			'font-size': iconFontSize?.tablet,
			'line-height': iconLineHeight?.tablet,
		},
	};

	const mobile = {
		'': {
			'text-align': textAligns?.mobile,
		},
		' .gridflow-heading__content': {
			...GridFlowStyleTypography( {
				fontSize,
				lineHeight,
				letterSpacing,
				device: 'mobile',
			} ),
		},
		' .gridflow-heading__wrapper > span': {
			...GridFlowStyleBox( iconPadding, 'padding', 'mobile' ),
			...GridFlowStyleBorder( iconBorder, 'mobile' ),
			...GridFlowStyleBox( iconBorderRadius, 'border-radius', 'mobile' ),
			...GridFlowStyleBoxShadow( iconBoxShadow ),
		},
		' .gridflow-heading__wrapper > span > img': {
			width: iconWidth?.mobile || undefined,
		},
		' .gridflow-heading__wrapper > span > i': {
			'font-size': iconFontSize?.mobile,
			'line-height': iconLineHeight?.mobile,
		},
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridflow.inlineStyle.heading', 'gridflow/inline/styles' ) ) {
	addFilter( 'gridflow.inlineStyle.heading', 'gridflow/inline/styles', function( output, attributes ) {
		return { ...output, ...inlineStyle( { attributes } ) };
	} );
}
