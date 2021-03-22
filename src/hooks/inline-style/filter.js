import { applyFilters } from '@wordpress/hooks';

export default function inlineStyle( { name, attributes } ) {
	const { gridhubMargin, gridhubPadding, gridhubBorder, gridhubBorderRadius, gridhubBoxShadow, gridhubBackground } = attributes;

	const blockStyle = applyFilters( `gridhub.inlineStyle.${ name }`, attributes );
	const spacing = applyFilters( 'gridhub.style.spacing', gridhubMargin, gridhubPadding );
	const borderStyle = applyFilters( 'gridhub.style.border', gridhubBorder, gridhubBorderRadius, gridhubBoxShadow );
	const backgroundStyle = applyFilters( 'gridhub.style.background', gridhubBackground );

	const inner = ' .gridhub-block-inner';

	if ( blockStyle.desktop ) {
		blockStyle.desktop[ inner ] = {
			...blockStyle?.desktop?.[ inner ] || {},
			...spacing?.desktop?.[ inner ] || {},
			...borderStyle?.desktop?.[ inner ] || {},
			...backgroundStyle?.desktop?.[ inner ] || {},
		};
	}

	if ( blockStyle.tablet ) {
		blockStyle.tablet[ inner ] = {
			...blockStyle?.tablet?.[ inner ] || {},
			...spacing?.tablet?.[ inner ] || {},
			...borderStyle?.tablet?.[ inner ] || {},
			...backgroundStyle?.tablet?.[ inner ] || {},
		};
	}

	if ( blockStyle.mobile ) {
		blockStyle.mobile[ inner ] = {
			...blockStyle?.mobile?.[ inner ] || {},
			...spacing?.mobile?.[ inner ] || {},
			...borderStyle?.mobile?.[ inner ] || {},
			...backgroundStyle?.mobile?.[ inner ] || {},
		};
	}

	return blockStyle;
}
