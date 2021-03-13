const { gridHubDeviceValue } = wp.gridhubUtils;

export const GridHubStyleBox = ( box, type, device ) => {
	const spacing = gridHubDeviceValue( box, device );

	if ( spacing === undefined || spacing === null ) {
		return;
	}

	const top = gridHubDeviceValue( spacing, 'top' );
	const right = gridHubDeviceValue( spacing, 'right' );
	const bottom = gridHubDeviceValue( spacing, 'bottom' );
	const left = gridHubDeviceValue( spacing, 'left' );

	if ( top === right && right === bottom && bottom === left ) {
		if ( type === 'margin' ) {
			return { margin: top };
		}

		if ( type === 'padding' ) {
			return { padding: top };
		}

		if ( type === 'border-radius' ) {
			return { 'border-radius': top };
		}
	} else {
		if ( type === 'margin' ) {
			return {
				'margin-top': top,
				'margin-bottom': bottom,
				'margin-right': right,
				'margin-left': left,
			};
		}

		if ( type === 'padding' ) {
			return {
				'padding-top': top,
				'padding-bottom': bottom,
				'padding-right': right,
				'padding-left': left,
			};
		}

		if ( type === 'border-radius' ) {
			return {
				'border-top-left-radius': top,
				'border-top-right-radius': right,
				'border-bottom-right-radius': bottom,
				'border-bottom-left-radius': left,
			};
		}
	}
};
