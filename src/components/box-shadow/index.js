/**
 * External dependencies
 */
import { noop } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import {
	BaseControl,
	Dropdown,
	Button,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';

import { useControlledState } from '../../utils/use-controlled-state';
import { DEFAULT_VALUES, isValuesDefined } from './utils';

import GridFlowColorPicker from '../color';

const GridFlowBoxShadow = ( {
	label = __( 'Box Shadow' ),
	value: valuesProp,
	onChange = noop,
} ) => {
	const [ values, setValues ] = useControlledState( valuesProp, {
		fallback: DEFAULT_VALUES,
	} );

	const inputValues = values || DEFAULT_VALUES;

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
			<BaseControl id={ null } label={ label } className="gridflow-box-shadow-component" >
				<Dropdown
					position="top left"
					headerTitle={ 'Shadow Options' }
					expandOnMobile={ true }
					contentClassName="gridflow-box-shadow-component__popover"
					renderToggle={ ( { isOpen, onToggle } ) => (
						<Button
							className="gridflow-box-shadow-component__button"
							icon={ <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="16px" viewBox="0 0 24 24" width="16px" fill="#000000"><rect fill="none" height="24" width="24" /><path d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z" /></svg> }
							isPrimary
							label={ 'Shadow Options' }
							onClick={ onToggle }
							aria-expanded={ isOpen }
						/>
					) }
					renderContent={ () => (
						<div className="gridflow-box-shadow-component__items">
							<div
								style={ {
									display: 'grid',
									gridTemplateColumns: 'repeat(2, 1fr)',
									gap: 10,
								} }
							>
								<UnitControl
									label={ __( 'X offset', 'gridflow' ) }
									labelPosition="top"
									value={ inputValues.horizontal }
									onChange={ createHandleOnChange( 'horizontal' ) }
									disableUnits={ true }
									min={ -100 }
									max={ 100 }
								/>
								<UnitControl
									label={ __( 'Y offset', 'gridflow' ) }
									labelPosition="top"
									value={ inputValues.vertical }
									onChange={ createHandleOnChange( 'vertical' ) }
									disableUnits={ true }
									min={ -100 }
									max={ 100 }
								/>
								<UnitControl
									label={ __( 'Blur', 'gridflow' ) }
									labelPosition="top"
									value={ inputValues.blur }
									onChange={ createHandleOnChange( 'blur' ) }
									disableUnits={ true }
									min={ 0 }
									max={ 100 }
								/>
								<UnitControl
									label={ __( 'Spread', 'gridflow' ) }
									labelPosition="top"
									value={ inputValues.spread }
									onChange={ createHandleOnChange( 'spread' ) }
									disableUnits={ true }
									min={ 0 }
									max={ 100 }
								/>
							</div>

							<GridFlowColorPicker
								label={ __( 'Color', 'gridflow' ) }
								value={ inputValues.color }
								onChange={ createHandleOnChange( 'color' ) }
								alpha={ true }
								hint={ __( 'Shadow Color', 'gridflow' ) }
							/>
						</div>
					) }
				/>
				<Button
					className="gridflow-box-shadow-component__reset"
					isSmall
					isSecondary
					label={ 'Reset' }
					onClick={ handleOnReset }
					disabled={ ! isDirty }
				>
					{ 'Reset' }
				</Button>
			</BaseControl>
		</>
	);
};

export default GridFlowBoxShadow;
