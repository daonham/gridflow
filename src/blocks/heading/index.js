/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import edit from './edit';
import metadata from './block.json';
import save from './save';

import './style';

const { name } = metadata;

const settings = {
	title: __( 'Heading', 'gridhub' ),
	description: __( 'Advanced heading for Editor.', 'gridhub' ),
	keywords: [
		'gridhub',
		__( 'heading', 'gridhub' ),
		__( 'text', 'gridhub' ),
	],
	example: {
		attributes: {
			content: __( 'Hello World!', 'gridhub' ),
		},
	},
	edit,
	save,
};

export { name, metadata, settings };
