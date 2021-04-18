import { __ } from '@wordpress/i18n';
import { BlockControls } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { search } from '@wordpress/icons';
import { ToolbarGroup, Dropdown, ToolbarButton, TextControl, Button, RangeControl } from '@wordpress/components';

const Controls = ( { attributes, setAttributes } ) => {
	const { location, zoom } = attributes;

	const [ address, setAddress ] = useState( location );

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<Dropdown
						popoverProps={ {
							position: 'bottom right',
							isAlternate: true,
						} }
						renderToggle={ ( { isOpen, onToggle } ) => (
							<ToolbarButton
								icon={ search }
								label={ __( 'Address' ) }
								onClick={ onToggle }
								aria-expanded={ isOpen }
							/>
						) }
						renderContent={ () => (
							<>
								<span style={ { marginBottom: 8, display: 'inline-block' } }>{ __( 'Address', 'gridflow' ) }</span>
								<form
									onSubmit={ ( e ) => {
										e.preventDefault();
										setAttributes( { location: address } );
									} }
									style={ { display: 'flex' } }
								>
									<TextControl
										value={ address || '' }
										placeholder={ __( 'Enter for a location or address...', 'gridflow' ) }
										onChange={ ( value ) => setAddress( value ) }
										style={ { height: 36, minWidth: 260 } }
									/>
									<Button
										isPrimary
										onClick={ () => setAttributes( { location: address } ) }
										style={ { height: 36, marginLeft: 10 } }
									>
										{ __( 'Apply', 'gridflow' ) }
									</Button>
								</form>

								<RangeControl
									label={ __( 'Zoom', 'gridflow' ) }
									value={ zoom }
									onChange={ ( value ) => setAttributes( { zoom: value } ) }
									min={ 5 }
									max={ 20 }
								/>
							</>
						) }
					/>
				</ToolbarGroup>
			</BlockControls>
		</>
	);
};
export default Controls;
