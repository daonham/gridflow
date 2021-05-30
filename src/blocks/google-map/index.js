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
	title: __( 'Google map', 'gridflow' ),
	description: __( 'Add an address or location to Google map.', 'gridflow' ),
	keywords: [
		'gridflow',
		__( 'map', 'gridflow' ),
		__( 'google', 'gridflow' ),
	],
	example: {
		attributes: {
			location: 'London Eye, London, UK',
		},
	},
	icon,
	edit,
	save,
};

export { name, metadata, settings };
