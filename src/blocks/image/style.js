import { addFilter, hasFilter } from '@wordpress/hooks';
const {
	GridFlowStyleBox,
	GridFlowStyleBorder,
	GridFlowStyleBoxShadow,
	GridFlowStyleTypography,
} = wp.gridflowComponents;

function inlineStyle( { attributes } ) {
	const {
		textAligns,
		width,
		height,
		objectFit,
		objectPosition,
		overlay,
		bgOverlay,
		border,
		borderRadius,
		boxShadow,

		overlayHover,
		bgOverlayHover,
		transition,

		font,
		fontSize,
		lineHeight,
		fontWeight,
		decoration,
		transform,
		fontStyle,
		letterSpacing,
		captionTextAligns,
		captionSpacing,
	} = attributes;
	const desktop = {
		'': {
			'text-align': textAligns?.desktop,
		},
		' .gridflow-image__wrapper': {
			...GridFlowStyleBorder( border, 'desktop' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'desktop' ),
			...GridFlowStyleBoxShadow( boxShadow ),
		},
		' .gridflow-image__wrapper img': {
			width: width?.desktop,
			height: height?.desktop,
			'object-fit': objectFit?.desktop || undefined,
			'-o-object-fit': objectFit?.desktop || undefined,
			'object-position': objectPosition?.desktop?.x && objectPosition?.desktop?.y ? `${ objectPosition?.desktop?.x * 100 }% ${ objectPosition?.desktop?.y * 100 }%` : undefined,
		},
		' .gridflow-image__wrapper--overlay:after': {
			opacity: overlay ? overlay * 0.01 : undefined,
			background: bgOverlay,
			transition: `all ${ transition }s`,
		},
		' .gridflow-image__wrapper--overlay:hover:after': {
			transition: `all ${ transition }s`,
			opacity: overlayHover ? overlayHover * 0.01 : undefined,
			background: bgOverlayHover,
		},
		' .gridflow-image__caption__text': {
			'text-align': captionTextAligns?.desktop,
			...GridFlowStyleBox( captionSpacing, 'margin', 'desktop' ),
			...GridFlowStyleTypography( { font, fontSize, lineHeight, fontWeight, decoration, transform, fontStyle, letterSpacing, device: 'desktop' } ),
		},
	};

	const tablet = {
		'': {
			'text-align': textAligns?.tablet,
		},
		' .gridflow-image__wrapper': {
			...GridFlowStyleBorder( border, 'tablet' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'tablet' ),
		},
		' .gridflow-image__wrapper img': {
			width: width?.tablet,
			height: height?.tablet,
			'object-fit': objectFit?.tablet || undefined,
			'-o-object-fit': objectFit?.tablet || undefined,
			'object-position': objectPosition?.tablet?.x && objectPosition?.tablet?.y ? `${ objectPosition?.tablet?.x * 100 }% ${ objectPosition?.tablet?.y * 100 }%` : undefined,
		},
		' .gridflow-image__caption__text': {
			'text-align': captionTextAligns?.tablet,
			...GridFlowStyleBox( captionSpacing, 'margin', 'tablet' ),
			...GridFlowStyleTypography( { font, fontSize, lineHeight, fontWeight, decoration, transform, fontStyle, letterSpacing, device: 'tablet' } ),
		},
	};

	const mobile = {
		'': {
			'text-align': textAligns?.mobile,
		},
		' .gridflow-image__wrapper': {
			...GridFlowStyleBorder( border, 'mobile' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'mobile' ),
		},
		' .gridflow-image__wrapper img': {
			width: width?.mobile,
			height: height?.mobile,
			'object-fit': objectFit?.mobile || undefined,
			'-o-object-fit': objectFit?.mobile || undefined,
			'object-position': objectPosition?.mobile?.x && objectPosition?.mobile?.y ? `${ objectPosition?.mobile?.x * 100 }% ${ objectPosition?.mobile?.y * 100 }%` : undefined,
		},
		' .gridflow-image__caption__text': {
			'text-align': captionTextAligns?.mobile,
			...GridFlowStyleBox( captionSpacing, 'margin', 'mobile' ),
			...GridFlowStyleTypography( { font, fontSize, lineHeight, fontWeight, decoration, transform, fontStyle, letterSpacing, device: 'mobile' } ),
		},
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridflow.inlineStyle.image', 'gridflow/inline/styles' ) ) {
	addFilter( 'gridflow.inlineStyle.image', 'gridflow/inline/styles', function( output, attributes ) {
		return { ...output, ...inlineStyle( { attributes } ) };
	} );
}
