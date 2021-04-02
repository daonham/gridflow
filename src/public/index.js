import gridflowAnimate from './animate';

gridflowDomReady( function() {
	gridflowAnimate();
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
