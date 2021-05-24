import { subscribe, select } from '@wordpress/data';
import savePostStyle from './post';
// import saveWidgetStyle from './widget';

subscribe( () => {
	const {
		isPreviewingPost,
		isSavingPost,
		isAutosavingPost,
		isPublishingPost,
	} = select( 'core/editor' );

	// const isSavingWidgetAreas = select( 'core/edit-widgets' )?.isSavingWidgetAreas();

	if ( isPublishingPost() || isPreviewingPost() || ( isSavingPost() && ! isAutosavingPost() ) ) {
		if ( isPreviewingPost() ) {
			savePostStyle( true );
		} else {
			savePostStyle();
		}
	}

	// if ( isSavingWidgetAreas ) {
	// 	saveWidgetStyle();
	// }
} );
