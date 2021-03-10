import withInlineStyle from './with-inline-css';
import './frontend-style';

wp.gridhubCompose = {
	withInlineStyle,
};

document.addEventListener( 'DOMContentLoaded', function() {
	if ( ! document.body.classList.contains( 'gridhub-styles' ) ) {
		document.body.classList.add( 'gridhub-styles' );
	}
} );
