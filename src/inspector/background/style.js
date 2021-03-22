import { addFilter } from '@wordpress/hooks';

const { GridHubStyleBackground } = wp.gridhubComponents;

addFilter( 'gridhub.style.background', 'gridhub/inline/background', function( gridhubBackground ) {
	const desktop = {
		' .gridhub-block-inner': {
			...GridHubStyleBackground( gridhubBackground, 'desktop' ),
		},
	};

	const tablet = {
		' .gridhub-block-inner': {
			...GridHubStyleBackground( gridhubBackground, 'tablet' ),
		},
	};

	const mobile = {
		' .gridhub-block-inner': {
			...GridHubStyleBackground( gridhubBackground, 'mobile' ),
		},
	};

	return { desktop, tablet, mobile };
} );

