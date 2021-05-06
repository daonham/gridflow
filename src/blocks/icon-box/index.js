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
	description: __( 'Add new Icon Box for Editor.', 'gridflow' ),
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
