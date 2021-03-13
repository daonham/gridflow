import TextInputControl from './input';
import { noop } from 'lodash';

import { useControlledState } from '../../../utils/use-controlled-state';

import { DEFAULT_VALUES } from './utils';

const Border = ( {
	label,
	headingId,
	values: valuesProp,
	onChange = noop,
	...props
} ) => {
	const [ values, setValues ] = useControlledState( valuesProp, {
		fallback: DEFAULT_VALUES,
	} );

	const inputValues = values || DEFAULT_VALUES;

	const handleOnChange = ( nextValues ) => {
		onChange( nextValues );
		setValues( nextValues );
	};

	const inputControlProps = {
		label,
		headingId,
		onChange: handleOnChange,
		values: inputValues,
		min: 0,
		...props,
	};

	return (
		<TextInputControl { ...inputControlProps } />
	);
};
export default Border;

