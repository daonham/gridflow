import { noop } from 'lodash';

import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { RangeControl, FlexItem, Flex } from '@wordpress/components';

import ResponsiveControl from '../../utils/responsive';

const TextInputControl = ( {
	id,
	headingId,
	label,
	values,
	onChange = noop,
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
			<div id={ id } className="gridflow-control gridflow-range-control" role="region" aria-labelledby={ headingId }>
				<Flex className="gridflow-control__header gridflow-range-control__header" justify="flex-start" >
					<FlexItem>
						<p id={ headingId } className="gridflow-control__label gridflow-range-control__label">{ label }</p>
					</FlexItem>

					<FlexItem>
						<ResponsiveControl
							device={ getDevice }
							setDevice={ setDevice }
						/>
					</FlexItem>
				</Flex>

				<RangeControl
					{ ...props }
					value={ values[ getDevice ] }
					onChange={ createHandleOnChange( [ getDevice ] ) }
				/>
			</div>
		</>
	);
};
export default TextInputControl;
