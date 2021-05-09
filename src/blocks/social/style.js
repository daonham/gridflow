import { addFilter, hasFilter } from '@wordpress/hooks';

function inlineStyle( { attributes } ) {
	const {
		columns,
		textAligns,
		spacing,
		rowGap,
	} = attributes;

	const desktop = {
		'': {
			'text-align': textAligns?.desktop,
		},
		' .gridflow-social-icons__items': {
			'--gridflow-social-template-columns': columns?.desktop,
			'--gridflow-social-column-gap': spacing?.desktop !== undefined && spacing?.desktop !== null ? `${ spacing.desktop }px` : undefined,
			'--gridflow-social-row-gap': rowGap?.desktop !== undefined && rowGap?.desktop !== null ? `${ rowGap.desktop }px` : undefined,
		},
	};

	const tablet = {
		'': {
			'text-align': textAligns?.tablet,
		},
		' .gridflow-social-icons__items': {
			'--gridflow-social-template-columns': columns?.tablet,
			'--gridflow-social-column-gap': spacing?.tablet !== undefined && spacing?.tablet !== null ? `${ spacing.tablet }px` : undefined,
			'--gridflow-social-row-gap': rowGap?.tablet !== undefined && rowGap?.tablet !== null ? `${ rowGap.tablet }px` : undefined,
		},
	};

	const mobile = {
		'': {
			'text-align': textAligns?.mobile,
		},
		' .gridflow-social-icons__items': {
			'--gridflow-social-template-columns': columns?.mobile,
			'--gridflow-social-column-gap': spacing?.mobile !== undefined && spacing?.mobile !== null ? `${ spacing.mobile }px` : undefined,
			'--gridflow-social-row-gap': rowGap?.mobile !== undefined && rowGap?.mobile !== null ? `${ rowGap.mobile }px` : undefined,
		},
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridflow.inlineStyle.social', 'gridflow/inline/styles' ) ) {
	addFilter( 'gridflow.inlineStyle.social', 'gridflow/inline/styles', function( attributes ) {
		return inlineStyle( { attributes } );
	} );
}
