import { subscribe, select } from '@wordpress/data';
import parseStyle from './parse';

subscribe( () => {
	const {
		isPreviewingPost,
		isSavingPost,
		isAutosavingPost,
		isPublishingPost,
	} = select( 'core/editor' );

	if ( isPublishingPost() || isPreviewingPost() || ( isSavingPost() && ! isAutosavingPost() ) ) {
		if ( isPreviewingPost() ) {
			parseStyle( true );
		} else {
			parseStyle();
		}
	}
} );
