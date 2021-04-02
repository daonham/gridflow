import { addFilter } from '@wordpress/hooks';

const { GridFlowStyleBackground } = wp.gridflowComponents;

addFilter( 'gridflow.style.background', 'gridflow/inline/background', function(
	gridflowBackground
) {
	const desktop = {
		' .gridflow-block-inner': {
			...GridFlowStyleBackground( gridflowBackground, 'desktop' ),
		},
	};

	const tablet = {
		' .gridflow-block-inner': {
			...GridFlowStyleBackground( gridflowBackground, 'tablet' ),
		},
	};

	const mobile = {
		' .gridflow-block-inner': {
			...GridFlowStyleBackground( gridflowBackground, 'mobile' ),
		},
	};

	return { desktop, tablet, mobile };
} );
