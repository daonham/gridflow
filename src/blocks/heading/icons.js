import { SVG } from '@wordpress/components';

const getTagIcon = ( value ) => {
	if ( 'h1' === value ) {
		return (
			<SVG style={ { width: '30px', height: '20px' } }>
				<text style={ { fontSize: '14px', fontWeight: 600 } } x="0" y="15">
					H1
				</text>
			</SVG>
		);
	}

	if ( 'h2' === value ) {
		return (
			<SVG style={ { width: '30px', height: '20px' } }>
				<text style={ { fontSize: '14px', fontWeight: 600 } } x="0" y="15">
					H2
				</text>
			</SVG>
		);
	}

	if ( 'h3' === value ) {
		return (
			<SVG style={ { width: '30px', height: '20px' } }>
				<text style={ { fontSize: '14px', fontWeight: 600 } } x="0" y="15">
					H3
				</text>
			</SVG>
		);
	}

	if ( 'h4' === value ) {
		return (
			<SVG style={ { width: '30px', height: '20px' } }>
				<text style={ { fontSize: '14px', fontWeight: 600 } } x="0" y="15">
					H4
				</text>
			</SVG>
		);
	}

	if ( 'h5' === value ) {
		return (
			<SVG style={ { width: '30px', height: '20px' } }>
				<text style={ { fontSize: '14px', fontWeight: 600 } } x="0" y="15">
					H5
				</text>
			</SVG>
		);
	}

	if ( 'h6' === value ) {
		return (
			<SVG style={ { width: '30px', height: '20px' } }>
				<text style={ { fontSize: '14px', fontWeight: 600 } } x="0" y="15">
					H6
				</text>
			</SVG>
		);
	}

	if ( 'div' === value ) {
		return (
			<SVG style={ { width: '30px', height: '20px' } }>
				<text style={ { fontSize: '14px', fontWeight: 600 } } x="0" y="15">
					DIV
				</text>
			</SVG>
		);
	}

	if ( 'p' === value ) {
		return (
			<SVG style={ { width: '30px', height: '20px' } }>
				<text style={ { fontSize: '14px', fontWeight: 600 } } x="0" y="15">
					P
				</text>
			</SVG>
		);
	}

	if ( 'span' === value ) {
		return (
			<SVG style={ { width: '30px', height: '20px' } }>
				<text style={ { fontSize: '14px', fontWeight: 600 } } x="0" y="15">
					SPAN
				</text>
			</SVG>
		);
	}
};

export default getTagIcon;
