import { __ } from '@wordpress/i18n';

import icon from './icon';
import edit from './edit';
import metadata from './block.json';
import save from './save';

import './style';

const { name } = metadata;

const settings = {
	title: __( 'Button', 'gridhub' ),
	description: __( 'Advanced button for Editor.', 'gridhub' ),
	icon,
	keywords: [
		'gridhub',
		__( 'button', 'gridhub' ),
	],
	example: {
		attributes: {
			content: __( 'Button', 'gridhub' ),
		},
	},
	styles: [
		{ name: 'simple', label: __( 'Simple', 'gridhub' ), isDefault: true },
		{ name: 'link', label: __( 'Link', 'gridhub' ) },
		{ name: 'outline', label: __( 'Outline', 'gridhub' ) },
		{ name: 'elevated', label: __( 'Elevated', 'gridhub' ) },
	],
	edit,
	save,
};

export { name, metadata, settings };
