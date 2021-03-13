const { gridHubDeviceValue } = wp.gridhubUtils;

export const GridHubStyleBorder = ( border, device ) => {
	if ( device ) {
		const styles = gridHubDeviceValue( border, device );
		return getBorder( styles );

	} else {
		return getBorder( border );
	}
};

const getBorder = ( styles ) => {
	if ( styles === undefined || styles === null ) {
		return;
	}

	const width = gridHubDeviceValue( styles, 'width' );
	const style = gridHubDeviceValue( styles, 'style' );
	const color = gridHubDeviceValue( styles, 'color' );

	if ( typeof width === 'string' && width !== undefined && width !== null ) {
		return {
			border: `${width} ${style} ${color || ''}`
		}
	} else {
		return {
			'border-top': gridHubDeviceValue( width, 'top' ),
			'border-right': gridHubDeviceValue( width, 'right' ),
			'border-bottom': gridHubDeviceValue( width, 'bottom' ),
			'border-left': gridHubDeviceValue( width, 'left' ),
			'border-style': style,
			'border-color': color,
		}
	}
}
