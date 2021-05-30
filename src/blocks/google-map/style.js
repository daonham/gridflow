import { addFilter, hasFilter } from '@wordpress/hooks';

const {
	GridFlowStyleBox,
	GridFlowStyleBorder,
	GridFlowStyleBoxShadow,
} = wp.gridflowComponents;

function inlineStyle( { attributes } ) {
	const {
		width,
		height,
		border,
		borderRadius,
		boxShadow,
	} = attributes;

	const desktop = {
		' .gridflow-google-map__iframe-wrapper > iframe': {
			width: width?.desktop,
			height: height?.desktop,
			...GridFlowStyleBorder( border, 'desktop' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'desktop' ),
			...GridFlowStyleBoxShadow( boxShadow ),
		},
	};

	const tablet = {
		' .gridflow-google-map__iframe-wrapper > iframe': {
			width: width?.tablet,
			height: height?.tablet,
			...GridFlowStyleBorder( border, 'tablet' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'tablet' ),
		},
	};

	const mobile = {
		' .gridflow-google-map__iframe-wrapper > iframe': {
			width: width?.mobile,
			height: height?.mobile,
			...GridFlowStyleBorder( border, 'mobile' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'mobile' ),
		},
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridflow.inlineStyle.google-map', 'gridflow/inline/styles' ) ) {
	addFilter( 'gridflow.inlineStyle.google-map', 'gridflow/inline/styles', function( output, attributes ) {
		return { ...output, ...inlineStyle( { attributes } ) };
	} );
}
