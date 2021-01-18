import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import {
	BaseControl,
	Dropdown,
	MenuGroup,
	TextControl,
	MenuItem,
	SelectControl,
	FlexItem,
	Flex,
} from '@wordpress/components';

import GridHubRangeControl from '../range';
import GridHubTextUnit from '../text';

import ggFonts from './google-fonts.json';

const Typhography = ( {
	font,
	onChangeFont,
	fontSize,
	onChangeFontSize,
	fontWeight,
	onChangeFontWeight,
	lineHeight,
	onChangeLineHeight,
	transform,
	onChangeTransform,
	fontStyle,
	onChangeFontStyle,
	decoration,
	onChangeDecoration,
	letterSpacing,
	onChangeLetterSpacing,

	hideTransform = false,
	hideLetterSpacing = false,
	hideFontStyle = false,
	hideDecoration = false,
} ) => {
	const [ fonts, setFonts ] = useState( null );
	const [ variants, setVariants ] = useState( null );
	const [ search, setSearch ] = useState( '' );

	useEffect( () => {
		setFonts( ggFonts.items );

		if ( font ) {
			ggFonts.items.find( ( i ) => {
				if ( font === i.family ) {
					const variant = i.variants
						.filter( ( o ) => false === o.includes( 'italic' ) )
						.map( ( o ) => {
							return ( o = {
								label: o === 'regular' ? '400' : o,
								value: o === 'regular' ? '400' : o,
							} );
						} );

					return setVariants( variant );
				}

				return null;
			} );
		}
	}, [] );

	const systemFont = [
		{ value: 'Arial', label: 'Arial' },
		{ value: 'Tahoma', label: 'Tahoma' },
		{ value: 'Verdana', label: 'Verdana' },
		{ value: 'Helvetica', label: 'Helvetica' },
		{ value: 'Time New Roman', label: 'Time New Roman' },
		{ value: 'Georgia', label: 'Georgia' },
	];

	return (
		<>
			<BaseControl id={ null } label={ 'Font Family' }>
				<Dropdown
					position="bottom center"
					contentClassName="gridhub-text-component__popover"
					className={ classnames( 'gridhub-text-component__family', 'gridhub-button-component' ) }
					renderToggle={ ( { isOpen, onToggle } ) => (
						<button
							className={ classnames( 'gridhub-text-component__family--select' ) }
							onClick={ onToggle }
							aria-expanded={ isOpen }
						>
							{ font || __( 'Default', 'gridhub' ) }
							<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-hidden="true" focusable="false"><path d="M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"></path></svg>
						</button>
					) }
					renderContent={ ( { onToggle } ) => (
						<>
							<TextControl
								value={ search }
								onChange={ ( e ) => setSearch( e ) }
							/>
							<MenuItem
								onClick={ () => {
									onToggle();
									onChangeFont( '' );

									setVariants( null );
									setSearch( '' );
								} }
							>
								{ __( 'Default', 'gridhub' ) }
							</MenuItem>
							<MenuGroup label={ __( 'System Fonts', 'gridhub' ) }>
								{ systemFont.map( ( system ) => {
									if ( ! search || system.label.toLowerCase().includes( search.toLowerCase() ) ) {
										return (
											<MenuItem
												key={ system.value }
												isSelected={ system.value === font }
												onClick={ () => {
													onToggle();
													onChangeFont( system.value );

													setVariants( null );
													setSearch( '' );
												} }
											>
												{ system.label }
											</MenuItem>
										);
									}

									return null;
								} ) }
							</MenuGroup>

							<MenuGroup label={ __( 'Google Fonts', 'gridhub' ) }>
								{ fonts.map( ( i ) => {
									if ( ! search || i.family.toLowerCase().includes( search.toLowerCase() ) ) {
										return (
											<MenuItem
												key={ i.family }
												className={ classnames( { 'is-selected': i.family === font } ) }
												onClick={ () => {
													onToggle();
													onChangeFont( i.family );
													onChangeFontWeight( 'regular' );

													const getVariants = i.variants
														.filter( ( o ) => false === o.includes( 'italic' ) )
														.map( ( o ) => {
															return ( o = {
																label: o === 'regular' ? '400' : o,
																value: o === 'regular' ? '400' : o,
															} );
														} );

													setVariants( getVariants );
													setSearch( '' );
												} }
											>
												{ i.family }
											</MenuItem>
										);
									}

									return null;
								} ) }

							</MenuGroup>
						</>
					) }
				/>
			</BaseControl>

			<Flex gap={ 8 } justify={ 'flex-start' } align={ 'flex-start' }>
				<FlexItem>
					<GridHubTextUnit
						label={ 'Font Size' }
						values={ fontSize }
						onChange={ onChangeFontSize }
					/>

					{ variants ? (
						<SelectControl
							label={ 'Font Weight:' }
							value={ fontWeight }
							options={ variants }
							onChange={ onChangeFontWeight }
						/>
					) : (
						<SelectControl
							label={ 'Font Weight' }
							value={ fontWeight }
							options={ [
								{ label: 'Default', value: '' },
								{ label: '100', value: '100' },
								{ label: '200', value: '200' },
								{ label: '300', value: '300' },
								{ label: '400', value: '400' },
								{ label: '500', value: '500' },
								{ label: '600', value: '600' },
								{ label: '700', value: '700' },
								{ label: '800', value: '800' },
								{ label: '900', value: '900' },
							] }
							onChange={ onChangeFontWeight }
						/>
					) }

					{ hideTransform || (
						<SelectControl
							label={ 'Transform' }
							value={ transform }
							options={ [
								{ label: 'Default', value: '' },
								{ label: 'Uppercase', value: 'uppercase' },
								{ label: 'Lowercase', value: 'lowercase' },
								{ label: 'Capitalize', value: 'capitalize' },
								{ label: 'None', value: 'none' },
							] }
							onChange={ onChangeTransform }
						/>
					) }
				</FlexItem>

				<FlexItem>
					<GridHubTextUnit
						label={ 'Line Height' }
						values={ lineHeight }
						onChange={ onChangeLineHeight }
					/>

					{ hideDecoration || (
						<SelectControl
							label={ 'Decoration' }
							value={ decoration }
							options={ [
								{ label: 'Default', value: '' },
								{ label: 'Underline', value: 'underline' },
								{ label: 'Overline', value: 'overline' },
								{ label: 'Line Through', value: 'line-through' },
								{ label: 'None', value: 'none' },
							] }
							onChange={ onChangeDecoration }
						/>
					) }

					{ hideFontStyle || (
						<SelectControl
							label={ 'Style' }
							value={ fontStyle }
							options={ [
								{ label: 'Default', value: '' },
								{ label: 'Italic', value: 'italic' },
								{ label: 'Oblique', value: 'oblique' },
								{ label: 'Normal', value: 'normal' },
							] }
							onChange={ onChangeFontStyle }
						/>
					) }
				</FlexItem>
			</Flex>

			{ hideLetterSpacing || (
				<GridHubRangeControl
					label={ 'Letter Spacing' }
					values={ letterSpacing }
					onChange={ onChangeLetterSpacing }
					min={ -5 }
					step={ 0.01 }
					max={ 10 }
					allowReset={ true }
				/>
			) }
		</>
	);
};
export default Typhography;
