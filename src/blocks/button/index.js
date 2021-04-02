import { __ } from '@wordpress/i18n';

import icon from './icon';
import edit from './edit';
import metadata from './block.json';
import save from './save';

import './style';

const { name } = metadata;

const settings = {
	title: __( 'Button', 'gridflow' ),
	description: __( 'Advanced button for Editor.', 'gridflow' ),
	icon,
	keywords: [
		'gridflow',
		__( 'button', 'gridflow' ),
	],
	example: {
		attributes: {
			content: __( 'Button', 'gridflow' ),
		},
	},
	styles: [
		{ name: 'simple', label: __( 'Simple', 'gridflow' ), isDefault: true },
		{ name: 'link', label: __( 'Link', 'gridflow' ) },
		{ name: 'outline', label: __( 'Outline', 'gridflow' ) },
		{ name: 'elevated', label: __( 'Elevated', 'gridflow' ) },
	],
	edit,
	save,
};

export { name, metadata, settings };
