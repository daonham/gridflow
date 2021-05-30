import { addFilter } from '@wordpress/hooks';

addFilter( 'gridflow.style.dimensions', 'gridflow/inline/dimensions', function(
	gridflowWidth,
	gridflowCustomWidth,
	gridflowMinWidth,
	gridflowMaxWidth,
) {
	const desktop = {
		'': {
			width: gridflowWidth?.desktop === 'full' ? '100%' : gridflowWidth?.desktop === 'inline' ? 'auto' : gridflowWidth?.desktop === 'custom' ? gridflowCustomWidth?.desktop : undefined,
			'min-width': gridflowMinWidth?.desktop,
			'max-width': gridflowMaxWidth?.desktop,
		},
	};

	const tablet = {
		'': {
			width: gridflowWidth?.tablet === 'full' ? '100%' : gridflowWidth?.tablet === 'inline' ? 'auto' : gridflowWidth?.tablet === 'custom' ? gridflowCustomWidth?.tablet : undefined,
			'min-width': gridflowMinWidth?.tablet,
			'max-width': gridflowMaxWidth?.tablet,
		},
	};

	const mobile = {
		'': {
			width: gridflowWidth?.tablet === 'full' ? '100%' : gridflowWidth?.tablet === 'inline' ? 'auto' : gridflowWidth?.tablet === 'custom' ? gridflowCustomWidth?.tablet : undefined,
			'min-width': gridflowMinWidth?.tablet,
			'max-width': gridflowMaxWidth?.tablet,
		},
	};

	return { desktop, tablet, mobile };
} );
