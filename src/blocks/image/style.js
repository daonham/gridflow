import { addFilter, hasFilter } from '@wordpress/hooks';
const {
	GridHubStyleBox,
	GridHubStyleBorder,
	GridHubStyleBoxShadow,
	GridHubStyleTypography
} = wp.gridhubComponents;

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
		' .gridhub-image__wrapper': {
			...GridHubStyleBorder( border, 'desktop' ),
			...GridHubStyleBox( borderRadius, 'border-radius', 'desktop' ),
			...GridHubStyleBoxShadow( boxShadow ),
		},
		' .gridhub-image__wrapper img': {
			width: width?.desktop,
			height: height?.desktop,
			'object-fit': objectFit?.desktop || undefined,
			'object-position': objectPosition?.desktop?.x && objectPosition?.desktop?.y ? `${objectPosition?.desktop?.x * 100}% ${objectPosition?.desktop?.y * 100}%` : undefined,
		},
		' .gridhub-image__wrapper--overlay:after': {
			opacity: overlay ? overlay*0.01 : undefined,
			background: bgOverlay,
			transition: `all ${transition}s`
		},
		' .gridhub-image__wrapper--overlay:hover:after': {
			opacity: overlayHover ? overlayHover*0.01 : undefined,
			background: bgOverlayHover,
		},
		' .gridhub-image__caption__text': {
			'text-align': captionTextAligns?.desktop,
			...GridHubStyleBox( captionSpacing, 'margin', 'desktop' ),
			...GridHubStyleTypography( { font, fontSize, lineHeight, fontWeight, decoration, transform, fontStyle, letterSpacing, device: 'desktop' } ),
		}
	};

	const tablet = {
		'': {
			'text-align': textAligns?.tablet,
		},
		' .gridhub-image__wrapper': {
			...GridHubStyleBorder( border, 'tablet' ),
			...GridHubStyleBox( borderRadius, 'border-radius', 'tablet' ),
		},
		' .gridhub-image__wrapper img': {
			width: width?.tablet,
			height: height?.tablet,
			'object-fit': objectFit?.tablet || undefined,
			'object-position': objectPosition?.tablet?.x && objectPosition?.tablet?.y ? `${objectPosition?.tablet?.x * 100}% ${objectPosition?.tablet?.y * 100}%` : undefined,
		},
		' .gridhub-image__caption__text': {
			'text-align': captionTextAligns?.tablet,
			...GridHubStyleBox( captionSpacing, 'margin', 'tablet' ),
			...GridHubStyleTypography( { font, fontSize, lineHeight, fontWeight, decoration, transform, fontStyle, letterSpacing, device: 'tablet' } ),
		}
	};

	const mobile = {
		'': {
			'text-align': textAligns?.mobile,
		},
		' .gridhub-image__wrapper': {
			...GridHubStyleBorder( border, 'mobile' ),
			...GridHubStyleBox( borderRadius, 'border-radius', 'mobile' ),
		},
		' .gridhub-image__wrapper img': {
			width: width?.mobile,
			height: height?.mobile,
			'object-fit': objectFit?.mobile || undefined,
			'object-position': objectPosition?.mobile?.x && objectPosition?.mobile?.y ? `${objectPosition?.mobile?.x * 100}% ${objectPosition?.mobile?.y * 100}%` : undefined,
		},
		' .gridhub-image__caption__text': {
			'text-align': captionTextAligns?.mobile,
			...GridHubStyleBox( captionSpacing, 'margin', 'mobile' ),
			...GridHubStyleTypography( { font, fontSize, lineHeight, fontWeight, decoration, transform, fontStyle, letterSpacing, device: 'mobile' } ),
		}
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridhub.inlineStyle.image', 'gridhub/inline/styles' ) ) {
	addFilter( 'gridhub.inlineStyle.image', 'gridhub/inline/styles', function( attributes ) {
		return inlineStyle( { attributes } );
	} );
}
