import { __ } from '@wordpress/i18n';

import icon from './icon';
import edit from './edit';
import metadata from './block.json';
import save from './save';

import './style';

const { name } = metadata;

const settings = {
	title: __( 'Social Icons', 'gridflow' ),
	description: __( 'Display icons linking to your social media profiles.', 'gridflow' ),
	icon,
	keywords: [
		'gridflow',
		__( 'icon', 'gridflow' ),
		__( 'social', 'gridflow' ),
	],
	edit,
	save,
};

export { name, metadata, settings };
