import { __ } from '@wordpress/i18n';

import icon from './icon';
import edit from './edit';
import metadata from './block.json';
import save from './save';

import './style';

const { name } = metadata;

const settings = {
	title: __( 'Progress Bar', 'gridflow' ),
	description: __( 'Add a Progress bar for Editor.', 'gridflow' ),
	icon,
	keywords: [
		'gridflow',
		__( 'progress bar', 'gridflow' ),
	],
	edit,
	save,
};

export { name, metadata, settings };
