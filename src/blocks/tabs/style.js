import { addFilter, hasFilter } from '@wordpress/hooks';
const {
	GridFlowStyleBox,
	GridFlowStyleBorder,
	GridFlowStyleBoxShadow,
	GridFlowStyleTypography,
} = wp.gridflowComponents;

function inlineStyle( { attributes } ) {
	const {
		position,
		aligns,
		borderWidth,
		borderColor,

		color,
		font,
		fontSize,
		lineHeight,
		fontWeight,
		decoration,
		transform,
		fontStyle,
		letterSpacing,
		bgColor,
		marginTitle,
		paddingTitle,
		borderTitle,
		borderRadiusTitle,
		boxShadowTitle,
		colorActive,
		bgColorActive,
		borderTitleActive,
		borderRadiusTitleActive,
		boxShadowTitleActive,

		colorContent,
		bgColorContent,
		paddingContent,
		borderContent,
		borderRadiusContent,

		iconPosition,
		iconSpacing,
		fontSizeIcon,
		lineHeightIcon,
		imgWidthIcon,
		colorIcon,
		colorIconActive,
	} = attributes;

	const desktop = {
		' .gridflow-tabs__title': {
			// eslint-disable-next-line no-nested-ternary
			'justify-content': aligns?.desktop === 'left' ? 'flex-start' : aligns?.desktop === 'right' ? 'flex-end' : aligns?.desktop === 'justify' ? 'space-between' : aligns?.desktop,
		},
		' .gridflow-tabs__title > button.gridflow-tabs__title__button': {
			color,
			background: bgColor,
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
			...GridFlowStyleBox( marginTitle, 'margin', 'desktop' ),
			...GridFlowStyleBox( paddingTitle, 'padding', 'desktop' ),
			...GridFlowStyleBorder( borderTitle, 'desktop' ),
			...GridFlowStyleBox( borderRadiusTitle, 'border-radius', 'desktop' ),
			...GridFlowStyleBoxShadow( boxShadowTitle ),
		},
		' .gridflow-tabs__title > button.gridflow-tabs__title__button[aria-selected="true"]': {
			'border-width': borderWidth && borderWidth + 'px',
			'border-top-color': borderColor,
			'border-left-color': borderColor,
			'border-right-color': borderColor,
			color: colorActive,
			background: bgColorActive,
			...GridFlowStyleBorder( borderTitleActive, 'desktop' ),
			...GridFlowStyleBox( borderRadiusTitleActive, 'border-radius', 'desktop' ),
			...GridFlowStyleBoxShadow( boxShadowTitleActive ),
		},
		' .gridflow-tabs__title > button.gridflow-tabs__title__button.gridflow-tabs__title__button-active': {
			'border-width': borderWidth && borderWidth + 'px',
			'border-top-color': borderColor,
			'border-left-color': borderColor,
			'border-right-color': borderColor,
			color: colorActive,
			background: bgColorActive,
			...GridFlowStyleBorder( borderTitleActive, 'desktop' ),
			...GridFlowStyleBox( borderRadiusTitleActive, 'border-radius', 'desktop' ),
			...GridFlowStyleBoxShadow( boxShadowTitleActive ),
		},
		' .gridflow-tabs__title > button.gridflow-tabs__title__button[aria-selected="true"]::before': {
			'border-width': borderWidth && borderWidth + 'px',
			'border-color': borderColor,
		},
		' .gridflow-tabs__title > button.gridflow-tabs__title__button[aria-selected="true"]::after': {
			'border-width': borderWidth && borderWidth + 'px',
			'border-color': borderColor,
		},
		' .gridflow-tabs__title > button.gridflow-tabs__title__button.gridflow-tabs__title__button-active::before': {
			'border-width': borderWidth && borderWidth + 'px',
			'border-color': borderColor,
		},
		' .gridflow-tabs__title > button.gridflow-tabs__title__button.gridflow-tabs__title__button-active::after': {
			'border-width': borderWidth && borderWidth + 'px',
			'border-color': borderColor,
		},
		' .gridflow-tab__panel': {
			color: colorContent,
			background: bgColorContent,
			'border-width': borderWidth && borderWidth + 'px',
			'border-bottom-color': borderColor,
			'border-left-color': borderColor,
			'border-right-color': borderColor,
			...GridFlowStyleBox( paddingContent, 'padding', 'desktop' ),
			...GridFlowStyleBorder( borderContent, 'desktop' ),
			...GridFlowStyleBox( borderRadiusContent, 'border-radius', 'desktop' ),
		},
		' .gridflow-tabs__content .gridflow-tab [role="tabpanel"]': {
			color: colorContent,
			background: bgColorContent,
			'border-width': borderWidth && borderWidth + 'px',
			'border-bottom-color': borderColor,
			'border-left-color': borderColor,
			'border-right-color': borderColor,
			...GridFlowStyleBox( paddingContent, 'padding', 'desktop' ),
			...GridFlowStyleBorder( borderContent, 'desktop' ),
			...GridFlowStyleBox( borderRadiusContent, 'border-radius', 'desktop' ),
		},
		' .gridflow-tabs__title > button.gridflow-tabs__title__button > i': {
			'margin-right': iconPosition === 'left' && iconSpacing?.desktop ? iconSpacing.desktop : undefined,
			'margin-left': iconPosition === 'right' && iconSpacing?.desktop ? iconSpacing.desktop : undefined,
			'font-size': fontSizeIcon?.desktop,
			'line-height': lineHeightIcon?.desktop,
			color: colorIcon,
		},
		' .gridflow-tabs__title > button.gridflow-tabs__title__button > img': {
			'margin-right': iconPosition === 'left' && iconSpacing?.desktop ? iconSpacing.desktop : undefined,
			'margin-left': iconPosition === 'right' && iconSpacing?.desktop ? iconSpacing.desktop : undefined,
			width: imgWidthIcon?.desktop,
		},
		' .gridflow-tabs__title > button.gridflow-tabs__title__button.gridflow-tabs__title__button-active > i': {
			color: colorIconActive,
		},
	};

	const tablet = {
		' .gridflow-tabs__title': {
			// eslint-disable-next-line no-nested-ternary
			'justify-content': aligns?.tablet === 'left' ? 'flex-start' : aligns?.tablet === 'right' ? 'flex-end' : aligns?.tablet === 'justify' ? 'space-between' : aligns?.tablet,
		},
		' .gridflow-tabs__title > button.gridflow-tabs__title__button': {
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
			...GridFlowStyleBox( marginTitle, 'margin', 'tablet' ),
			...GridFlowStyleBox( paddingTitle, 'padding', 'tablet' ),
			...GridFlowStyleBorder( borderTitle, 'tablet' ),
			...GridFlowStyleBox( borderRadiusTitle, 'border-radius', 'tablet' ),
		},
		' .gridflow-tabs__title > button.gridflow-tabs__title__button[aria-selected="true"]': {
			...GridFlowStyleBorder( borderTitleActive, 'tablet' ),
			...GridFlowStyleBox( borderRadiusTitleActive, 'border-radius', 'tablet' ),
		},
		' .gridflow-tabs__title > button.gridflow-tabs__title__button.gridflow-tabs__title__button-active': {
			...GridFlowStyleBorder( borderTitleActive, 'tablet' ),
			...GridFlowStyleBox( borderRadiusTitleActive, 'border-radius', 'tablet' ),
		},
		' .gridflow-tab__panel': {
			...GridFlowStyleBox( paddingContent, 'padding', 'tablet' ),
			...GridFlowStyleBorder( borderContent, 'tablet' ),
			...GridFlowStyleBox( borderRadiusContent, 'border-radius', 'tablet' ),
		},
		' .gridflow-tabs__content .gridflow-tab [role="tabpanel"]': {
			...GridFlowStyleBox( paddingContent, 'padding', 'tablet' ),
			...GridFlowStyleBorder( borderContent, 'tablet' ),
			...GridFlowStyleBox( borderRadiusContent, 'border-radius', 'tablet' ),
		},
		' .gridflow-tabs__title > button.gridflow-tabs__title__button > i': {
			'margin-right': iconPosition === 'left' && iconSpacing?.tablet ? iconSpacing.tablet : undefined,
			'margin-left': iconPosition === 'right' && iconSpacing?.tablet ? iconSpacing.tablet : undefined,
			'font-size': fontSizeIcon?.tablet,
			'line-height': lineHeightIcon?.tablet,
		},
		' .gridflow-tabs__title > button.gridflow-tabs__title__button > img': {
			'margin-right': iconPosition === 'left' && iconSpacing?.tablet ? iconSpacing.tablet : undefined,
			'margin-left': iconPosition === 'right' && iconSpacing?.tablet ? iconSpacing.tablet : undefined,
			width: imgWidthIcon?.tablet,
		},
	};

	const mobile = {
		' .gridflow-tab > button.gridflow-tabs__title__button--mobile': {
			color,
			background: bgColor,
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
			...GridFlowStyleBox( marginTitle, 'margin', 'mobile' ),
			...GridFlowStyleBox( paddingTitle, 'padding', 'mobile' ),
			...GridFlowStyleBorder( borderTitle, 'mobile' ),
			...GridFlowStyleBox( borderRadiusTitle, 'border-radius', 'mobile' ),
			...GridFlowStyleBoxShadow( boxShadowTitle ),
		},
		' .gridflow-tab > button.gridflow-tabs__title__button--mobile[aria-selected="true"]': {
			'border-width': borderWidth && borderWidth + 'px',
			'border-top-color': borderColor,
			'border-left-color': borderColor,
			'border-right-color': borderColor,
			color: colorActive,
			background: bgColorActive,
			...GridFlowStyleBorder( borderTitleActive, 'mobile' ),
			...GridFlowStyleBox( borderRadiusTitleActive, 'border-radius', 'mobile' ),
			...GridFlowStyleBoxShadow( boxShadowTitleActive ),
		},
		' .gridflow-tab.is-selected > button.gridflow-tabs__title__button--mobile': {
			'border-width': borderWidth && borderWidth + 'px',
			'border-top-color': borderColor,
			'border-left-color': borderColor,
			'border-right-color': borderColor,
			color: colorActive,
			background: bgColorActive,
			...GridFlowStyleBorder( borderTitleActive, 'mobile' ),
			...GridFlowStyleBox( borderRadiusTitleActive, 'border-radius', 'mobile' ),
			...GridFlowStyleBoxShadow( boxShadowTitleActive ),
		},
		' .gridflow-tab__panel': {
			...GridFlowStyleBox( paddingContent, 'padding', 'mobile' ),
			...GridFlowStyleBorder( borderContent, 'mobile' ),
			...GridFlowStyleBox( borderRadiusContent, 'border-radius', 'mobile' ),
		},
		' .gridflow-tabs__content .gridflow-tab [role="tabpanel"]': {
			...GridFlowStyleBox( paddingContent, 'padding', 'mobile' ),
			...GridFlowStyleBorder( borderContent, 'mobile' ),
			...GridFlowStyleBox( borderRadiusContent, 'border-radius', 'mobile' ),
		},
		' .gridflow-tabs__title > button.gridflow-tabs__title__button > i': {
			'margin-right': iconPosition === 'left' && iconSpacing?.mobile ? iconSpacing.mobile : undefined,
			'margin-left': iconPosition === 'right' && iconSpacing?.mobile ? iconSpacing.mobile : undefined,
			'font-size': fontSizeIcon?.mobile,
			'line-height': lineHeightIcon?.mobile,
		},
		' .gridflow-tabs__title > button.gridflow-tabs__title__button > img': {
			'margin-right': iconPosition === 'left' && iconSpacing?.mobile ? iconSpacing.mobile : undefined,
			'margin-left': iconPosition === 'right' && iconSpacing?.mobile ? iconSpacing.mobile : undefined,
			width: imgWidthIcon?.mobile,
		},
	};

	// Returns the icon position.s
	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridflow.inlineStyle.tabs', 'gridflow/inline/styles' ) ) {
	addFilter( 'gridflow.inlineStyle.tabs', 'gridflow/inline/styles', function( attributes ) {
		return inlineStyle( { attributes } );
	} );
}
