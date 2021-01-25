import { applyFilters } from '@wordpress/hooks';

export default function inlineStyle( { name, attributes } ) {
	return applyFilters( `gridhub.inlineStyle.${ name }`, attributes );
}
