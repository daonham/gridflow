import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import {
	PanelBody,
	Flex,
	FlexItem,
	TextControl,
	RangeControl,
	Button,
} from '@wordpress/components';

const {
	GridFlowBoxControl,
	GridFlowBorder,
	GridFlowBoxShadow,
	GridFlowTextUnit,
} = wp.gridflowComponents;

const Inspector = ( { attributes, setAttributes } ) => {
	const {
		location,
		zoom,
		width,
		height,
		border,
		borderRadius,
		boxShadow,
	} = attributes;

	const [ address, setAddress ] = useState( location );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'gridflow' ) } initialOpen={ true }>
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
							style={ { height: 36 } }
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
					<Flex>
						<FlexItem>
							<GridFlowTextUnit
								label={ __( 'Width', 'gridflow' ) }
								values={ width }
								onChange={ ( value ) => setAttributes( { width: value } ) }
							/>
						</FlexItem>
						<FlexItem>
							<GridFlowTextUnit
								label={ __( 'Height', 'gridflow' ) }
								values={ height }
								onChange={ ( value ) => setAttributes( { height: value } ) }
								units={ [ 'px' ] }
							/>
						</FlexItem>
					</Flex>
					<GridFlowBorder
						label={ __( 'Border', 'gridflow' ) }
						values={ border }
						device={ true }
						onChange={ ( value ) => setAttributes( { border: value } ) }
					/>
					<GridFlowBoxControl
						label={ __( 'Border Radius', 'gridflow' ) }
						values={ borderRadius }
						onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
					/>
					<GridFlowBoxShadow
						label={ __( 'Box Shadow', 'gridflow' ) }
						value={ boxShadow }
						onChange={ ( value ) => setAttributes( { boxShadow: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
};
export default Inspector;
