import { addFilter } from '@wordpress/hooks';

const { GridHubStyleBackground } = wp.gridhubComponents;

addFilter( 'gridhub.style.background', 'gridhub/inline/background', function( background ) {
	const desktop = {
		' .gridhub-block-inner': {
			...GridHubStyleBackground( background, 'desktop' ),
		},
	};

	const tablet = {
		' .gridhub-block-inner': {
			...GridHubStyleBackground( background, 'tablet' ),
		},
	};

	const mobile = {
		' .gridhub-block-inner': {
			...GridHubStyleBackground( background, 'mobile' ),
		},
	};

	return { desktop, tablet, mobile };
} );

