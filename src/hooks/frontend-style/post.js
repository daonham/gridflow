import { select } from '@wordpress/data';

import getStyles from './styles';
import gridflowApi from './api';

function savePostStyle( isPreview = false ) {
	const allBlocks = select( 'core/block-editor' ).getBlocks();
	const { getCurrentPostId } = select( 'core/editor' );

	let styles = '';
	let fonts = [];

	allBlocks.forEach( ( block ) => {
		const blockStyle = getStyles( block, styles, fonts );

		styles = blockStyle.styles;
		fonts = blockStyle.fonts;

		if ( ( block.innerBlocks ).length > 0 ) {
			( block.innerBlocks ).forEach( ( innerBlock ) => {
				const innerBlockStyle = getStyles( innerBlock, styles, fonts );

				styles = innerBlockStyle.styles;
				fonts = innerBlockStyle.fonts;
			} );
		}
	} );

	if ( styles ) {
		gridflowApi( {
			path: '/gridflow/v1/style/save',
			method: 'POST',
			data: {
				postId: getCurrentPostId(),
				css: styles,
				isPreview,
				fonts: fonts.length > 0 ? fonts : '',
			},
		} );
	}
}
export default savePostStyle;

