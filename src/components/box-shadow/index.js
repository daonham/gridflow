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
	RangeControl,
} from '@wordpress/components';

import { useControlledState } from '../../utils/use-controlled-state';
import { DEFAULT_VALUES, isValuesDefined } from './utils';

import GridHubColorPicker from '../color';

const GridHubBoxShadow = ( {
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
			<BaseControl id={ null } label={ label } className="gridhub-box-shadow-component">
				<GridHubColorPicker
					label={ null }
					value={ inputValues.color }
					onChange={ createHandleOnChange( 'color' ) }
					alpha={ true }
					hint={ __( 'Shadow Color', 'gridhub' ) }
				/>
				<Dropdown
					position="top left"
					headerTitle={ 'Shadow Options' }
					expandOnMobile={ true }
					contentClassName="gridhub-box-shadow-component__popover"
					renderToggle={ ( { isOpen, onToggle } ) => (
						<Button
							className="gridhub-box-shadow-component__button"
							icon="admin-customizer"
							isSecondary
							label={ 'Shadow Options' }
							onClick={ onToggle }
							aria-expanded={ isOpen }
						/>
					) }
					renderContent={ () => (
						<div className="gridhub-box-shadow-component__items">
							<RangeControl
								label={ __( 'Horizontal', 'gridhub' ) }
								value={ inputValues.horizontal }
								onChange={ createHandleOnChange( 'horizontal' ) }
								min={ -100 }
								max={ 100 }
							/>
							<RangeControl
								label={ __( 'Vertical', 'gridhub' ) }
								value={ inputValues.vertical }
								onChange={ createHandleOnChange( 'vertical' ) }
								min={ -100 }
								max={ 100 }
							/>
							<RangeControl
								label={ __( 'Blur', 'gridhub' ) }
								value={ inputValues.blur }
								onChange={ createHandleOnChange( 'blur' ) }
								min={ 0 }
								max={ 100 }
							/>
							<RangeControl
								label={ __( 'Spread', 'gridhub' ) }
								value={ inputValues.spread }
								onChange={ createHandleOnChange( 'spread' ) }
								min={ -100 }
								max={ 100 }
							/>
						</div>
					) }
				/>
				<Button
					className="gridhub-box-shadow-component__reset"
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

export default GridHubBoxShadow;
