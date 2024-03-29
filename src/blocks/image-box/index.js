/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import icon from './icon';
import edit from './edit';
import metadata from './block.json';
import save from './save';

import './style';

const { name } = metadata;

const settings = {
	title: __( 'Image Box', 'gridflow' ),
	description: __( 'Add an image box that combines an image with a headline and text.', 'gridflow' ),
	keywords: [
		'gridflow',
		__( 'image', 'gridflow' ),
		__( 'box', 'gridflow' ),
	],
	icon,
	edit,
	save,
};

export { name, metadata, settings };
