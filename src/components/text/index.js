import { useInstanceId } from '@wordpress/compose';

import TextInputControl from './input';
import { noop } from 'lodash';

import { useControlledState } from '../../utils/use-controlled-state';

import { DEFAULT_VALUES } from '../../utils/utils';

function useUniqueId( idProp ) {
	const instanceId = useInstanceId(
		GridFlowTextUnit,
		'inspector-gridflow-textunit-control'
	);

	return idProp || instanceId;
}

const GridFlowTextUnit = ( {
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
		min: 0,
		...props,
	};

	return <TextInputControl { ...inputControlProps } />;
};
export default GridFlowTextUnit;
