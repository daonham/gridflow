import { subscribe, select } from '@wordpress/data';
import savePostStyle from './post';

subscribe( () => {
	const {
		isPreviewingPost,
		isSavingPost,
		isAutosavingPost,
		isPublishingPost,
	} = select( 'core/editor' );

	if ( isPublishingPost() || isPreviewingPost() || ( isSavingPost() && ! isAutosavingPost() ) ) {
		if ( isPreviewingPost() ) {
			savePostStyle( true );
		} else {
			savePostStyle();
		}
	}
} );
