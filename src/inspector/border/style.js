import { addFilter } from '@wordpress/hooks';

const {
	GridFlowStyleBox,
	GridFlowStyleBorder,
	GridFlowStyleBoxShadow,
} = wp.gridflowComponents;

addFilter( 'gridflow.style.border', 'gridflow/inline/border', function(
	gridflowBorder,
	gridflowBorderRadius,
	gridflowBoxShadow
) {
	const desktop = {
		' .gridflow-block-inner': {
			...GridFlowStyleBorder( gridflowBorder, 'desktop' ),
			...GridFlowStyleBox( gridflowBorderRadius, 'border-radius', 'desktop' ),
			...GridFlowStyleBoxShadow( gridflowBoxShadow ),
		},
	};

	const tablet = {
		' .gridflow-block-inner': {
			...GridFlowStyleBorder( gridflowBorder, 'tablet' ),
			...GridFlowStyleBox( gridflowBorderRadius, 'border-radius', 'tablet' ),
		},
	};

	const mobile = {
		' .gridflow-block-inner': {
			...GridFlowStyleBorder( gridflowBorder, 'mobile' ),
			...GridFlowStyleBox( gridflowBorderRadius, 'border-radius', 'mobile' ),
		},
	};

	return { desktop, tablet, mobile };
} );
