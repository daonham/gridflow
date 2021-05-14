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
			color,
		},
		' .gridflow-icon__icon > img': {
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
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridflow.inlineStyle.alert', 'gridflow/inline/styles' ) ) {
	addFilter( 'gridflow.inlineStyle.alert', 'gridflow/inline/styles', function( attributes ) {
		return inlineStyle( { attributes } );
	} );
}
