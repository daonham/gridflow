import { noop } from 'lodash';

import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

import Border from './control';

const Control = ( {
	id,
	headingId,
	label,
	values,
	onChange = noop,
	device: enableDevice,
	...props
} ) => {
	const handleOnChange = ( nextValues ) => {
		onChange( nextValues );
	};

	const createHandleOnChange = ( side ) => ( next ) => {
		const nextValues = { ...values };

		nextValues[ side ] = next;

		handleOnChange( nextValues );
	};

	const getPreviewDeviceType = useSelect( ( select ) => {
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' );

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : false;
	}, [] );

	const [ device, setDevice ] = useState( 'desktop' );

	const getDevice = getPreviewDeviceType ? getPreviewDeviceType.toLowerCase() : device;

	return (
		<>
			<div id={ id } className="gridhub-control gridhub-border-device-control" role="region" aria-labelledby={ headingId } style={ { marginBottom: 15 } }>
				<Border
					{ ...props }
					headingId={ headingId }
					label={ label }
					device={ enableDevice }
					getDevice={ getDevice }
					setDevice={ setDevice }
					values={ values[ getDevice ] }
					onChange={ createHandleOnChange( [ getDevice ] ) }
				/>

			</div>
		</>
	);
};
export default Control;
