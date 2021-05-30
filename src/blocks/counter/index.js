import { __ } from '@wordpress/i18n';

import icon from './icon';
import edit from './edit';
import metadata from './block.json';
import save from './save';

import './style';

const { name } = metadata;

const settings = {
	title: __( 'Counter', 'gridflow' ),
	description: __( 'Specify the starting number and ending number for your counter, along with number prefixes and suffixes.', 'gridflow' ),
	icon,
	keywords: [
		'gridflow',
		__( 'counter', 'gridflow' ),
	],
	example: {
		attributes: {
			endValue: '100',
			title: __( 'Counter title', 'gridflow' ),
		},
	},
	edit,
	save,
};

export { name, metadata, settings };
