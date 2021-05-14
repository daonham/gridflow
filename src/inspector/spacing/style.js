import { addFilter } from '@wordpress/hooks';

const { GridFlowStyleBox } = wp.gridflowComponents;

addFilter( 'gridflow.style.spacing', 'gridflow/inline/spacing', function(
	margin,
	padding
) {
	const desktop = {
		' >.gridflow-block-inner': {
			...GridFlowStyleBox( padding, 'padding', 'desktop' ),
			...GridFlowStyleBox( margin, 'margin', 'desktop' ),
		},
	};

	const tablet = {
		' >.gridflow-block-inner': {
			...GridFlowStyleBox( padding, 'padding', 'tablet' ),
			...GridFlowStyleBox( margin, 'margin', 'tablet' ),
		},
	};

	const mobile = {
		' >.gridflow-block-inner': {
			...GridFlowStyleBox( padding, 'padding', 'mobile' ),
			...GridFlowStyleBox( margin, 'margin', 'mobile' ),
		},
	};

	return { desktop, tablet, mobile };
} );
