import { addFilter, hasFilter } from '@wordpress/hooks';
const {
	GridFlowStyleTypography,
	GridFlowStyleBox,
	GridFlowStyleBorder,
	GridFlowStyleBoxShadow,
} = wp.gridflowComponents;

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
		' .gridflow-button__inner > a.gridflow-button__link': {
			width: width?.desktop,
			height: height?.desktop,
			color: color || undefined,
			background: bgColor || undefined,
			...GridFlowStyleBox( padding, 'padding', 'desktop' ),
			...GridFlowStyleBorder( border, 'desktop' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'desktop' ),
			...GridFlowStyleBoxShadow( boxShadow ),
		},
		' .gridflow-button__inner > a.gridflow-button__link:hover': {
			color: colorHover || undefined,
			background: bgColorHover || undefined,
			...GridFlowStyleBorder( borderHover, 'desktop' ),
			...GridFlowStyleBox( borderRadiusHover, 'border-radius', 'desktop' ),
			...GridFlowStyleBoxShadow( boxShadowHover ),
		},
		' a.gridflow-button__link > .gridflow-button__text': {
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
		},
		' a.gridflow-button__link > .gridflow-button__icon': {
			'margin-right':
				iconPosition === 'left' && iconSpacing
					? iconSpacing
					: undefined,
			'margin-left':
				iconPosition === 'right' && iconSpacing
					? iconSpacing
					: undefined,
		},
		' a.gridflow-button__link > .gridflow-button__icon > img': {
			width: iconWidth?.desktop || undefined,
		},
		' a.gridflow-button__link > .gridflow-button__icon > i': {
			'font-size': iconFontSize?.desktop,
			'line-height': iconLineHeight?.desktop,
			color: iconColor || undefined,
		},
		' a.gridflow-button__link:hover .gridflow-button__icon > i': {
			color: iconColorHover || undefined,
		},
	};

	const tablet = {
		'': {
			'text-align': textAligns?.tablet,
		},
		' .gridflow-button__inner > a.gridflow-button__link': {
			width: width?.tablet,
			height: height?.tablet,
			...GridFlowStyleBox( padding, 'padding', 'tablet' ),
			...GridFlowStyleBorder( border, 'tablet' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'tablet' ),
		},
		' .gridflow-button__inner > a.gridflow-button__link:hover': {
			...GridFlowStyleBorder( borderHover, 'tablet' ),
			...GridFlowStyleBox( borderRadiusHover, 'border-radius', 'tablet' ),
		},
		' a.gridflow-button__link > .gridflow-button__text': {
			...GridFlowStyleTypography( {
				fontSize,
				lineHeight,
				letterSpacing,
				device: 'tablet',
			} ),
		},
		' a.gridflow-button__link > .gridflow-button__icon > img': {
			width: iconWidth?.tablet || undefined,
		},
		' a.gridflow-button__link > .gridflow-button__icon > i': {
			'font-size': iconFontSize?.tablet,
			'line-height': iconLineHeight?.tablet,
		},
	};

	const mobile = {
		'': {
			'text-align': textAligns?.mobile,
		},
		' .gridflow-button__inner > a.gridflow-button__link': {
			width: width?.mobile,
			height: height?.mobile,
			...GridFlowStyleBox( padding, 'padding', 'mobile' ),
			...GridFlowStyleBorder( border, 'mobile' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'mobile' ),
		},
		' .gridflow-button__inner > a.gridflow-button__link:hover': {
			...GridFlowStyleBorder( borderHover, 'mobile' ),
			...GridFlowStyleBox( borderRadiusHover, 'border-radius', 'mobile' ),
		},
		' a.gridflow-button__link > .gridflow-button__text': {
			...GridFlowStyleTypography( {
				fontSize,
				lineHeight,
				letterSpacing,
				device: 'mobile',
			} ),
		},
		' a.gridflow-button__link > .gridflow-button__icon > img': {
			width: iconWidth?.mobile || undefined,
		},
		' a.gridflow-button__link > .gridflow-button__icon > i': {
			'font-size': iconFontSize?.mobile,
			'line-height': iconLineHeight?.mobile,
		},
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridflow.inlineStyle.button', 'gridflow/inline/styles' ) ) {
	addFilter( 'gridflow.inlineStyle.button', 'gridflow/inline/styles', function(
		attributes
	) {
		return inlineStyle( { attributes } );
	} );
}
