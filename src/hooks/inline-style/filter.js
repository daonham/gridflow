import { applyFilters } from '@wordpress/hooks';

export default function inlineStyle( { name, attributes } ) {
	const { gridflowMargin, gridflowPadding, gridflowBorder, gridflowBorderRadius, gridflowBoxShadow, gridflowBackground } = attributes;

	const blockStyle = applyFilters( `gridflow.inlineStyle.${ name }`, attributes );
	const spacing = applyFilters( 'gridflow.style.spacing', gridflowMargin, gridflowPadding );
	const borderStyle = applyFilters( 'gridflow.style.border', gridflowBorder, gridflowBorderRadius, gridflowBoxShadow );
	const backgroundStyle = applyFilters( 'gridflow.style.background', gridflowBackground );

	const inner = ' .gridflow-block-inner';

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
