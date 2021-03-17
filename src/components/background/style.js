const { gridHubDeviceValue } = wp.gridhubUtils;

export const GridHubStyleBackground = ( styles, device ) => {
	const type = gridHubDeviceValue( styles, 'type' );

	if ( type === 'classic' ) {
		const image = gridHubDeviceValue( styles, 'image' );
		const position = gridHubDeviceValue( styles, 'position' );
		const repeat = gridHubDeviceValue( styles, 'repeat' );
		const size = gridHubDeviceValue( styles, 'size' );
		const attachment = gridHubDeviceValue( styles, 'attachment' );

		const positionDevice = gridHubDeviceValue( position, device );
		const x = gridHubDeviceValue( positionDevice, 'x' );
		const y = gridHubDeviceValue( positionDevice, 'y' );

		return {
			'background-color': gridHubDeviceValue( styles, 'color' ),
			'background-image': image ? `url(${image})` : undefined,
			'background-position': image && positionDevice && x && y ? `${x * 100}% ${y * 100}%` : undefined,
			'background-repeat': image && gridHubDeviceValue( repeat, device ),
			'background-size': image && gridHubDeviceValue( size, device ),
			'background-attachment': image && gridHubDeviceValue( attachment, device ),
		};
	}

	return {
		background: gridHubDeviceValue( styles, 'gradient' ),
	};
};
