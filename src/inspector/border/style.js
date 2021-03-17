import { addFilter } from '@wordpress/hooks';

const { GridHubStyleBox, GridHubStyleBorder, GridHubStyleBoxShadow } = wp.gridhubComponents;

addFilter( 'gridhub.style.border', 'gridhub/inline/border', function( border, borderRadius, boxShadow ) {
	const desktop = {
		' .gridhub-block-inner': {
			...GridHubStyleBorder( border, 'desktop' ),
			...GridHubStyleBox( borderRadius, 'border-radius', 'desktop' ),
			...GridHubStyleBoxShadow( boxShadow ),
		},
	};

	const tablet = {
		' .gridhub-block-inner': {
			...GridHubStyleBorder( border, 'tablet' ),
			...GridHubStyleBox( borderRadius, 'border-radius', 'tablet' ),
		},
	};

	const mobile = {
		' .gridhub-block-inner': {
			...GridHubStyleBorder( border, 'mobile' ),
			...GridHubStyleBox( borderRadius, 'border-radius', 'mobile' ),
		},
	};

	return { desktop, tablet, mobile };
} );

