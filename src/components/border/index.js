import { useInstanceId } from '@wordpress/compose';

import Control from './input';
import { noop } from 'lodash';

import { useControlledState } from '../../utils/use-controlled-state';

const DEFAULT_VALUES = {
	desktop: {
		width: {
			top: null,
			right: null,
			bottom: null,
			left: null,
		},
		style: '',
		color: undefined,
	},
	tablet: {
		width: {
			top: null,
			right: null,
			bottom: null,
			left: null,
		},
		style: '',
		color: undefined,
	},
	mobile: {
		width: {
			top: null,
			right: null,
			bottom: null,
			left: null,
		},
		style: '',
		color: undefined,
	},
};

function useUniqueId( idProp ) {
	const instanceId = useInstanceId(
		GridFlowBorderDevice,
		'inspector-gridflow-border-device-control'
	);

	return idProp || instanceId;
}

const GridFlowBorderDevice = ( {
	id: idProp,
	label,
	values: valuesProp,
	device = false,
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
		device,
		...props,
	};

	return <Control { ...inputControlProps } />;
};
export default GridFlowBorderDevice;
