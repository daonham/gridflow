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
			'--gridflow-social-column-gap': spacing?.desktop && `${ spacing.desktop }px`,
			'--gridflow-social-row-gap': rowGap?.desktop && `${ rowGap.desktop }px`,
		},
	};

	const tablet = {
		'': {
			'text-align': textAligns?.tablet,
		},
		' .gridflow-social-icons__items': {
			'--gridflow-social-template-columns': columns?.tablet,
			'--gridflow-social-column-gap': spacing?.tablet && `${ spacing.tablet }px`,
			'--gridflow-social-row-gap': rowGap?.tablet && `${ rowGap.tablet }px`,
		},
	};

	const mobile = {
		'': {
			'text-align': textAligns?.mobile,
		},
		' .gridflow-social-icons__items': {
			'--gridflow-social-template-columns': columns?.mobile,
			'--gridflow-social-column-gap': spacing?.mobile && `${ spacing.mobile }px`,
			'--gridflow-social-row-gap': rowGap?.mobile && `${ rowGap.mobile }px`,
		},
	};

	return { desktop, tablet, mobile };
}

if ( ! hasFilter( 'gridflow.inlineStyle.social', 'gridflow/inline/styles' ) ) {
	addFilter( 'gridflow.inlineStyle.social', 'gridflow/inline/styles', function( output, attributes ) {
		return { ...output, ...inlineStyle( { attributes } ) };
	} );
}
