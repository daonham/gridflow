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
	title: __( 'Divider', 'gridflow' ),
	description: __( 'Create a break between ideas or sections with a horizontal separator.', 'gridflow' ),
	keywords: [
		'gridflow',
		__( 'divider', 'gridflow' ),
		__( 'separator', 'gridflow' ),
	],
	icon,
	edit,
	save,
};

export { name, metadata, settings };
