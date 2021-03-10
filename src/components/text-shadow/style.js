const { gridHubDeviceValue } = wp.gridhubUtils;

export const GridHubStyleTextShadow = ( textShadow ) => {
	const X = gridHubDeviceValue( textShadow, 'horizontal' );
	const Y = gridHubDeviceValue( textShadow, 'vertical' );
	const blur = gridHubDeviceValue( textShadow, 'blur' );
	const color = gridHubDeviceValue( textShadow, 'color' );

	if ( X == undefined && Y == undefined && blur == undefined ) {
		return;
	}

	return {
		'text-shadow': `${X || 0} ${Y || 0} ${blur || 0} ${color || 'rgb(0 0 0 / 50%)' }`
	}
};
