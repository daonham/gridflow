import { useInstanceId } from '@wordpress/compose';

import Control from './control';
import { noop } from 'lodash';

import { useControlledState } from '../../utils/use-controlled-state';

function useUniqueId( idProp ) {
	const instanceId = useInstanceId(
		GridFlowSelect,
		'inspector-gridflow-select-control'
	);

	return idProp || instanceId;
}

const DEFAULT_VALUES = {
	desktop: '',
	tablet: '',
	mobile: '',
};

const GridFlowSelect = ( {
	id: idProp,
	label,
	values: valuesProp,
	onChange = noop,
	options,
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
		options,
		...props,
	};

	return <Control { ...inputControlProps } />;
};
export default GridFlowSelect;
