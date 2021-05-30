import { __ } from '@wordpress/i18n';

import icon from './icon';
import edit from './edit';
import metadata from './block.json';
import save from './save';

import './style';

const { name } = metadata;

const settings = {
	title: __( 'Progress Bar', 'gridflow' ),
	description: __( 'A progress bar can be used to show a user how far along he/she is in a process.', 'gridflow' ),
	icon,
	keywords: [
		'gridflow',
		__( 'progress bar', 'gridflow' ),
	],
	example: {
		attributes: {
			title: __( 'My Skill', 'gridflow' ),
			caption: __( 'Designer', 'gridflow' ),
			percent: 65,
			showValue: true,
		},
	},
	edit,
	save,
};

export { name, metadata, settings };
