import { __ } from '@wordpress/i18n';

import { image as icon } from '@wordpress/icons';
import edit from './edit';
import metadata from './block.json';
import save from './save';

import './style';

const { name } = metadata;

const settings = {
	title: __( 'Image', 'gridflow' ),
	description: __( 'Insert an image to make a visual statement.', 'gridflow' ),
	icon,
	keywords: [
		'gridflow',
		__( 'image', 'gridflow' ),
	],
	edit,
	save,
};

export { name, metadata, settings };
