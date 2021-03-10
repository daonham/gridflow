// Use for get value device in style.
export const gridHubDeviceValue = ( $values, $device ) => {
	if ( $values ) {
		if ( $device ) {
			if ( $values[ $device ] !== undefined && $values[ $device ] !== null ) {
				return $values[ $device ];
			}

			return undefined;
		}

		return $values;
	}

	return undefined;
};
