import { addFilter, hasFilter } from '@wordpress/hooks';
const {
	GridFlowStyleBox,
	GridFlowStyleBorder,
	GridFlowStyleBoxShadow,
	GridFlowStyleTypography,
} = wp.gridflowComponents;

function inlineStyle( { attributes } ) {
	const {
		spacing,
		boxShadow,
		titleTextAligns,
		titleColor,
		bgTitleColor,
		font,
		fontSize,
		lineHeight,
		fontWeight,
		decoration,
		transform,
		fontStyle,
		letterSpacing,
		titlePadding,
		titleBorder,
		titleBorderRadius,

		titleColorActive,
		bgTitleColorActive,
		fontWeightActive,
		titleBorderActive,
		titleBorderRadiusActive,

		iconAlign,
		iconColor,
		iconColorActive,
		iconFontSize,
		iconSpacing,

		contentColor,
		bgContentColor,
		contentPadding,
		contentBorder,
		contentBorderRadius,
	} = attributes;
	const desktop = {
		' .gridflow-accordion__item': {
			'margin-bottom': spacing?.desktop ? spacing.desktop + 'px' : undefined,
			...GridFlowStyleBoxShadow( boxShadow ),
		},
		' .gridflow-accordion__item__title': {
			'text-align': titleTextAligns?.desktop,
			color: titleColor,
			background: bgTitleColor,
			...GridFlowStyleBox( titlePadding, 'padding', 'desktop' ),
			...GridFlowStyleBorder( titleBorder, 'desktop' ),
			...GridFlowStyleBox( titleBorderRadius, 'border-radius', 'desktop' ),
		},
		' .gridflow-accordion__item__title-content': {
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
		' .gridflow-accordion__item .gridflow-accordion__item__icon i:before': {
			color: iconColor,
			'font-size': iconFontSize?.desktop,
		},
		' .gridflow-accordion__item .gridflow-accordion__item__icon': {
			'margin-right': iconAlign === 'left' && iconSpacing?.desktop ? iconSpacing.desktop : 0,
			'margin-left': iconAlign === 'right' && iconSpacing?.desktop ? iconSpacing.desktop : 0,
		},
		' .gridflow-accordion__item.active .gridflow-accordion__item__title': {
			color: titleColorActive,
			background: bgTitleColorActive,
			...GridFlowStyleBorder( titleBorderActive, 'desktop' ),
			...GridFlowStyleBox( titleBorderRadiusActive, 'border-radius', 'desktop' ),
		},
		' .gridflow-accordion__item.active .gridflow-accordion__item__title-content': {
			'font-weight': fontWeightActive || undefined,
		},
		' .gridflow-accordion__item.active .gridflow-accordion__item__icon i:before': {
			color: iconColorActive,
		},
		' .gridflow-accordion__item .gridflow-accordion__item__title:hover': {
			color: titleColorActive,
			background: bgTitleColorActive,
			...GridFlowStyleBorder( titleBorderActive, 'desktop' ),
			...GridFlowStyleBox( titleBorderRadiusActive, 'border-radius', 'desktop' ),
		},
		' .gridflow-accordion__item .gridflow-accordion__item__title:hover .gridflow-accordion__item__title-content': {
			'font-weight': fontWeightActive || undefined,
		},
		' .gridflow-accordion__item .gridflow-accordion__item__title:hover .gridflow-accordion__item__icon i:before': {
			color: iconColorActive,
		},
		' .gridflow-accordion__item__content': {
			color: contentColor,
			background: bgContentColor,
			...GridFlowStyleBox( contentPadding, 'padding', 'desktop' ),
			...GridFlowStyleBorder( contentBorder, 'desktop' ),
			...GridFlowStyleBox( contentBorderRadius, 'border-radius', 'desktop' ),
		},
	};

	const tablet = {
		' .gridflow-accordion__item': {
			'margin-bottom': spacing?.tablet ? spacing.tablet + 'px' : undefined,
		},
		' .gridflow-accordion__item__title': {
			'text-align': titleTextAligns?.tablet,
			...GridFlowStyleBox( titlePadding, 'padding', 'tablet' ),
			...GridFlowStyleBorder( titleBorder, 'tablet' ),
			...GridFlowStyleBox( titleBorderRadius, 'border-radius', 'tablet' ),
		},
		' .gridflow-accordion__item__title-content': {
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
		},
		' .gridflow-accordion__item .gridflow-accordion__item__icon i:before': {
			'font-size': iconFontSize?.tablet,
		},
		' .gridflow-accordion__item .gridflow-accordion__item__icon': {
			'margin-right': iconAlign === 'left' && iconSpacing?.tablet ? iconSpacing.tablet : undefined,
			'margin-left': iconAlign === 'right' && iconSpacing?.tablet ? iconSpacing.tablet : undefined,
		},
		' .gridflow-accordion__item.active .gridflow-accordion__item__title': {
			...GridFlowStyleBorder( titleBorderActive, 'tablet' ),
			...GridFlowStyleBox( titleBorderRadiusActive, 'border-radius', 'tablet' ),
		},
		' .gridflow-accordion__item .gridflow-accordion__item__title:hover': {
			...GridFlowStyleBorder( titleBorderActive, 'tablet' ),
			...GridFlowStyleBox( titleBorderRadiusActive, 'border-radius', 'tablet' ),
		},
		' .gridflow-accordion__item__content': {
			...GridFlowStyleBox( contentPadding, 'padding', 'tablet' ),
			...GridFlowStyleBorder( contentBorder, 'tablet' ),
			...GridFlowStyleBox( contentBorderRadius, 'border-radius', 'tablet' ),
		},
	};

	const mobile = {
		' .gridflow-accordion__item': {
			'margin-bottom': spacing?.mobile ? spacing.mobile + 'px' : undefined,
		},
		' .gridflow-accordion__item__title': {
			'text-align': titleTextAligns?.mobile,
			...GridFlowStyleBox( titlePadding, 'padding', 'mobile' ),
			...GridFlowStyleBorder( titleBorder, 'mobile' ),
			...GridFlowStyleBox( titleBorderRadius, 'border-radius', 'mobile' ),
		},
		' .gridflow-accordion__item__title-content': {
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
		},
		' .gridflow-accordion__item .gridflow-accordion__item__icon i:before': {
			'font-size': iconFontSize?.mobile,
		},
		' .gridflow-accordion__item .gridflow-accordion__item__icon': {
			'margin-right': iconAlign === 'left' && iconSpacing?.mobile ? iconSpacing.mobile : undefined,
			'margin-left': iconAlign === 'right' && iconSpacing?.mobile ? iconSpacing.mobile : undefined,
		},
		' .gridflow-accordion__item.active .gridflow-accordion__item__title': {
			...GridFlowStyleBorder( titleBorderActive, 'mobile' ),
			...GridFlowStyleBox( titleBorderRadiusActive, 'border-radius', 'mobile' ),
		},
		' .gridflow-accordion__item .gridflow-accordion__item__title:hover': {
			...GridFlowStyleBorder( titleBorderActive, 'mobile' ),
			...GridFlowStyleBox( titleBorderRadiusActive, 'border-radius', 'mobile' ),
		},
		' .gridflow-accordion__item__content': {
			...GridFlowStyleBox( contentPadding, 'padding', 'mobile' ),
			...GridFlowStyleBorder( contentBorder, 'mobile' ),
			...GridFlowStyleBox( contentBorderRadius, 'border-radius', 'mobile' ),
		},
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridflow.inlineStyle.accordion', 'gridflow/inline/styles' ) ) {
	addFilter( 'gridflow.inlineStyle.accordion', 'gridflow/inline/styles', function( output, attributes ) {
		return { ...output, ...inlineStyle( { attributes } ) };
	} );
}
