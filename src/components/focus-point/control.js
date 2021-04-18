import { noop } from 'lodash';

import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { FocalPointPicker, FlexItem, Flex } from '@wordpress/components';

import ResponsiveControl from '../../utils/responsive';

const Control = ( {
	id,
	headingId,
	label,
	values,
	onChange = noop,
	url,
	dimensions,
	...props
} ) => {
	const handleOnChange = ( nextValues ) => {
		onChange( nextValues );
	};

	const createHandleOnChange = ( side ) => ( next ) => {
		const nextValues = { ...values };

		if ( isNaN( next.x ) ) {
			next.x = undefined;
		}

		if ( isNaN( next.y ) ) {
			next.y = undefined;
		}

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
			<div id={ id } className="gridflow-control gridflow-focus-point-control" role="region" aria-labelledby={ headingId }>
				<Flex
					className="gridflow-control__header gridflow-focus-point-control__header"
					justify="flex-start"
				>
					<FlexItem>
						<p id={ headingId } className="gridflow-control__label gridflow-focus-point-control__label">{ label }</p>
					</FlexItem>

					<FlexItem>
						<ResponsiveControl
							device={ getDevice }
							setDevice={ setDevice }
						/>
					</FlexItem>
				</Flex>

				<FocalPointPicker
					{ ...props }
					url={ url }
					value={ values[ getDevice ] }
					dimensions={ dimensions }
					onChange={ createHandleOnChange( [ getDevice ] ) }
				/>
			</div>
		</>
	);
};
export default Control;
