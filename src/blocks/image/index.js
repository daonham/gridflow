import { __ } from '@wordpress/i18n';

import icon from './icon';
import edit from './edit';
import metadata from './block.json';
import save from './save';

import './style';

const { name } = metadata;

const settings = {
	title: __( 'Image', 'gridhub' ),
	description: __( 'Advanced image for Editor.', 'gridhub' ),
	icon,
	keywords: [
		'gridhub',
		__( 'image', 'gridhub' ),
	],
	edit,
	save,
};

export { name, metadata, settings };
