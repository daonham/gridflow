import { noop } from 'lodash';

import { useState } from '@wordpress/element';
import { __experimentalUnitControl as UnitControl, FlexItem, Flex } from '@wordpress/components';

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

	const [ device, setDevice ] = useState( 'desktop' );

	return (
		<>
			<div id={ id } className="gridhub-control gridhub-textunit-control" role="region" aria-labelledby={ headingId }>
				<Flex
					className="gridhub-control__header gridhub-textunit-control__header"
					justify="flex-start"
				>
					<FlexItem>
						<p id={ headingId } className="gridhub-control__label gridhub-textunit-control__label">{ label }</p>
					</FlexItem>

					<FlexItem>
						<ResponsiveControl
							device={ device }
							setDevice={ setDevice }
						/>
					</FlexItem>
				</Flex>

				<UnitControl
					{ ...props }
					value={ values[ device ] }
					onChange={ createHandleOnChange( [ device ] ) }
					style={ { maxWidth: 80 } }
				/>
			</div>
		</>
	);
};
export default TextInputControl;
