import { useInstanceId } from '@wordpress/compose';

import TextInputControl from './input';
import { noop } from 'lodash';

import { useControlledState } from '../../utils/use-controlled-state';

import { DEFAULT_VALUES } from '../../utils/utils';

function useUniqueId( idProp ) {
	const instanceId = useInstanceId(
		GridFlowRangeControl,
		'inspector-gridflow-range-control'
	);

	return idProp || instanceId;
}

const GridFlowRangeControl = ( {
	id: idProp,
	label,
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

	const id = useUniqueId( idProp );
	const headingId = `${ id }-heading`;

	const inputControlProps = {
		id,
		label,
		headingId,
		onChange: handleOnChange,
		values: inputValues,
		...props,
	};

	return <TextInputControl { ...inputControlProps } />;
};
export default GridFlowRangeControl;
