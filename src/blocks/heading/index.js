import edit from './edit';
import metadata from './block.json';
import save from './save';
import transforms from './transforms';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

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
			placeholder: __( 'Hello World!', 'gridhub' ),
		},
	},
	transforms,
	edit,
	save,
	// deprecated,
};

export { name, category, metadata, settings, attributes };
