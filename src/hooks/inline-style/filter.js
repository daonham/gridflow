import { applyFilters } from '@wordpress/hooks';

export default function inlineStyle( { name, attributes } ) {
	const { margin, padding, border, borderRadius, boxShadow } = attributes;

	const blockStyle = applyFilters( `gridhub.inlineStyle.${ name }`, attributes );
	const spacing = applyFilters( 'gridhub.style.spacing', margin, padding );
	const borderStyle = applyFilters( 'gridhub.style.border', border, borderRadius, boxShadow );

	const inner = ' .gridhub-block-inner';

	if ( blockStyle.desktop ) {
		blockStyle.desktop[ inner ] = {
			...blockStyle.desktop[ inner ] || {},
			...spacing.desktop[ inner ] || {},
			...borderStyle.desktop[ inner ] || {},
		};
	}

	if ( blockStyle.tablet ) {
		blockStyle.tablet[ inner ] = {
			...blockStyle.tablet[ inner ] || {},
			...spacing.tablet[ inner ] || {},
			...borderStyle.tablet[ inner ] || {},
		};
	}

	if ( blockStyle.mobile ) {
		blockStyle.mobile[ inner ] = {
			...blockStyle.mobile[ inner ] || {},
			...spacing.mobile[ inner ] || {},
			...borderStyle.mobile[ inner ] || {},
		};
	}

	return blockStyle;
}
