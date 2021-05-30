import { __ } from '@wordpress/i18n';

import icon from './icon';
import edit from './edit';
import metadata from './block.json';
import save from './save';

const { name } = metadata;

const settings = {
	title: __( 'Accordion Item', 'gridflow' ),
	description: __( 'Add collapsable accordion items to accordions.', 'gridflow' ),
	icon,
	keywords: [
		'gridflow',
		__( 'accordion', 'gridflow' ),
	],
	edit,
	save,
};

export { name, metadata, settings };
