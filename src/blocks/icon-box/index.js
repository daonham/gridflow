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
	title: __( 'Icon Box', 'gridflow' ),
	description: __( 'The Icon Box allows you to use some of the coolest icons with an heading and small bits of content.', 'gridflow' ),
	keywords: [
		'gridflow',
		__( 'icon', 'gridflow' ),
		__( 'box', 'gridflow' ),
	],
	icon,
	edit,
	save,
};

export { name, metadata, settings };
