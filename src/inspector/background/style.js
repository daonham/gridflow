import { addFilter } from '@wordpress/hooks';

const { GridFlowStyleBackground } = wp.gridflowComponents;

addFilter( 'gridflow.style.background', 'gridflow/inline/background', function(
	gridflowBackground,
	gridflowBackgroundHover
) {
	const desktop = {
		' >.gridflow-block-inner': {
			...GridFlowStyleBackground( gridflowBackground, 'desktop' ),
		},
		' >.gridflow-block-inner:hover': {
			...GridFlowStyleBackground( gridflowBackgroundHover, 'desktop' ),
		},
	};

	const tablet = {
		' >.gridflow-block-inner': {
			...GridFlowStyleBackground( gridflowBackground, 'tablet' ),
		},
		' >.gridflow-block-inner:hover': {
			...GridFlowStyleBackground( gridflowBackgroundHover, 'tablet' ),
		},
	};

	const mobile = {
		' >.gridflow-block-inner': {
			...GridFlowStyleBackground( gridflowBackground, 'mobile' ),
		},
		' >.gridflow-block-inner:hover': {
			...GridFlowStyleBackground( gridflowBackgroundHover, 'mobile' ),
		},
	};

	return { desktop, tablet, mobile };
} );
