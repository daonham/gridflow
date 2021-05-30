import { __ } from '@wordpress/i18n';

import icon from './icon';
import edit from './edit';
import metadata from './block.json';
import save from './save';

import './style';

const { name } = metadata;

const settings = {
	title: __( 'Icon', 'gridflow' ),
	description: __( 'Pick an icon or upload your icon to your content.', 'gridflow' ),
	icon,
	keywords: [
		'gridflow',
		__( 'icon', 'gridflow' ),
	],
	example: {
		attributes: {
			icon: {
				icon: 'far fa-star',
			},
		},
	},
	styles: [
		{ name: 'simple', label: __( 'Simple', 'gridflow' ), isDefault: true },
		{ name: 'bordered', label: __( 'Bordered', 'gridflow' ) },
		{ name: 'rounded', label: __( 'Rounded', 'gridflow' ) },
	],
	edit,
	save,
};

export { name, metadata, settings };
