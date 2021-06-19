import { addFilter, hasFilter } from '@wordpress/hooks';
const {
	GridFlowStyleTypography,
	GridFlowStyleBox,
	GridFlowStyleBorder,
	GridFlowStyleBoxShadow,
} = wp.gridflowComponents;

function inlineStyle( { attributes } ) {
	const {
		imagePosition,
		spacing,
		width,
		height,
		objectFit,
		objectPosition,
		overlay,
		bgOverlay,
		border,
		borderRadius,
		boxShadow,
		transition,
		hoverOverlay,
		hoverBgOverlay,

		contentAlignment,
		contentVerticalAlignment,
		contentColor,
		contentBackgroundColor,
		contentMargin,
		contentPadding,
		contentBorder,
		contentBorderRadius,
		contentBoxShadow,
	} = attributes;

	const desktop = {
		' .gridflow-image-box__wrapper': {
			'text-align': contentAlignment?.desktop,
			'align-items': contentVerticalAlignment,
		},
		' .gridflow-image-box__image': {
			'margin-bottom': imagePosition === 'top' ? ( spacing?.desktop && `${ spacing.desktop }px` ) : undefined,
			'margin-right': imagePosition === 'left' ? ( spacing?.desktop && `${ spacing.desktop }px` ) : undefined,
			'margin-left': imagePosition === 'right' ? ( spacing?.desktop && `${ spacing.desktop }px` ) : undefined,
			transition: transition ? `all ${ transition }s` : undefined,
			...GridFlowStyleBorder( border, 'desktop' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'desktop' ),
			...GridFlowStyleBoxShadow( boxShadow ),
		},
		' .gridflow-image-box__img': {
			width: width?.desktop,
			height: height?.desktop,
			'object-fit': objectFit?.desktop || undefined,
			'-o-object-fit': objectFit?.desktop || undefined,
			'object-position': objectPosition?.desktop?.x && objectPosition?.desktop?.y ? `${ objectPosition?.desktop?.x * 100 }% ${ objectPosition?.desktop?.y * 100 }%` : undefined,
			'-o-object-position': objectPosition?.desktop?.x && objectPosition?.desktop?.y ? `${ objectPosition?.desktop?.x * 100 }% ${ objectPosition?.desktop?.y * 100 }%` : undefined,
		},

		' .gridflow-image-box__image--overlay': {
			opacity: overlay ? overlay * 0.01 : undefined,
			background: bgOverlay,
			transition: transition ? `all ${ transition }s` : undefined,
		},
		' .gridflow-image-box__image:hover .gridflow-image-box__image--overlay': {
			transition: transition ? `all ${ transition }s` : undefined,
			opacity: hoverOverlay ? hoverOverlay * 0.01 : undefined,
			background: hoverBgOverlay,
		},
		' .gridflow-image-box__content': {
			color: contentColor,
			background: contentBackgroundColor,
			...GridFlowStyleBox( contentMargin, 'margin', 'desktop' ),
			...GridFlowStyleBox( contentPadding, 'padding', 'desktop' ),
			...GridFlowStyleBorder( contentBorder, 'desktop' ),
			...GridFlowStyleBox( contentBorderRadius, 'border-radius', 'desktop' ),
			...GridFlowStyleBoxShadow( contentBoxShadow ),
		},
	};

	const tablet = {
		' .gridflow-image-box__wrapper': {
			'text-align': contentAlignment?.tablet,
		},
		' .gridflow-image-box__image': {
			'margin-bottom': imagePosition === 'top' ? ( spacing?.tablet && `${ spacing.tablet }px` ) : undefined,
			'margin-right': imagePosition === 'left' ? ( spacing?.tablet && `${ spacing.tablet }px` ) : undefined,
			'margin-left': imagePosition === 'right' ? ( spacing?.tablet && `${ spacing.tablet }px` ) : undefined,
			...GridFlowStyleBorder( border, 'tablet' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'tablet' ),
		},
		' .gridflow-image-box__img': {
			width: width?.tablet,
			height: height?.tablet,
			'object-fit': objectFit?.tablet || undefined,
			'-o-object-fit': objectFit?.tablet || undefined,
			'object-position': objectPosition?.desktop?.x && objectPosition?.tablet?.y ? `${ objectPosition?.tablet?.x * 100 }% ${ objectPosition?.tablet?.y * 100 }%` : undefined,
		},
		' .gridflow-image-box__content': {
			...GridFlowStyleBox( contentMargin, 'margin', 'tablet' ),
			...GridFlowStyleBox( contentPadding, 'padding', 'tablet' ),
			...GridFlowStyleBorder( contentBorder, 'tablet' ),
			...GridFlowStyleBox( contentBorderRadius, 'border-radius', 'tablet' ),
		},
	};

	const mobile = {
		' .gridflow-image-box__wrapper': {
			display: 'block',
			'text-align': contentAlignment?.mobile,
		},
		' .gridflow-image-box__image': {
			'margin-bottom': imagePosition === 'top' ? ( spacing?.mobile && `${ spacing.mobile }px` ) : undefined,
			'margin-right': imagePosition === 'left' ? ( spacing?.mobile && `${ spacing.mobile }px` ) : undefined,
			'margin-left': imagePosition === 'right' ? ( spacing?.mobile && `${ spacing.mobile }px` ) : undefined,
			...GridFlowStyleBorder( border, 'mobile' ),
			...GridFlowStyleBox( borderRadius, 'border-radius', 'mobile' ),
		},
		' .gridflow-image-box__img': {
			width: width?.mobile,
			height: height?.mobile,
			'object-fit': objectFit?.mobile || undefined,
			'-o-object-fit': objectFit?.mobile || undefined,
			'object-position': objectPosition?.mobile?.x && objectPosition?.mobile?.y ? `${ objectPosition?.mobile?.x * 100 }% ${ objectPosition?.mobile?.y * 100 }%` : undefined,
		},
		' .gridflow-image-box__content': {
			...GridFlowStyleBox( contentMargin, 'margin', 'mobile' ),
			...GridFlowStyleBox( contentPadding, 'padding', 'mobile' ),
			...GridFlowStyleBorder( contentBorder, 'mobile' ),
			...GridFlowStyleBox( contentBorderRadius, 'border-radius', 'mobile' ),
		},
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridflow.inlineStyle.image-box', 'gridflow/inline/styles' ) ) {
	addFilter( 'gridflow.inlineStyle.image-box', 'gridflow/inline/styles', function( output, attributes ) {
		return { ...output, ...inlineStyle( { attributes } ) };
	} );
}
