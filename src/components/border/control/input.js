import { noop, isEmpty } from 'lodash';

import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import {
	__experimentalUnitControl as UnitControl,
	FlexItem,
	Flex,
	SelectControl,
	Button,
} from '@wordpress/components';

import ResponsiveControl from '../../../utils/responsive';

import GridFlowColorPicker from '../../color';
import LinkedButton from './linked-button';
import { DEFAULT_VALUES } from './utils';

const TextInputControl = ( {
	headingId,
	label,
	values,
	onChange = noop,
	device = false,
	getDevice,
	setDevice,
} ) => {
	const handleOnChange = ( nextValues ) => {
		onChange( nextValues );
	};

	const createHandleOnChange = ( side ) => ( next ) => {
		const nextValues = { ...values };

		nextValues[ side ] = next;

		handleOnChange( nextValues );
	};

	const onChangeWidth = ( side ) => ( next ) => {
		if ( typeof values.width === 'string' ) {
			values.width = {
				top: values.width,
				right: values.width,
				bottom: values.width,
				left: values.width,
			};
		}

		const nextValues = { ...values };

		const width = values.width;

		width[ side ] = next;

		const everyValue = Object.values( width );
		const checkValue = everyValue.every( ( v ) => v === everyValue[ 0 ] )
			? everyValue[ 0 ]
			: null;

		nextValues.width = checkValue || width;

		handleOnChange( nextValues );
	};

	const defaultWidth = ( side ) => {
		if ( typeof values.width === 'string' ) {
			return values.width;
		}

		return values.width[ side ];
	};

	const defaultLinked = () => {
		if (
			typeof values.width === 'string' ||
			isEmpty( Object.values( values.width ).filter( Boolean ) )
		) {
			return true;
		}

		return false;
	};

	const [ isLinked, setIsLinked ] = useState( defaultLinked );

	const toggleLinked = () => {
		setIsLinked( ! isLinked );
	};

	const handleOnReset = () => {
		const initialValues = DEFAULT_VALUES;

		onChange( initialValues );
		setIsLinked( true );
	};

	return (
		<>
			<Flex className="gridflow-control__header gridflow-border-control__header">
				<FlexItem>
					<p id={ headingId } className="gridflow-control__label gridflow-border-control__label" >
						{ label }
					</p>
				</FlexItem>

				{ device && (
					<FlexItem style={ { marginRight: 'auto' } }>
						<ResponsiveControl
							device={ getDevice || 'desktop' }
							setDevice={ setDevice || undefined }
						/>
					</FlexItem>
				) }

				<FlexItem>
					<Button
						className="gridflow-border-control__reset"
						isSmall
						isSecondary
						label={ 'Reset' }
						onClick={ handleOnReset }
					>
						{ 'Reset' }
					</Button>
				</FlexItem>
			</Flex>

			<Flex className="gridflow-border-control__content" justify="flex-start" >
				<UnitControl
					className="gridflow-border-control__width"
					value={ values.width }
					onChange={ createHandleOnChange( 'width' ) }
					style={ { maxWidth: 60, marginRight: 8 } }
					disableUnits={ true }
					min="0"
				/>

				<SelectControl
					className="gridflow-border-control__select"
					label={ null }
					value={ values.style }
					options={ [
						{ label: 'Default', value: '' },
						{ label: 'Solid', value: 'solid' },
						{ label: 'Dashed', value: 'dashed' },
						{ label: 'Dotted', value: 'dotted' },
						{ label: 'Double', value: 'double' },
						{ label: 'None', value: 'none' },
					] }
					onChange={ createHandleOnChange( 'style' ) }
				/>

				<GridFlowColorPicker
					label={ null }
					value={ values.color }
					onChange={ createHandleOnChange( 'color' ) }
					alpha={ true }
					hint={ __( 'Border Color', 'gridflow' ) }
				/>

				<LinkedButton onClick={ toggleLinked } isLinked={ isLinked } />
			</Flex>

			{ ! isLinked && (
				<>
					<Flex justify="flex-start" style={ { marginTop: 10 } }>
						<UnitControl
							label={ 'Top' }
							labelPosition="bottom"
							value={ defaultWidth( 'top' ) }
							onChange={ onChangeWidth( 'top' ) }
							style={ { maxWidth: 70 } }
							disableUnits={ true }
							min="0"
						/>
						<UnitControl
							label={ 'Right' }
							labelPosition="bottom"
							value={ defaultWidth( 'right' ) }
							onChange={ onChangeWidth( 'right' ) }
							style={ { maxWidth: 70 } }
							disableUnits={ true }
							min="0"
						/>
						<UnitControl
							label={ 'Bottom' }
							labelPosition="bottom"
							value={ defaultWidth( 'bottom' ) }
							onChange={ onChangeWidth( 'bottom' ) }
							style={ { maxWidth: 70 } }
							disableUnits={ true }
							min="0"
						/>
						<UnitControl
							label={ 'Left' }
							labelPosition="bottom"
							value={ defaultWidth( 'left' ) }
							onChange={ onChangeWidth( 'left' ) }
							style={ { maxWidth: 70 } }
							disableUnits={ true }
							min="0"
						/>
					</Flex>
				</>
			) }
		</>
	);
};
export default TextInputControl;
