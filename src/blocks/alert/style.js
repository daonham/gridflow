import { addFilter, hasFilter } from '@wordpress/hooks';
const {
	GridFlowStyleTypography,
	GridFlowStyleBox,
} = wp.gridflowComponents;

function inlineStyle( { attributes } ) {
	const {
		bgColor,
		borderColor,
		borderWidth,

		color,
		font,
		fontSize,
		lineHeight,
		fontWeight,
		decoration,
		transform,
		fontStyle,
		letterSpacing,
		paddingTitle,

		colorContent,
		fontContent,
		fontSizeContent,
		lineHeightContent,
		fontWeightContent,
		decorationContent,
		transformContent,
		fontStyleContent,
		letterSpacingContent,
		paddingContent,

		sizeIcon,
		iconSpacing,
		iconColor,
	} = attributes;

	const desktop = {
		' .gridflow-alert__wrapper': {
			'background-color': bgColor,
			'--gridflow-alert-border-color': borderColor,
			'--gridflow-border-width': borderWidth?.desktop && `${ borderWidth.desktop }px`,
		},
		' .gridflow-alert__title': {
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
			...GridFlowStyleBox( paddingTitle, 'padding', 'desktop' ),
		},
		' .gridflow-alert__content': {
			color: colorContent,
			...GridFlowStyleTypography( {
				font: fontContent,
				fontSize: fontSizeContent,
				lineHeight: lineHeightContent,
				fontWeight: fontWeightContent,
				decoration: decorationContent,
				transform: transformContent,
				fontStyle: fontStyleContent,
				letterSpacing: letterSpacingContent,
				device: 'desktop',
			} ),
			...GridFlowStyleBox( paddingContent, 'padding', 'desktop' ),
		},
		' .gridflow-alert__icon': {
			color: iconColor,
			'--gridflow-alert-icon-size': sizeIcon?.desktop && `${ sizeIcon.desktop }px`,
			'--gridflow-alert-icon-spacing': iconSpacing?.desktop && `${ iconSpacing.desktop }px`,
		},
	};

	const tablet = {
		' .gridflow-alert__wrapper': {
			'--gridflow-border-width': borderWidth?.tablet && `${ borderWidth.tablet }px`,
		},
		' .gridflow-alert__title': {
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
			...GridFlowStyleBox( paddingTitle, 'padding', 'tablet' ),
		},
		' .gridflow-alert__content': {
			...GridFlowStyleTypography( {
				font: fontContent,
				fontSize: fontSizeContent,
				lineHeight: lineHeightContent,
				fontWeight: fontWeightContent,
				decoration: decorationContent,
				transform: transformContent,
				fontStyle: fontStyleContent,
				letterSpacing: letterSpacingContent,
				device: 'tablet',
			} ),
			...GridFlowStyleBox( paddingContent, 'padding', 'tablet' ),
		},
		' .gridflow-alert__icon': {
			'--gridflow-alert-icon-size': sizeIcon?.tablet && `${ sizeIcon.tablet }px`,
			'--gridflow-alert-icon-spacing': iconSpacing?.tablet && `${ iconSpacing.tablet }px`,
		},
	};

	const mobile = {
		' .gridflow-alert__wrapper': {
			'--gridflow-border-width': borderWidth?.mobile !== null && `${ borderWidth.mobile }px`,
		},
		' .gridflow-alert__title': {
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
			...GridFlowStyleBox( paddingTitle, 'padding', 'mobile' ),
		},
		' .gridflow-alert__content': {
			...GridFlowStyleTypography( {
				font: fontContent,
				fontSize: fontSizeContent,
				lineHeight: lineHeightContent,
				fontWeight: fontWeightContent,
				decoration: decorationContent,
				transform: transformContent,
				fontStyle: fontStyleContent,
				letterSpacing: letterSpacingContent,
				device: 'mobile',
			} ),
			...GridFlowStyleBox( paddingContent, 'padding', 'mobile' ),
		},
		' .gridflow-alert__icon': {
			'--gridflow-alert-icon-size': sizeIcon?.mobile && `${ sizeIcon.mobile }px`,
			'--gridflow-alert-icon-spacing': iconSpacing?.mobile && `${ iconSpacing.mobile }px`,
		},
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridflow.inlineStyle.alert', 'gridflow/inline/styles' ) ) {
	addFilter( 'gridflow.inlineStyle.alert', 'gridflow/inline/styles', function( output, attributes ) {
		return { ...output, ...inlineStyle( { attributes } ) };
	} );
}
