import { __ } from '@wordpress/i18n';

import icon from './icon';
import edit from './edit';
import metadata from './block.json';
import save from './save';

import './style';

const { name } = metadata;

const settings = {
	title: __( 'Counter', 'gridflow' ),
	description: __( 'Add a Counter for Editor.', 'gridflow' ),
	icon,
	keywords: [
		'gridflow',
		__( 'counter', 'gridflow' ),
	],
	edit,
	save,
};

export { name, metadata, settings };
