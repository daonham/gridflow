import { __ } from '@wordpress/i18n';

import icon from './icon';
import edit from './edit';
import metadata from './block.json';
import save from './save';

import './style';

const { name } = metadata;

const settings = {
	title: __( 'Alert', 'gridflow' ),
	description: __( 'Add a Alert for Editor.', 'gridflow' ),
	icon,
	keywords: [
		'gridflow',
		__( 'alert', 'gridflow' ),
	],
	edit,
	save,
};

export { name, metadata, settings };
