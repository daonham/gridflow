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
		width,
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
			width: width?.desktop ? width.desktop + 'px' : undefined,
			height: width?.desktop ? width.desktop + 'px' : undefined,
			background: bgColor,
			...GridFlowStyleBorder( border, 'desktop' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'desktop' ),
			...GridFlowStyleBoxShadow( boxShadow ),
			transition: transition && `all ${ transition }s`,
		},
		' .gridflow-icon__icon > i': {
			color,
			'font-size': fontSize?.desktop ? fontSize.desktop + 'px' : undefined,
			'line-height': fontSize?.desktop ? fontSize.desktop + 'px' : undefined,
		},
		' .gridflow-icon__icon > img': {
			color,
			width: fontSize?.desktop ? fontSize.desktop + 'px' : undefined,
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
			width: width?.tablet ? width.tablet + 'px' : undefined,
			height: width?.tablet ? width.tablet + 'px' : undefined,
			...GridFlowStyleBorder( border, 'tablet' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'tablet' ),
		},
		' .gridflow-icon__icon > i': {
			'font-size': fontSize?.tablet ? fontSize.tablet + 'px' : undefined,
			'line-height': fontSize?.tablet ? fontSize.tablet + 'px' : undefined,
		},
		' .gridflow-icon__icon > img': {
			width: fontSize?.tablet ? fontSize.tablet + 'px' : undefined,
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
			width: width?.mobile ? width.mobile + 'px' : undefined,
			height: width?.mobile ? width.mobile + 'px' : undefined,
			...GridFlowStyleBorder( border, 'mobile' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'mobile' ),
		},
		' .gridflow-icon__icon > i': {
			'font-size': fontSize?.mobile ? fontSize.mobile + 'px' : undefined,
			'line-height': fontSize?.mobile ? fontSize.mobile + 'px' : undefined,
		},
		' .gridflow-icon__icon > img': {
			width: fontSize?.mobile ? fontSize.mobile + 'px' : undefined,
		},
		' .gridflow-icon__icon:hover': {
			...GridFlowStyleBorder( borderHover, 'mobile' ),
			...GridFlowStyleBox( borderRadiusHover, 'border-radius', 'mobile' ),
		},
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridflow.inlineStyle.icon', 'gridflow/inline/styles' ) ) {
	addFilter( 'gridflow.inlineStyle.icon', 'gridflow/inline/styles', function( attributes ) {
		return inlineStyle( { attributes } );
	} );
}
