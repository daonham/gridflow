const GridHubStyleBorder = ( border, device ) => {
	if ( device ) {
		return getBorder( border?.[device] );

	} else {
		return getBorder( border );
	}
};
export default GridHubStyleBorder;

const getBorder = ( styles ) => {
	if ( styles === undefined || styles === null ) {
		return;
	}

	const width = styles?.width;
	const style = styles?.style;
	const color = styles?.color;

	if ( typeof width === 'string' && width !== undefined && width !== null ) {
		return {
			border: `${width} ${style} ${color || ''}`
		}
	} else {
		return {
			'border-top': width?.top,
			'border-right': width?.right,
			'border-bottom': width?.bottom,
			'border-left': width?.left,
			'border-style': style,
			'border-color': color,
		}
	}
}
