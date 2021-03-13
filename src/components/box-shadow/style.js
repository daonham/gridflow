const { gridHubDeviceValue } = wp.gridhubUtils;

export const GridHubStyleBoxShadow = ( boxShadow ) => {
	const X = gridHubDeviceValue( boxShadow, 'horizontal' );
	const Y = gridHubDeviceValue( boxShadow, 'vertical' );
	const blur = gridHubDeviceValue( boxShadow, 'blur' );
	const spread = gridHubDeviceValue( boxShadow, 'spread' );
	const color = gridHubDeviceValue( boxShadow, 'color' );

	if ( X == undefined && Y == undefined && blur == undefined && spread == undefined ) {
		return;
	}

	return {
		'box-shadow': `${X || 0}px ${Y || 0}px ${blur || 0}px ${spread || 0}px ${color || 'rgb(0 0 0 / 50%)' }`
	}
};
