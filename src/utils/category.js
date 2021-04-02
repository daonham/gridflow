/**
 * WordPress dependencies
 */
import { getCategories, setCategories } from '@wordpress/blocks';

const categories = [
	{
		slug: 'gridflow',
		title: 'GridFlow',
		icon: 'dashicons-tag',
	},
	...getCategories().filter( ( { slug } ) => slug !== 'gridflow' ),
];

setCategories( categories );
