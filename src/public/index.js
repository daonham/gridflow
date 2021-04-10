import gridflowAnimate from './animate';
import gridflowAccordion from './accordion';

gridflowDomReady( function() {
	gridflowAnimate();
	gridflowAccordion();
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
