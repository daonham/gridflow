import { addFilter, hasFilter } from '@wordpress/hooks';
const {
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
		size,
		padding,
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
		' .gridflow-icon-box__wrapper': {
			'text-align': contentAlignment?.desktop,
			'align-items': contentVerticalAlignment,
		},
		' .gridflow-icon-box__icon': {
			'--gridflow-icon-box-size': size?.desktop ? size.desktop + 'px' : undefined,
			'--gridflow-icon-box-padding': padding?.desktop && `${ padding.desktop }px`,
			background: bgColor,
			'margin-bottom': iconPosition === 'top' ? ( spacing?.desktop && `${ spacing.desktop }px` ) : undefined,
			'margin-right': iconPosition === 'left' ? ( spacing?.desktop && `${ spacing.desktop }px` ) : undefined,
			'margin-left': iconPosition === 'right' ? ( spacing?.desktop && `${ spacing.desktop }px` ) : undefined,
			...GridFlowStyleBorder( border, 'desktop' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'desktop' ),
			...GridFlowStyleBoxShadow( boxShadow ),
		},
		' .gridflow-icon-box__i': {
			transition: transition ? `all ${ transition }s` : undefined,
			color,
		},
		' .gridflow-icon-box__icon:hover': {
			background: bgColorHover,
		},
		' .gridflow-icon-box__icon:hover .gridflow-icon-box__i': {
			transition: transition ? `all ${ transition }s` : undefined,
			color: colorHover,
		},
		' .gridflow-image-box__content': {
			color: contentColor,
			background: contentBackgroundColor,
			...GridFlowStyleBox( contentMargin, 'margin', 'desktop' ),
			...GridFlowStyleBox( contentPadding, 'padding', 'desktop' ),
			...GridFlowStyleBorder( contentBorder, 'desktop' ),
			...GridFlowStyleBox( contentBorderRadius, 'border-radius', 'desktop' ),
			...GridFlowStyleBoxShadow( contentBoxShadow ),
		},
	};

	const tablet = {
		' .gridflow-icon-box__wrapper': {
			'text-align': contentAlignment?.tablet,
		},
		' .gridflow-icon-box__icon': {
			'--gridflow-icon-box-size': size?.tablet ? size.tablet + 'px' : undefined,
			'--gridflow-icon-box-padding': padding?.tablet && `${ padding.tablet }px`,
			'margin-bottom': iconPosition === 'top' ? ( spacing?.tablet && `${ spacing.tablet }px` ) : undefined,
			'margin-right': iconPosition === 'left' ? ( spacing?.tablet && `${ spacing.tablet }px` ) : undefined,
			'margin-left': iconPosition === 'right' ? ( spacing?.tablet && `${ spacing.tablet }px` ) : undefined,
			...GridFlowStyleBorder( border, 'tablet' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'tablet' ),
		},
		' .gridflow-image-box__content': {
			...GridFlowStyleBox( contentMargin, 'margin', 'tablet' ),
			...GridFlowStyleBox( contentPadding, 'padding', 'tablet' ),
			...GridFlowStyleBorder( contentBorder, 'tablet' ),
			...GridFlowStyleBox( contentBorderRadius, 'border-radius', 'tablet' ),
		},
	};

	const mobile = {
		' .gridflow-icon-box__wrapper': {
			display: 'block',
			'text-align': contentAlignment?.mobile,
		},
		' .gridflow-icon-box__icon': {
			'--gridflow-icon-box-size': size?.mobile ? size.mobile + 'px' : undefined,
			'--gridflow-icon-box-padding': padding?.mobile && `${ padding.mobile }px`,
			'margin-bottom': iconPosition === 'top' ? ( spacing?.mobile && `${ spacing.mobile }px` ) : undefined,
			'margin-right': iconPosition === 'left' ? ( spacing?.mobile && `${ spacing.mobile }px` ) : undefined,
			'margin-left': iconPosition === 'right' ? ( spacing?.mobile && `${ spacing.mobile }px` ) : undefined,
			...GridFlowStyleBorder( border, 'mobile' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'mobile' ),
		},
		' .gridflow-image-box__content': {
			...GridFlowStyleBox( contentMargin, 'margin', 'mobile' ),
			...GridFlowStyleBox( contentPadding, 'padding', 'mobile' ),
			...GridFlowStyleBorder( contentBorder, 'mobile' ),
			...GridFlowStyleBox( contentBorderRadius, 'border-radius', 'mobile' ),
		},
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridflow.inlineStyle.icon-box', 'gridflow/inline/styles' ) ) {
	addFilter( 'gridflow.inlineStyle.icon-box', 'gridflow/inline/styles', function( output, attributes ) {
		return { ...output, ...inlineStyle( { attributes } ) };
	} );
}
