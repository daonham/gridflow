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
		imgWidth,
		width,
		color,
		bgColor,
		padding,
		border,
		borderRadius,
		boxShadow,

		colorHover,
		bgColorHover,
		transition,
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
			'background-color': bgColor,
			...GridFlowStyleBox( padding, 'padding', 'desktop' ),
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
			width: imgWidth?.desktop,
		},
		' .gridflow-icon__icon:hover': {
			'background-color': bgColorHover,
			transition: transition && `all ${ transition }s`,
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
			...GridFlowStyleBox( padding, 'padding', 'tablet' ),
			...GridFlowStyleBorder( border, 'tablet' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'tablet' ),
		},
		' .gridflow-icon__icon > i': {
			'font-size': fontSize?.tablet ? fontSize.tablet + 'px' : undefined,
			'line-height': fontSize?.tablet ? fontSize.tablet + 'px' : undefined,
		},
		' .gridflow-icon__icon > img': {
			width: imgWidth?.tablet,
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
			...GridFlowStyleBox( padding, 'padding', 'mobile' ),
			...GridFlowStyleBorder( border, 'mobile' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'mobile' ),
		},
		' .gridflow-icon__icon > i': {
			'font-size': fontSize?.mobile ? fontSize.mobile + 'px' : undefined,
			'line-height': fontSize?.mobile ? fontSize.mobile + 'px' : undefined,
		},
		' .gridflow-icon__icon > img': {
			width: imgWidth?.mobile,
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
