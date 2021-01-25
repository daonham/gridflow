import { select } from '@wordpress/data';

import getStyle from '../inline-style';
import inlineStyle from '../inline-style/filter';

function parseStyle( isPreview = false ) {
	const allBlocks = select( 'core/block-editor' ).getBlocks();
	const { getCurrentPostId } = select( 'core/editor' );

	let styles = '';

	allBlocks.map( ( block ) => {
		const { attributes, name } = block;
		const { uniqueId } = attributes;
		const blockName = name.split( '/' );

		if ( blockName[ 0 ] === 'gridhub' && uniqueId ) {
			const inline = typeof inlineStyle !== 'undefined' ? inlineStyle( { name: blockName[ 1 ], attributes } ) : undefined;

			if ( inline ) {
				styles += getStyle( inline.desktop, uniqueId );

				if ( inline.tablet ) {
					styles += getStyle( inline.tablet, uniqueId, true, 'tablet' );
				}

				if ( inline.mobile ) {
					styles += getStyle( inline.mobile, uniqueId, true, 'mobile' );
				}
			}
		}
	} );

	if ( styles ) {
		gridhubApi( getCurrentPostId(), styles, isPreview );
	}
}
export default parseStyle;

const gridhubApi = async ( postId, css, isPreview ) => {
	const response = await wp.apiFetch( {
		path: '/gridhub/v1/style/save',
		method: 'POST',
		data: {
			postId,
			css,
			isPreview,
		},
	} );

	const { status, message } = response;

	if ( status === 'fail' ) {
		// eslint-disable-next-line no-console
		console.log( message );
	}
};
