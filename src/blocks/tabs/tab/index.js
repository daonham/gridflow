import { __ } from '@wordpress/i18n';

import icon from './icon';
import edit from './edit';
import metadata from './block.json';
import save from './save';

const { name } = metadata;

const settings = {
	title: __( 'Tab', 'gridflow' ),
	description: __( 'Add a Tab to Tabs for Editor.', 'gridflow' ),
	icon,
	keywords: [
		'gridflow',
		__( 'tab', 'gridflow' ),
	],
	edit,
	save,
};

export { name, metadata, settings };
