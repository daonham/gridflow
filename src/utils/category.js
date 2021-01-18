
/**
 * WordPress dependencies
 */
import { getCategories, setCategories } from '@wordpress/blocks';

const categories = [
	{
		slug: 'gridhub',
		title: 'GridHub',
		icon: 'dashicons-tag',
	},
	...getCategories().filter( ( { slug } ) => slug !== 'gridhub' ),
];

setCategories( categories );

