import { addFilter, hasFilter } from '@wordpress/hooks';

const { GridFlowStyleBox, GridFlowStyleTypography } = wp.gridflowComponents;

function inlineStyle( { attributes } ) {
	const {
		color,
		bgColor,
		height,
		borderRadius,

		colorTitle,
		font,
		fontSize,
		lineHeight,
		fontWeight,
		decoration,
		transform,
		fontStyle,
		letterSpacing,
		spacing,

		colorCaption,
		fontCaption,
		fontSizeCaption,
		lineHeightCaption,
		fontWeightCaption,
		decorationCaption,
		transformCaption,
		fontStyleCaption,
		letterSpacingCaption,
		paddingCaption,

		colorPercent,
		fontPercent,
		fontSizePercent,
		lineHeightPercent,
		fontWeightPercent,
		decorationPercent,
		transformPercent,
		fontStylePercent,
		letterSpacingPercent,
		paddingPercent,
	} = attributes;

	const desktop = {
		' .gridflow-progress-bar__content': {
			height: height && height + 'px',
			...GridFlowStyleBox( borderRadius, 'border-radius', 'desktop' ),
		},
		' .gridflow-progress-bar__content__value': {
			background: bgColor,
			...GridFlowStyleBox( borderRadius, 'border-radius', 'desktop' ),
		},
		' .gridflow-progress-bar__content__label': {
			color,
			height: height && height + 'px',
			'line-height': height && height + 'px',
		},
		' .gridflow-progress-bar__title': {
			color: colorTitle,
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
			'margin-bottom': spacing?.desktop && spacing.desktop + 'px',
		},

		' .gridflow-progress-bar__content__label__caption': {
			color: colorCaption,
			...GridFlowStyleTypography( {
				font: fontCaption,
				fontSize: fontSizeCaption,
				lineHeight: lineHeightCaption,
				fontWeight: fontWeightCaption,
				decoration: decorationCaption,
				transform: transformCaption,
				fontStyle: fontStyleCaption,
				letterSpacing: letterSpacingCaption,
				device: 'desktop',
			} ),
			...GridFlowStyleBox( paddingCaption, 'padding', 'desktop' ),
		},
		' .gridflow-progress-bar__content__label__inner': {
			color: colorPercent,
			...GridFlowStyleTypography( {
				font: fontPercent,
				fontSize: fontSizePercent,
				lineHeight: lineHeightPercent,
				fontWeight: fontWeightPercent,
				decoration: decorationPercent,
				transform: transformPercent,
				fontStyle: fontStylePercent,
				letterSpacing: letterSpacingPercent,
				device: 'desktop',
			} ),
			...GridFlowStyleBox( paddingPercent, 'padding', 'desktop' ),
		},
	};

	const tablet = {
		' .gridflow-progress-bar__content': {
			...GridFlowStyleBox( borderRadius, 'border-radius', 'tablet' ),
		},
		' .gridflow-progress-bar__content__value': {
			...GridFlowStyleBox( borderRadius, 'border-radius', 'tablet' ),
		},
		' .gridflow-progress-bar__title': {
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
			'margin-bottom': spacing?.tablet && spacing.tablet + 'px',
		},

		' .gridflow-progress-bar__content__label__caption': {
			...GridFlowStyleTypography( {
				font: fontCaption,
				fontSize: fontSizeCaption,
				lineHeight: lineHeightCaption,
				fontWeight: fontWeightCaption,
				decoration: decorationCaption,
				transform: transformCaption,
				fontStyle: fontStyleCaption,
				letterSpacing: letterSpacingCaption,
				device: 'tablet',
			} ),
			...GridFlowStyleBox( paddingCaption, 'padding', 'tablet' ),
		},
		' .gridflow-progress-bar__content__label__inner': {
			...GridFlowStyleTypography( {
				font: fontPercent,
				fontSize: fontSizePercent,
				lineHeight: lineHeightPercent,
				fontWeight: fontWeightPercent,
				decoration: decorationPercent,
				transform: transformPercent,
				fontStyle: fontStylePercent,
				letterSpacing: letterSpacingPercent,
				device: 'tablet',
			} ),
			...GridFlowStyleBox( paddingPercent, 'padding', 'tablet' ),
		},
	};

	const mobile = {
		' .gridflow-progress-bar__content': {
			...GridFlowStyleBox( borderRadius, 'border-radius', 'mobile' ),
		},
		' .gridflow-progress-bar__content__value': {
			...GridFlowStyleBox( borderRadius, 'border-radius', 'mobile' ),
		},
		' .gridflow-progress-bar__title': {
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
			'margin-bottom': spacing?.mobile && spacing.mobile + 'px',
		},

		' .gridflow-progress-bar__content__label__caption': {
			...GridFlowStyleTypography( {
				font: fontCaption,
				fontSize: fontSizeCaption,
				lineHeight: lineHeightCaption,
				fontWeight: fontWeightCaption,
				decoration: decorationCaption,
				transform: transformCaption,
				fontStyle: fontStyleCaption,
				letterSpacing: letterSpacingCaption,
				device: 'mobile',
			} ),
			...GridFlowStyleBox( paddingCaption, 'padding', 'mobile' ),
		},
		' .gridflow-progress-bar__content__label__inner': {
			...GridFlowStyleTypography( {
				font: fontPercent,
				fontSize: fontSizePercent,
				lineHeight: lineHeightPercent,
				fontWeight: fontWeightPercent,
				decoration: decorationPercent,
				transform: transformPercent,
				fontStyle: fontStylePercent,
				letterSpacing: letterSpacingPercent,
				device: 'mobile',
			} ),
			...GridFlowStyleBox( paddingPercent, 'padding', 'mobile' ),
		},
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridflow.inlineStyle.progress-bar', 'gridflow/inline/styles' ) ) {
	addFilter( 'gridflow.inlineStyle.progress-bar', 'gridflow/inline/styles', function( attributes ) {
		return inlineStyle( { attributes } );
	} );
}
