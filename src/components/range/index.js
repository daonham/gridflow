import classnames from 'classnames';

import { useInstanceId } from '@wordpress/compose';
import { useState, forwardRef } from '@wordpress/element';
import { RangeControl } from '@wordpress/components';
import { allDevice, matchUnit } from '../../ultils/ultils';

const RangeInput = ( {
	label,
	className,
	value,
	min,
	max,
	step,
	disabled,
	onChange,
	units,
	responsive = false,
	isUnit = false,
	...props
}, ref ) => {
	const instanceId = useInstanceId( RangeInput );

	const [ device, setDevice ] = useState( 'desktop' );

	const id = `gridhub-range-control-${ instanceId }`;

	const updateVal = ( nextValue, nextUnit ) => {
		nextValue = parseFloat( nextValue );

		if ( isNaN( nextValue ) ) {
			nextValue = '';
		} else {
			nextValue = nextValue + ( isUnit && matchUnit( nextUnit, units ) );
		}

		return nextValue;
	};

	const onChangeUnit = ( nextUnit ) => {
		if ( responsive ) {
			onChange( {
				desktop: device === 'desktop' ? updateVal( value.desktop, nextUnit ) : ( value.desktop || '' ),
				tablet: device === 'tablet' ? updateVal( value.tablet, nextUnit ) : ( value.tablet || '' ),
				mobile: device === 'mobile' ? updateVal( value.mobile, nextUnit ) : ( value.mobile || '' ),
			} );
		} else {
			onChange( updateVal( value, nextUnit ) );
		}
	};

	const onChangeValue = ( nextValue ) => {
		if ( responsive ) {
			onChange( {
				desktop: device === 'desktop' ? updateVal( nextValue, value.desktop ) : ( value.desktop || '' ),
				tablet: device === 'tablet' ? updateVal( nextValue, value.tablet ) : ( value.tablet || '' ),
				mobile: device === 'mobile' ? updateVal( nextValue, value.mobile ) : ( value.mobile || '' ),
			} );
		} else {
			onChange( updateVal( nextValue, value ) );
		}
	};

	return (
		<>
			<div className={ classnames( className, 'gridhub-range-control', 'gridhub-button-component', 'gridhub-enable-reponsive-component' ) }>
				{ responsive ? allDevice.map( ( val, i ) => {
					if ( val.name === device ) {
						return (
							<label key={ i } htmlFor={ id + `-${ val.name }` } className="gridhub-range-control__label">{ label }</label>
						);
					}

					return null;
				} ) : (
					<label htmlFor={ id } className="gridhub-range-control__label">{ label }</label>
				) }

				{ responsive && (
					<div className="gridhub-reponsive-component">
						<div className="gridhub-reponsive-component__inner">
							{ allDevice.map( ( val, i ) => {
								return (
									<button
										key={ i }
										className={ classnames( `gridhub-reponsive-component__${ val.name }`, { 'is-active': device === val.name } ) }
										onClick={ () => {
											setDevice( val.name );
										} }
										dangerouslySetInnerHTML={ { __html: val.icon } }
									/>
								);
							} ) }
						</div>
					</div>
				) }

				{ units && isUnit && responsive && allDevice.map( ( val, i ) => {
					if ( val.name === device ) {
						return (
							<div className="gridhub-unit-component" key={ i }>
								<div className="gridhub-unit-component__inner">
									<select
										disabled={ false }
										multiple={ false }
										value={ matchUnit( value[ val.name ], units ) || 'px' }
										onChange={ ( event ) => onChangeUnit( event.target.value ) }
										onBlur={ ( event ) => onChangeUnit( event.target.value ) }
										onFocus={ ( event ) => onChangeUnit( event.target.value ) }
									>
										{ [ ...units ].map( ( valUnit ) => {
											return (
												<option value={ valUnit } key={ valUnit }>{ valUnit.toUpperCase() }</option>
											);
										} ) }
									</select>
								</div>
							</div>
						);
					}
					return null;
				} ) }

				{ units && isUnit && ! responsive && (
					<div className="gridhub-unit-component">
						<div className="gridhub-unit-component__inner">
							<select
								disabled={ false }
								multiple={ false }
								value={ matchUnit( value, units ) || 'px' }
								onChange={ ( event ) => onChangeUnit( event.target.value ) }
								onBlur={ ( event ) => onChangeUnit( event.target.value ) }
								onFocus={ ( event ) => onChangeUnit( event.target.value ) }
							>
								{ [ ...units ].map( ( valUnit ) => {
									return (
										<option value={ valUnit } key={ valUnit }>{ valUnit.toUpperCase() }</option>
									);
								} ) }
							</select>
						</div>
					</div>
				) }

				{ responsive ? allDevice.map( ( val, i ) => {
					if ( val.name === device ) {
						const unit = isUnit && matchUnit( value[ val.name ], units );
						let currentVal = parseFloat( value[ val.name ] );

						if ( isNaN( currentVal ) ) {
							currentVal = '';
						}

						return (
							<div className="gridhub-range-control__content" key={ i }>
								<RangeControl
									min={ min }
									max={ max }
									step={ [ 'em', 'rem' ].includes( unit ) ? .01 : ( step || 1 ) }
									disabled={ disabled }
									value={ currentVal }
									onChange={ ( nextValue ) => onChangeValue( nextValue ) }
									resetFallbackValue=""
									allowReset={ true }
									ref={ ref }
									{ ...props }
								/>
							</div>
						);
					}

					return null;
				} ) : (
					<div className="gridhub-range-control__content">
						<RangeControl
							min={ min }
							max={ max }
							step={ [ 'em', 'rem' ].includes( isUnit && matchUnit( value, units ) ) ? .01 : ( step || 1 ) }
							disabled={ disabled }
							value={ isNaN( parseFloat( value ) ) ? '' : parseFloat( value ) }
							onChange={ ( nextValue ) => onChangeValue( nextValue ) }
							resetFallbackValue=""
							allowReset={ true }
							ref={ ref }
							{ ...props }
						/>
					</div>
				) }

			</div>
		</>
	);
};
export default forwardRef( RangeInput );
