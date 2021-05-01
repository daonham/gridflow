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
	};

	const mobile = {
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridflow.inlineStyle.divider', 'gridflow/inline/styles' ) ) {
	addFilter( 'gridflow.inlineStyle.divider', 'gridflow/inline/styles', function( attributes ) {
		return inlineStyle( { attributes } );
	} );
}
