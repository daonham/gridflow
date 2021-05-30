import { addFilter, hasFilter } from '@wordpress/hooks';
const {
	GridFlowStyleBox,
	GridFlowStyleBorder,
	GridFlowStyleBoxShadow,
} = wp.gridflowComponents;

function inlineStyle( { attributes } ) {
	const {
		textAligns,
		fontSize,
		padding,
		rotate,
		color,
		bgColor,
		border,
		borderRadius,
		boxShadow,

		colorHover,
		bgColorHover,
		transition,
		hoverEffect,
		borderHover,
		borderRadiusHover,
		boxShadowHover,
	} = attributes;

	const desktop = {
		'': {
			'text-align': textAligns?.desktop,
		},
		' .gridflow-icon__icon': {
			'--gridflow-icon-size': fontSize?.desktop ? `${ fontSize.desktop }px` : undefined,
			'--gridflow-icon-padding': padding?.desktop !== undefined && padding?.desktop !== null ? `${ padding.desktop }px` : undefined,
			background: bgColor,
			...GridFlowStyleBorder( border, 'desktop' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'desktop' ),
			...GridFlowStyleBoxShadow( boxShadow ),
			transition: transition && `all ${ transition }s`,
		},
		' .gridflow-icon__icon > i': {
			transform: rotate?.desktop !== undefined && rotate?.desktop !== null ? `rotate(${ rotate.desktop }deg)` : undefined,
			color,
		},
		' .gridflow-icon__icon > img': {
			transform: rotate?.desktop !== undefined && rotate?.desktop !== null ? `rotate(${ rotate.desktop }deg)` : undefined,
			color,
		},
		' .gridflow-icon__icon:hover': {
			background: bgColorHover,
			transition: transition && `all ${ transition }s`,
			'animation-name': hoverEffect || undefined,
			'animation-duration': hoverEffect ? '1s' : undefined,
			...GridFlowStyleBorder( borderHover, 'desktop' ),
			...GridFlowStyleBox( borderRadiusHover, 'border-radius', 'desktop' ),
			...GridFlowStyleBoxShadow( boxShadowHover ),
		},
		' .gridflow-icon__icon:hover > i': {
			color: colorHover,
		},
		' .gridflow-icon__icon:hover > img': {
			color: colorHover,
		},
	};

	const tablet = {
		'': {
			'text-align': textAligns?.tablet,
		},
		' .gridflow-icon__icon': {
			'--gridflow-icon-size': fontSize?.tablet ? `${ fontSize.tablet }px` : undefined,
			'--gridflow-icon-padding': padding?.tablet !== undefined && padding?.tablet !== null ? `${ padding.tablet }px` : undefined,
			...GridFlowStyleBorder( border, 'tablet' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'tablet' ),
		},
		' .gridflow-icon__icon:hover': {
			...GridFlowStyleBorder( borderHover, 'tablet' ),
			...GridFlowStyleBox( borderRadiusHover, 'border-radius', 'tablet' ),
		},
		' .gridflow-icon__icon > i': {
			transform: rotate?.tablet !== undefined && rotate?.tablet !== null ? `rotate(${ rotate.tablet }deg)` : undefined,
		},
		' .gridflow-icon__icon > img': {
			transform: rotate?.tablet !== undefined && rotate?.tablet !== null ? `rotate(${ rotate.tablet }deg)` : undefined,
		},
	};

	const mobile = {
		'': {
			'text-align': textAligns?.mobile,
		},
		' .gridflow-icon__icon': {
			'--gridflow-icon-size': fontSize?.mobile ? `${ fontSize.mobile }px` : undefined,
			'--gridflow-icon-padding': padding?.mobile !== undefined && padding?.mobile !== null ? `${ padding.mobile }px` : undefined,
			...GridFlowStyleBorder( border, 'mobile' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'mobile' ),
		},
		' .gridflow-icon__icon:hover': {
			...GridFlowStyleBorder( borderHover, 'mobile' ),
			...GridFlowStyleBox( borderRadiusHover, 'border-radius', 'mobile' ),
		},
		' .gridflow-icon__icon > i': {
			transform: rotate?.mobile !== undefined && rotate?.mobile !== null ? `rotate(${ rotate.mobile }deg)` : undefined,
		},
		' .gridflow-icon__icon > img': {
			transform: rotate?.mobile !== undefined && rotate?.mobile !== null ? `rotate(${ rotate.mobile }deg)` : undefined,
		},
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridflow.inlineStyle.icon', 'gridflow/inline/styles' ) ) {
	addFilter( 'gridflow.inlineStyle.icon', 'gridflow/inline/styles', function( output, attributes ) {
		return { ...output, ...inlineStyle( { attributes } ) };
	} );
}
