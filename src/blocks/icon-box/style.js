import { addFilter, hasFilter } from '@wordpress/hooks';
const {
	GridFlowStyleTypography,
	GridFlowStyleBox,
	GridFlowStyleBorder,
	GridFlowStyleBoxShadow,
} = wp.gridflowComponents;

function inlineStyle( { attributes } ) {
	const {
		iconPosition,
		spacing,
		color,
		bgColor,
		fontSize,
		lineHeight,
		imgWidth,
		width,
		height,
		border,
		borderRadius,
		boxShadow,

		colorHover,
		bgColorHover,
		transition,

		contentAlignment,
		contentVerticalAlignment,
		contentColor,
		contentBackgroundColor,
		contentMargin,
		contentPadding,
		contentBorder,
		contentBorderRadius,
		contentBoxShadow,
	} = attributes;

	const desktop = {
		' .gridflow-icon-box__wrapper' : {
			'text-align': contentAlignment?.desktop,
			'align-items': contentVerticalAlignment,
		},
		' .gridflow-icon-box__icon': {
			background: bgColor,
			'width': width?.desktop,
			'height': height?.desktop,
			'margin-bottom': iconPosition === 'top' && spacing?.desktop !== undefined && spacing?.desktop !== null ? `${spacing.desktop}px` : undefined,
			'margin-right': iconPosition === 'left' && spacing?.desktop !== undefined && spacing?.desktop !== null ? `${spacing.desktop}px` : undefined,
			'margin-left': iconPosition === 'right' && spacing?.desktop !== undefined && spacing?.desktop !== null ? `${spacing.desktop}px` : undefined,
			...GridFlowStyleBorder( border, 'desktop' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'desktop' ),
			...GridFlowStyleBoxShadow( boxShadow ),
		},
		' .gridflow-icon-box__i': {
			transition: transition ? `all ${transition}s` : undefined,
			'font-size': fontSize?.desktop,
			'line-height': lineHeight?.desktop,
			color: color,
		},
		' .gridflow-icon-box__img': {
			width: imgWidth?.desktop,
		},
		' .gridflow-icon-box__icon:hover': {
			background: bgColorHover,
		},
		' .gridflow-icon-box__icon:hover .gridflow-icon-box__i': {
			transition: transition ? `all ${transition}s` : undefined,
			color: colorHover,
		},
		' .gridflow-image-box__content' : {
			color: contentColor,
			background: contentBackgroundColor,
			...GridFlowStyleBox( contentMargin, 'margin', 'desktop' ),
			...GridFlowStyleBox( contentPadding, 'padding', 'desktop' ),
			...GridFlowStyleBorder( contentBorder, 'desktop' ),
			...GridFlowStyleBox( contentBorderRadius, 'border-radius', 'desktop' ),
			...GridFlowStyleBoxShadow( contentBoxShadow ),
		}
	};

	const tablet = {
		' .gridflow-icon-box__wrapper' : {
			'text-align': contentAlignment?.tablet,
		},
		' .gridflow-icon-box__icon': {
			'width': width?.tablet,
			'height': height?.tablet,
			'margin-bottom': iconPosition === 'top' && spacing?.tablet !== undefined && spacing?.tablet !== null ? `${spacing.tablet}px` : undefined,
			'margin-right': iconPosition === 'left' && spacing?.tablet !== undefined && spacing?.tablet !== null ? `${spacing.tablet}px` : undefined,
			'margin-left': iconPosition === 'right' && spacing?.tablet !== undefined && spacing?.tablet !== null ? `${spacing.tablet}px` : undefined,
			...GridFlowStyleBorder( border, 'tablet' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'tablet' ),
		},
		' .gridflow-icon-box__i': {
			'font-size': fontSize?.tablet,
			'line-height': lineHeight?.tablet,
		},
		' .gridflow-icon-box__img': {
			width: imgWidth?.tablet,
		},
		' .gridflow-image-box__content' : {
			...GridFlowStyleBox( contentMargin, 'margin', 'tablet' ),
			...GridFlowStyleBox( contentPadding, 'padding', 'tablet' ),
			...GridFlowStyleBorder( contentBorder, 'tablet' ),
			...GridFlowStyleBox( contentBorderRadius, 'border-radius', 'tablet' ),
		}
	};

	const mobile = {
		' .gridflow-icon-box__wrapper' : {
			'display': 'block',
			'text-align': contentAlignment?.mobile,
		},
		' .gridflow-icon-box__icon': {
			'width': width?.mobile,
			'height': height?.mobile,
			'margin-bottom': iconPosition === 'top' && spacing?.mobile !== undefined && spacing?.mobile !== null ? `${spacing.mobile}px` : undefined,
			'margin-right': iconPosition === 'left' && spacing?.mobile !== undefined && spacing?.mobile !== null ? `${spacing.mobile}px` : undefined,
			'margin-left': iconPosition === 'right' && spacing?.mobile !== undefined && spacing?.mobile !== null ? `${spacing.mobile}px` : undefined,
			...GridFlowStyleBorder( border, 'mobile' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'mobile' ),
		},
		' .gridflow-icon-box__i': {
			'font-size': fontSize?.mobile,
			'line-height': lineHeight?.mobile,
		},
		' .gridflow-icon-box__img': {
			width: imgWidth?.mobile,
		},
		' .gridflow-image-box__content' : {
			...GridFlowStyleBox( contentMargin, 'margin', 'mobile' ),
			...GridFlowStyleBox( contentPadding, 'padding', 'mobile' ),
			...GridFlowStyleBorder( contentBorder, 'mobile' ),
			...GridFlowStyleBox( contentBorderRadius, 'border-radius', 'mobile' ),
		}
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridflow.inlineStyle.icon-box', 'gridflow/inline/styles' ) ) {
	addFilter( 'gridflow.inlineStyle.icon-box', 'gridflow/inline/styles', function( attributes ) {
		return inlineStyle( { attributes } );
	} );
}
