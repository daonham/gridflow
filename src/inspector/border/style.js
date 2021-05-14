import { addFilter } from '@wordpress/hooks';

const {
	GridFlowStyleBox,
	GridFlowStyleBorder,
	GridFlowStyleBoxShadow,
} = wp.gridflowComponents;

addFilter( 'gridflow.style.border', 'gridflow/inline/border', function(
	gridflowBorder,
	gridflowBorderRadius,
	gridflowBoxShadow,
	gridflowBorderHover,
	gridflowBorderRadiusHover,
	gridflowBoxShadowHover
) {
	const desktop = {
		' >.gridflow-block-inner': {
			...GridFlowStyleBorder( gridflowBorder, 'desktop' ),
			...GridFlowStyleBox( gridflowBorderRadius, 'border-radius', 'desktop' ),
			...GridFlowStyleBoxShadow( gridflowBoxShadow ),
		},
		' >.gridflow-block-inner:hover': {
			...GridFlowStyleBorder( gridflowBorderHover, 'desktop' ),
			...GridFlowStyleBox( gridflowBorderRadiusHover, 'border-radius', 'desktop' ),
			...GridFlowStyleBoxShadow( gridflowBoxShadow ),
			...GridFlowStyleBoxShadow( gridflowBoxShadowHover ),
		},
	};

	const tablet = {
		' >.gridflow-block-inner': {
			...GridFlowStyleBorder( gridflowBorder, 'tablet' ),
			...GridFlowStyleBox( gridflowBorderRadius, 'border-radius', 'tablet' ),
		},
		' >.gridflow-block-inner:hover': {
			...GridFlowStyleBorder( gridflowBorderHover, 'tablet' ),
			...GridFlowStyleBox( gridflowBorderRadiusHover, 'border-radius', 'tablet' ),
		},
	};

	const mobile = {
		' >.gridflow-block-inner': {
			...GridFlowStyleBorder( gridflowBorder, 'mobile' ),
			...GridFlowStyleBox( gridflowBorderRadius, 'border-radius', 'mobile' ),
		},
		' >.gridflow-block-inner:hover': {
			...GridFlowStyleBorder( gridflowBorderHover, 'mobile' ),
			...GridFlowStyleBox( gridflowBorderRadiusHover, 'border-radius', 'mobile' ),
		},
	};

	return { desktop, tablet, mobile };
} );
