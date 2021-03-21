import gridhubAnimate from './animate';

gridhubDomReady( function() {
	gridhubAnimate();
} );

function gridhubDomReady( fn ) {
	if ( typeof fn !== 'function' ) {
		return;
	}

	if ( document.readyState === 'interactive' || document.readyState === 'complete' ) {
		return fn();
	}

	document.addEventListener( 'DOMContentLoaded', fn, false );
}
