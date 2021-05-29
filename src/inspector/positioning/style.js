import { addFilter } from '@wordpress/hooks';

addFilter( 'gridflow.style.positioning', 'gridflow/inline/positioning', function(
	gridflowZindex,
	gridflowPosition,
	gridflowPositionHorizontal,
	gridflowPositionHorizontalOffset,
	gridflowPositionVertical,
	gridflowPositionVerticalOffset
) {
	const desktop = {
		'': {
			'z-index': gridflowZindex?.desktop !== undefined && gridflowZindex?.desktop !== null ? gridflowZindex.desktop : undefined,
			position: gridflowPosition?.desktop,
			left: gridflowPositionHorizontal?.desktop === 'left' && gridflowPositionHorizontalOffset?.desktop ? gridflowPositionHorizontalOffset.desktop : undefined,
			right: gridflowPositionHorizontal?.desktop === 'right' && gridflowPositionHorizontalOffset?.desktop ? gridflowPositionHorizontalOffset.desktop : undefined,
			top: gridflowPositionVertical?.desktop === 'top' && gridflowPositionVerticalOffset?.desktop ? gridflowPositionVerticalOffset.desktop : undefined,
			bottom: gridflowPositionVertical?.desktop === 'bottom' && gridflowPositionVerticalOffset?.desktop ? gridflowPositionVerticalOffset.desktop : undefined,
		},
	};

	const tablet = {
		'': {
			'z-index': gridflowZindex?.tablet !== undefined && gridflowZindex?.tablet !== null ? gridflowZindex.tablet : undefined,
			position: gridflowPosition?.tablet,
			left: gridflowPositionHorizontal?.tablet === 'left' && gridflowPositionHorizontalOffset?.tablet ? gridflowPositionHorizontalOffset.tablet : undefined,
			right: gridflowPositionHorizontal?.tablet === 'right' && gridflowPositionHorizontalOffset?.tablet ? gridflowPositionHorizontalOffset.tablet : undefined,
			top: gridflowPositionVertical?.tablet === 'top' && gridflowPositionVerticalOffset?.tablet ? gridflowPositionVerticalOffset.tablet : undefined,
			bottom: gridflowPositionVertical?.tablet === 'bottom' && gridflowPositionVerticalOffset?.tablet ? gridflowPositionVerticalOffset.tablet : undefined,
		},
	};

	const mobile = {
		'': {
			'z-index': gridflowZindex?.mobile !== undefined && gridflowZindex?.mobile !== null ? gridflowZindex.mobile : undefined,
			position: gridflowPosition?.mobile,
			left: gridflowPositionHorizontal?.mobile === 'left' && gridflowPositionHorizontalOffset?.mobile ? gridflowPositionHorizontalOffset.mobile : undefined,
			right: gridflowPositionHorizontal?.mobile === 'right' && gridflowPositionHorizontalOffset?.mobile ? gridflowPositionHorizontalOffset.mobile : undefined,
			top: gridflowPositionVertical?.mobile === 'top' && gridflowPositionVerticalOffset?.mobile ? gridflowPositionVerticalOffset.mobile : undefined,
			bottom: gridflowPositionVertical?.mobile === 'bottom' && gridflowPositionVerticalOffset?.mobile ? gridflowPositionVerticalOffset.mobile : undefined,
		},
	};

	return { desktop, tablet, mobile };
} );
