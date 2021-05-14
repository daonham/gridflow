import { applyFilters } from '@wordpress/hooks';

export default function inlineStyle( { name, attributes } ) {
	const {
		gridflowMargin,
		gridflowPadding,
		gridflowBorder,
		gridflowBorderRadius,
		gridflowBoxShadow,
		gridflowBorderHover,
		gridflowBorderRadiusHover,
		gridflowBoxShadowHover,
		gridflowBackground,
		gridflowBackgroundHover,
	} = attributes;

	const blockStyle = applyFilters( `gridflow.inlineStyle.${ name }`, attributes );
	const spacing = applyFilters( 'gridflow.style.spacing', gridflowMargin, gridflowPadding );
	const borderStyle = applyFilters( 'gridflow.style.border', gridflowBorder, gridflowBorderRadius, gridflowBoxShadow, gridflowBorderHover, gridflowBorderRadiusHover, gridflowBoxShadowHover );
	const backgroundStyle = applyFilters( 'gridflow.style.background', gridflowBackground, gridflowBackgroundHover );

	const inner = ' >.gridflow-block-inner';
	const innerHover = ' >.gridflow-block-inner:hover';

	if ( blockStyle.desktop ) {
		blockStyle.desktop[ inner ] = {
			...blockStyle?.desktop?.[ inner ] || {},
			...spacing?.desktop?.[ inner ] || {},
			...borderStyle?.desktop?.[ inner ] || {},
			...backgroundStyle?.desktop?.[ inner ] || {},
		};

		blockStyle.desktop[ innerHover ] = {
			...borderStyle?.desktop?.[ innerHover ] || {},
			...backgroundStyle?.desktop?.[ innerHover ] || {},
		};
	}

	if ( blockStyle.tablet ) {
		blockStyle.tablet[ inner ] = {
			...blockStyle?.tablet?.[ inner ] || {},
			...spacing?.tablet?.[ inner ] || {},
			...borderStyle?.tablet?.[ inner ] || {},
			...backgroundStyle?.tablet?.[ inner ] || {},
		};

		blockStyle.tablet[ innerHover ] = {
			...borderStyle?.tablet?.[ innerHover ] || {},
			...backgroundStyle?.tablet?.[ innerHover ] || {},
		};
	}

	if ( blockStyle.mobile ) {
		blockStyle.mobile[ inner ] = {
			...blockStyle?.mobile?.[ inner ] || {},
			...spacing?.mobile?.[ inner ] || {},
			...borderStyle?.mobile?.[ inner ] || {},
			...backgroundStyle?.mobile?.[ inner ] || {},
		};

		blockStyle.mobile[ innerHover ] = {
			...borderStyle?.mobile?.[ innerHover ] || {},
			...backgroundStyle?.mobile?.[ innerHover ] || {},
		};
	}

	return blockStyle;
}
