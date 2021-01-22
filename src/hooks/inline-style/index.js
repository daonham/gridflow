export default function getStyle( selectors, uniqueId, isResponsive = false, responsiveType = '' ) {
	let styles = '';
	let breakpoint = '';
	let generalStyle = '';

	if ( responsiveType === 'tablet' ) {
		breakpoint = '767';
	} else if ( responsiveType === 'mobile' ) {
		breakpoint = '575';
	}

	for ( const i in selectors ) {
		const sel = selectors[ i ];
		let css = '';

		for ( const j in sel ) {
			let checkString = true;

			if ( typeof sel[ j ] === 'string' && sel[ j ].length === 0 ) {
				checkString = false;
			}

			if ( typeof sel[ j ] !== 'undefined' && checkString ) {
				css += j + ': ' + sel[ j ] + ';';
			}
		}

		if ( css.length !== 0 ) {
			generalStyle += `body .${ uniqueId }`;
			generalStyle += i + '{';
			generalStyle += css;
			generalStyle += '}';
		}
	}

	if ( isResponsive && typeof generalStyle !== 'undefined' && generalStyle.length !== 0 ) {
		styles += '@media only screen and (max-width: ' + breakpoint + 'px) {';
		styles += generalStyle;
		styles += '}';
	}

	if ( isResponsive ) {
		return styles;
	}

	return generalStyle;
}
