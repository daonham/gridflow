/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import edit from './edit';
import metadata from './block.json';
import save from './save';
import transforms from './transforms';

import './style';

const { name, category, attributes } = metadata;

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
	transforms,
	edit,
	save,
};

export { name, category, metadata, settings, attributes };
