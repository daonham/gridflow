import gridflowAnimate from './animate';
import gridflowAccordion from './accordion';
import gridflowProgressBar from './progress-bar';
import gridflowCounter from './counter';
import gridflowTabs from './tabs';
import gridflowAlert from './alert';

gridflowDomReady( function() {
	gridflowAnimate();
	gridflowAccordion();
	gridflowProgressBar();
	gridflowCounter();
	gridflowTabs();
	gridflowAlert();
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
