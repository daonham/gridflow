const GridFlowStyleBorder = ( border, device ) => {
	if ( device ) {
		return getBorder( border?.[ device ] );
	}
	return getBorder( border );
};
export default GridFlowStyleBorder;

const getBorder = ( styles ) => {
	if ( styles === undefined || styles === null ) {

	}

	const width = styles?.width;
	const style = styles?.style;
	const color = styles?.color;

	if ( typeof width === 'string' && width !== undefined && width !== null ) {
		return {
			border: `${width} ${style} ${color || ''}`
		};
	} else {
		return {
			'border-top': width?.top,
			'border-right': width?.right,
			'border-bottom': width?.bottom,
			'border-left': width?.left,
			'border-style': style,
			'border-color': color,
		};
	}
};
