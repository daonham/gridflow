import { addFilter } from '@wordpress/hooks';

const { GridHubStyleBox, GridHubStyleBorder, GridHubStyleBoxShadow } = wp.gridhubComponents;

addFilter( 'gridhub.style.border', 'gridhub/inline/border', function( gridhubBorder, gridhubBorderRadius, gridhubBoxShadow ) {
	const desktop = {
		' .gridhub-block-inner': {
			...GridHubStyleBorder( gridhubBorder, 'desktop' ),
			...GridHubStyleBox( gridhubBorderRadius, 'border-radius', 'desktop' ),
			...GridHubStyleBoxShadow( gridhubBoxShadow ),
		},
	};

	const tablet = {
		' .gridhub-block-inner': {
			...GridHubStyleBorder( gridhubBorder, 'tablet' ),
			...GridHubStyleBox( gridhubBorderRadius, 'border-radius', 'tablet' ),
		},
	};

	const mobile = {
		' .gridhub-block-inner': {
			...GridHubStyleBorder( gridhubBorder, 'mobile' ),
			...GridHubStyleBox( gridhubBorderRadius, 'border-radius', 'mobile' ),
		},
	};

	return { desktop, tablet, mobile };
} );

