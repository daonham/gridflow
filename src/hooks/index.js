import withInlineStyle from './with-inline-css';
import './frontend-style';

wp.gridflowCompose = {
	withInlineStyle,
};

document.addEventListener( 'DOMContentLoaded', function() {
	if ( ! document.body.classList.contains( 'gridflow-styles' ) ) {
		document.body.classList.add( 'gridflow-styles' );
	}
} );
