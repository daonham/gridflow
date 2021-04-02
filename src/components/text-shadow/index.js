/**
 * External dependencies
 */
import { noop } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useInstanceId } from '@wordpress/compose';
import { useState } from '@wordpress/element';
import {
	Button,
	Flex,
	FlexItem,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';

import { useControlledState } from '../../utils/use-controlled-state';
import { DEFAULT_VALUES, isValuesDefined } from './utils';

import GridFlowColorPicker from '../color';

function useUniqueId( idProp ) {
	const instanceId = useInstanceId(
		GridFlowTextShadow,
		'inspector-gridflow-text-shadow-control'
	);

	return idProp || instanceId;
}

const GridFlowTextShadow = ( {
	id: idProp,
	label = __( 'Text Shadow' ),
	value: valuesProp,
	onChange = noop,
} ) => {
	const [ values, setValues ] = useControlledState( valuesProp, {
		fallback: DEFAULT_VALUES,
	} );

	const inputValues = values || DEFAULT_VALUES;

	const id = useUniqueId( idProp );
	const headingId = `${ id }-heading`;

	const hasInitialValue = isValuesDefined( valuesProp );

	const [ isDirty, setIsDirty ] = useState( hasInitialValue );

	const handleOnChange = ( nextValues ) => {
		onChange( nextValues );
		setValues( nextValues );
		setIsDirty( true );
	};

	const createHandleOnChange = ( side ) => ( next ) => {
		const nextValues = { ...inputValues };

		nextValues[ side ] = next;

		handleOnChange( nextValues );
	};

	const handleOnReset = () => {
		const initialValues = DEFAULT_VALUES;

		onChange( initialValues );
		setValues( initialValues );
		setIsDirty( false );
	};

	return (
		<>
			<div id={ id } className="gridflow-text-shadow-component">
				<Flex style={ { paddingBottom: 8 } }>
					<FlexItem>
						<p
							id={ headingId }
							className="gridflow-control__label gridflow-text-shadow-component__label"
						>
							{ label }
						</p>
					</FlexItem>

					<FlexItem>
						<Button
							className="gridflow-text-shadow-component__reset"
							isSmall
							isSecondary
							label={ 'Reset' }
							onClick={ handleOnReset }
							disabled={ ! isDirty }
						>
							{ 'Reset' }
						</Button>
					</FlexItem>
				</Flex>

				<Flex
					className="gridflow-text-shadow-component__content"
					justify="flex-start"
					align="flex-start"
				>
					<UnitControl
						label={ 'X offset' }
						labelPosition="bottom"
						value={ inputValues.horizontal }
						onChange={ createHandleOnChange( 'horizontal' ) }
						style={ { maxWidth: 60 } }
						disableUnits={ true }
						min={ -100 }
						max={ 100 }
					/>
					<UnitControl
						label={ 'Y offset' }
						labelPosition="bottom"
						value={ inputValues.vertical }
						onChange={ createHandleOnChange( 'vertical' ) }
						style={ { maxWidth: 60 } }
						disableUnits={ true }
						min={ -100 }
						max={ 100 }
					/>
					<UnitControl
						label={ 'Blur' }
						labelPosition="bottom"
						value={ inputValues.blur }
						onChange={ createHandleOnChange( 'blur' ) }
						style={ { maxWidth: 60 } }
						disableUnits={ true }
						min={ 0 }
						max={ 100 }
					/>
					<GridFlowColorPicker
						label={ null }
						value={ inputValues.color || 'rgba(0, 0, 0, 0.5)' }
						onChange={ createHandleOnChange( 'color' ) }
						alpha={ true }
						hint={ __( 'Shadow Color', 'gridflow' ) }
					/>
				</Flex>
			</div>
		</>
	);
};

export default GridFlowTextShadow;
