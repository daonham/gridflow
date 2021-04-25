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
	};

	const tablet = {

	};

	const mobile = {

	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridflow.inlineStyle.tabs', 'gridflow/inline/styles' ) ) {
	addFilter( 'gridflow.inlineStyle.tabs', 'gridflow/inline/styles', function( attributes ) {
		return inlineStyle( { attributes } );
	} );
}
