import { __ } from '@wordpress/i18n';

import icon from './icon';
import edit from './edit';
import metadata from './block.json';
import save from './save';

const { name } = metadata;

const settings = {
	title: __( 'Accordion Item', 'gridflow' ),
	description: __( 'Add a Accordion Item for Editor.', 'gridflow' ),
	icon,
	keywords: [
		'gridflow',
		__( 'accordion', 'gridflow' ),
	],
	edit,
	save,
};

export { name, metadata, settings };
