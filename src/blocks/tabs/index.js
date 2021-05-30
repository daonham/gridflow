import { __ } from '@wordpress/i18n';

import icon from './icon';
import edit from './edit';
import metadata from './block.json';
import save from './save';

import './style';

const { name } = metadata;

const settings = {
	title: __( 'Tabs', 'gridflow' ),
	description: __( 'Allow you to divide your content into tabs.', 'gridflow' ),
	icon,
	keywords: [
		'gridflow',
		__( 'tabs', 'gridflow' ),
	],
	edit,
	save,
};

export { name, metadata, settings };
