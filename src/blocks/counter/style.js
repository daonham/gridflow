import { addFilter, hasFilter } from '@wordpress/hooks';
const {
	GridFlowStyleBox,
	GridFlowStyleBorder,
	GridFlowStyleBoxShadow,
	GridFlowStyleTypography,
} = wp.gridflowComponents;

function inlineStyle( { attributes } ) {
	const {
		color,
		font,
		fontSize,
		lineHeight,
		fontWeight,
		decoration,
		transform,
		fontStyle,
		letterSpacing,
		paddingNumber,
		borderNumber,
		borderRadiusNumber,
		boxShadowNumber,

		colorTitle,
		fontTitle,
		fontSizeTitle,
		lineHeightTitle,
		fontWeightTitle,
		decorationTitle,
		transformTitle,
		fontStyleTitle,
		letterSpacingTitle,
	} = attributes;

	const desktop = {
		' .gridflow-counter__number': {
			color,
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
			...GridFlowStyleBox( paddingNumber, 'padding', 'desktop' ),
			...GridFlowStyleBorder( borderNumber, 'desktop' ),
			...GridFlowStyleBox( borderRadiusNumber, 'border-radius', 'desktop' ),
			...GridFlowStyleBoxShadow( boxShadowNumber ),
		},
		' .gridflow-counter__title': {
			color: colorTitle,
			...GridFlowStyleTypography( {
				font: fontTitle,
				fontSize: fontSizeTitle,
				lineHeight: lineHeightTitle,
				fontWeight: fontWeightTitle,
				decoration: decorationTitle,
				transform: transformTitle,
				fontStyle: fontStyleTitle,
				letterSpacing: letterSpacingTitle,
				device: 'desktop',
			} ),
		},
	};

	const tablet = {
		' .gridflow-counter__number': {
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
			...GridFlowStyleBox( paddingNumber, 'padding', 'tablet' ),
			...GridFlowStyleBorder( borderNumber, 'tablet' ),
			...GridFlowStyleBox( borderRadiusNumber, 'border-radius', 'tablet' ),
		},
		' .gridflow-counter__title': {
			...GridFlowStyleTypography( {
				font: fontTitle,
				fontSize: fontSizeTitle,
				lineHeight: lineHeightTitle,
				fontWeight: fontWeightTitle,
				decoration: decorationTitle,
				transform: transformTitle,
				fontStyle: fontStyleTitle,
				letterSpacing: letterSpacingTitle,
				device: 'tablet',
			} ),
		},
	};

	const mobile = {
		' .gridflow-counter__number': {
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
			...GridFlowStyleBox( paddingNumber, 'padding', 'mobile' ),
			...GridFlowStyleBorder( borderNumber, 'mobile' ),
			...GridFlowStyleBox( borderRadiusNumber, 'border-radius', 'mobile' ),
		},
		' .gridflow-counter__title': {
			...GridFlowStyleTypography( {
				font: fontTitle,
				fontSize: fontSizeTitle,
				lineHeight: lineHeightTitle,
				fontWeight: fontWeightTitle,
				decoration: decorationTitle,
				transform: transformTitle,
				fontStyle: fontStyleTitle,
				letterSpacing: letterSpacingTitle,
				device: 'mobile',
			} ),
		},
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridflow.inlineStyle.counter', 'gridflow/inline/styles' ) ) {
	addFilter( 'gridflow.inlineStyle.counter', 'gridflow/inline/styles', function( output, attributes ) {
		return { ...output, ...inlineStyle( { attributes } ) };
	} );
}
