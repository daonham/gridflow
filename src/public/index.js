import gridflowAnimate from './animate';
import gridflowAccordion from './accordion';
import gridflowProgressBar from './progress-bar';

gridflowDomReady( function() {
	gridflowAnimate();
	gridflowAccordion();
	gridflowProgressBar();
} );

function gridflowDomReady( fn ) {
	if ( typeof fn !== 'function' ) {
		return;
	}

	if ( document.readyState === 'interactive' || document.readyState === 'complete' ) {
		return fn();
	}

	document.addEventListener( 'DOMContentLoaded', fn, false );
}
