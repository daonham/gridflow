import withInlineStyle from './with-inline-css';
import GridFlowInspectorControls from './inspector';
import './frontend-style';

wp.gridflowCompose = {
	withInlineStyle,
	GridFlowInspectorControls,
};

document.addEventListener( 'DOMContentLoaded', function() {
	if ( ! document.body.classList.contains( 'gridflow-styles' ) ) {
		document.body.classList.add( 'gridflow-styles' );
	}
} );
