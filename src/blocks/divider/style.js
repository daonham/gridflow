import { addFilter, hasFilter } from '@wordpress/hooks';
const {
	GridFlowStyleTypography,
	GridFlowStyleBox,
	GridFlowStyleBorder,
	GridFlowStyleBoxShadow,
} = wp.gridflowComponents;

function inlineStyle( { attributes } ) {
	const {
		style,
		textAligns,
		width,
		height,
		color,

		colorText,
		font,
		fontSize,
		lineHeight,
		fontWeight,
		decoration,
		transform,
		fontStyle,
		letterSpacing,
		textPosition,
		textSpacing,

		iconPosition,
		iconSpacing,
		iconWidth,
		iconFontSize,
		iconColor,
		iconBackgroundColor,
		iconPadding,
		iconBorder,
		iconBorderRadius,
		iconBoxShadow,
	} = attributes;

	const desktop = {
		' .gridflow-divider-separator': {
			width: width?.desktop,
			margin: '0 auto',
			'margin-left': textAligns?.desktop === 'left' ? '0' : undefined,
			'margin-right': textAligns?.desktop === 'right' ? '0' : undefined,
			'--divider-border-width': height?.desktop,
			'--divider-border-color': color,
			'--divider-border-style': style,
		},
		' .gridflow-divider__text': {
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
			color: colorText || undefined,
			'margin-left': textPosition !== 'left' && textSpacing?.desktop ? `${ textSpacing.desktop }px` : 0,
			'margin-right': textPosition !== 'right' && textSpacing?.desktop ? `${ textSpacing.desktop }px` : 0,
		},
		' .gridflow-divider-separator--text::before': {
			content: textPosition === 'left' ? 'none' : undefined,
		},
		' .gridflow-divider-separator--text::after': {
			content: textPosition === 'right' ? 'none' : undefined,
		},
		' .gridflow-divider__icon': {
			'margin-left': iconPosition !== 'left' && iconSpacing?.desktop ? iconSpacing.desktop : 0,
			'margin-right': iconPosition !== 'right' && iconSpacing?.desktop ? iconSpacing.desktop  : 0,
			background: iconBackgroundColor || undefined,
			...GridFlowStyleBox( iconPadding, 'padding', 'desktop' ),
			...GridFlowStyleBorder( iconBorder, 'desktop' ),
			...GridFlowStyleBox( iconBorderRadius, 'border-radius', 'desktop' ),
			...GridFlowStyleBoxShadow( iconBoxShadow ),
		},
		' .gridflow-divider-separator--icon::before': {
			content: iconPosition === 'left' ? 'none' : undefined,
		},
		' .gridflow-divider-separator--icon::after': {
			content: iconPosition === 'right' ? 'none' : undefined,
		},
		' .gridflow-divider__icon > img': {
			width: iconWidth?.desktop || undefined,
		},
		' .gridflow-divider__icon > i': {
			'font-size': iconFontSize?.desktop,
			color: iconColor || undefined,
		},
	};

	const tablet = {
		' .gridflow-divider-separator': {
			width: width?.tablet,
			'margin-left': textAligns?.tablet === 'left' ? '0' : undefined,
			'margin-right': textAligns?.tablet === 'right' ? '0' : undefined,
			'--divider-border-width': height?.tablet,
		},
		' .gridflow-divider__text': {
			...GridFlowStyleTypography( {
				font,
				fontSize,
				lineHeight,
				fontWeight,
				decoration,
				transform,
				fontStyle,
				letterSpacing,
				device: 'tablet',
			} ),
			'margin-left': textPosition !== 'left' && textSpacing?.tablet ? `${ textSpacing.tablet }px` : 0,
			'margin-right': textPosition !== 'right' && textSpacing?.tablet ? `${ textSpacing.tablet }px` : 0,
		},
		' .gridflow-divider__icon': {
			'margin-left': iconPosition !== 'left' && iconSpacing?.tablet ? iconSpacing.tablet : 0,
			'margin-right': iconPosition !== 'right' && iconSpacing?.tablet ? iconSpacing.tablet  : 0,
			...GridFlowStyleBox( iconPadding, 'padding', 'tablet' ),
			...GridFlowStyleBorder( iconBorder, 'tablet' ),
			...GridFlowStyleBox( iconBorderRadius, 'border-radius', 'tablet' ),
		},
		' .gridflow-divider__icon > img': {
			width: iconWidth?.tablet || undefined,
		},
		' .gridflow-divider__icon > i': {
			'font-size': iconFontSize?.tablet,
		},
	};

	const mobile = {
		' .gridflow-divider-separator': {
			width: width?.mobile,
			'margin-left': textAligns?.mobile === 'left' ? '0' : undefined,
			'margin-right': textAligns?.mobile === 'right' ? '0' : undefined,
			'--divider-border-width': height?.mobile,
		},
		' .gridflow-divider__text': {
			...GridFlowStyleTypography( {
				font,
				fontSize,
				lineHeight,
				fontWeight,
				decoration,
				transform,
				fontStyle,
				letterSpacing,
				device: 'mobile',
			} ),
			'margin-left': textPosition !== 'left' && textSpacing?.mobile ? `${ textSpacing.mobile }px` : 0,
			'margin-right': textPosition !== 'right' && textSpacing?.mobile ? `${ textSpacing.mobile }px` : 0,
		},
		' .gridflow-divider__icon': {
			'margin-left': iconPosition !== 'left' && iconSpacing?.mobile ? iconSpacing.mobile : 0,
			'margin-right': iconPosition !== 'right' && iconSpacing?.mobile ? iconSpacing.mobile  : 0,
			...GridFlowStyleBox( iconPadding, 'padding', 'mobile' ),
			...GridFlowStyleBorder( iconBorder, 'mobile' ),
			...GridFlowStyleBox( iconBorderRadius, 'border-radius', 'mobile' ),
		},
		' .gridflow-divider__icon > img': {
			width: iconWidth?.mobile || undefined,
		},
		' .gridflow-divider__icon > i': {
			'font-size': iconFontSize?.mobile,
		},
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridflow.inlineStyle.divider', 'gridflow/inline/styles' ) ) {
	addFilter( 'gridflow.inlineStyle.divider', 'gridflow/inline/styles', function( attributes ) {
		return inlineStyle( { attributes } );
	} );
}
