import classnames from 'classnames';
import startCase from 'lodash/startcase';
import toLower from 'lodash/tolower';

import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { BaseControl, Dropdown, Button, MenuGroup, TextControl, MenuItem, Icon } from '@wordpress/components';

import TextInput from '../text';
import RangeInput from '../range';

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
								label: startCase( toLower( o ) ),
								value: o,
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
			<BaseControl id={ null }>
				<Dropdown
					position="bottom center"
					className={ classnames( 'gridhub-text-component__family', 'gridhub-button-component' ) }
					renderToggle={ ( { isOpen, onToggle } ) => (
						<button
							className={ classnames( 'gridhub-text-component__family--select' ) }
							onClick={ onToggle }
							aria-expanded={ isOpen }
						>
							{ font || __( 'Select Font Family', 'gridhub' ) }
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

									setVariants( [] );
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

													setVariants( [] );
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
																label: startCase( toLower( o ) ),
																value: o,
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

			<RangeInput
				label={ __( 'Font Size', 'gridhub' ) }
				value={ fontSize }
				style={ { width: '100%' } }
				onChange={ onChangeFontSize }
				units={ [ 'px', 'em', 'rem', '%' ] }
				responsive={ true }
				isUnit={ true }
			/>
			<RangeInput
				label={ __( 'Line Height', 'gridhub' ) }
				value={ lineHeight }
				style={ { width: '100%' } }
				onChange={ onChangeLineHeight }
				units={ [ 'px', 'em', 'rem', '%' ] }
				responsive={ true }
			/>
			<RangeInput
				label={ __( 'Font Weight', 'gridhub' ) }
				value={ fontWeight }
				style={ { width: '100%' } }
				onChange={ onChangeFontWeight }
				units={ [ 'px', 'em', 'rem', '%' ] }
				isUnit={ true }
			/>
		</>
	);
};
export default Typhography;
