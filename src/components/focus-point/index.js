import { useInstanceId } from '@wordpress/compose';

import Control from './control';
import { noop } from 'lodash';

import { useControlledState } from '../../utils/use-controlled-state';

function useUniqueId( idProp ) {
	const instanceId = useInstanceId(
		GridFlowFocusPointPicker,
		'inspector-gridflow-focus-point-control'
	);

	return idProp || instanceId;
}

const DEFAULT_VALUES = {
	desktop: { x: undefined, y: undefined },
	tablet: { x: undefined, y: undefined },
	mobile: { x: undefined, y: undefined },
};

const GridFlowFocusPointPicker = ( {
	id: idProp,
	label,
	url,
	values: valuesProp,
	onChange = noop,
	dimensions = {},
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
		url,
		dimensions,
		onChange: handleOnChange,
		values: inputValues,
		...props,
	};

	return <Control { ...inputControlProps } />;
};
export default GridFlowFocusPointPicker;
