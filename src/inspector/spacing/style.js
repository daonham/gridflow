import { addFilter } from '@wordpress/hooks';

const { GridHubStyleBox } = wp.gridhubComponents;

addFilter( 'gridhub.style.spacing', 'gridhub/inline/spacing', function( margin, padding ) {
	const desktop = {
		' .gridhub-block-inner': {
			...GridHubStyleBox( padding, 'padding', 'desktop' ),
			...GridHubStyleBox( margin, 'margin', 'desktop' ),
		},
	};

	const tablet = {
		' .gridhub-block-inner': {
			...GridHubStyleBox( padding, 'padding', 'tablet' ),
			...GridHubStyleBox( margin, 'margin', 'tablet' ),
		},
	};

	const mobile = {
		' .gridhub-block-inner': {
			...GridHubStyleBox( padding, 'padding', 'mobile' ),
			...GridHubStyleBox( margin, 'margin', 'mobile' ),
		},
	};

	return { desktop, tablet, mobile };
} );

