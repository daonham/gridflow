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
	title: __( 'Heading', 'gridflow' ),
	description: __( 'Advanced heading for Editor.', 'gridflow' ),
	keywords: [
		'gridflow',
		__( 'heading', 'gridflow' ),
		__( 'text', 'gridflow' ),
	],
	icon,
	example: {
		attributes: {
			content: __( 'Hello World!', 'gridflow' ),
		},
	},
	edit,
	save,
};

export { name, metadata, settings };
