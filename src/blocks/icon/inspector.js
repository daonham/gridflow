import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	RangeControl,
	TabPanel,
} from '@wordpress/components';

const {
	GridFlowBoxControl,
	GridFlowBorder,
	GridFlowBoxShadow,
	GridFlowTextAlign,
	GridFlowTextUnit,
	GridFlowColorPicker,
	GridFlowLinkControl,
	GridFlowIconSelect,
	GridFlowRangeControl,
} = wp.gridflowComponents;

const Inspector = ( { attributes, setAttributes } ) => {
	const {
		icon,
		links,
		textAligns,
		fontSize,
		imgWidth,
		width,
		color,
		bgColor,
		padding,
		border,
		borderRadius,
		boxShadow,

		colorHover,
		bgColorHover,
		transition,
		hoverEffect,
		borderHover,
		borderRadiusHover,
		boxShadowHover,
	} = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'gridflow' ) } initialOpen={ true }>
					<GridFlowIconSelect
						label={ 'Icon' }
						values={ icon }
						onChange={ ( value ) => setAttributes( { icon: value } ) }
					/>

					<GridFlowLinkControl
						values={ links }
						onChange={ ( value ) => setAttributes( { links: value } ) }
					/>

					<GridFlowTextAlign
						label={ __( 'Alignment', 'gridflow' ) }
						values={ textAligns }
						onChange={ ( value ) => setAttributes( { textAligns: value } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Icon', 'gridflow' ) } initialOpen={ false }>
					<TabPanel
						tabs={ [
							{ name: 'normal', title: __( 'Normal', 'gridflow' ) },
							{ name: 'hover', title: __( 'Hover', 'gridflow' ) },
						] }
					>
						{ ( tab ) => {
							if ( tab.name === 'normal' ) {
								return (
									<>
										<div style={ { marginTop: 10 } } />
										{ icon?.icon && (
											<GridFlowRangeControl
												label={ __( 'Font Size', 'gridflow' ) }
												values={ fontSize }
												onChange={ ( value ) => setAttributes( { fontSize: value } ) }
												min={ 2 }
												max={ 300 }
											/>
										) }

										{ icon?.url && (
											<GridFlowTextUnit
												label={ __( 'Image Width', 'gridflow' ) }
												values={ imgWidth }
												onChange={ ( value ) => setAttributes( { imgWidth: value } ) }
											/>
										) }

										<GridFlowRangeControl
											label={ __( 'Width & Height', 'gridflow' ) }
											values={ width }
											onChange={ ( value ) => setAttributes( { width: value } ) }
											min={ 5 }
											max={ 500 }
										/>

										<GridFlowColorPicker
											label={ __( 'Color', 'gridflow' ) }
											value={ color }
											alpha={ false }
											gradients={ true }
											onChange={ ( value ) => setAttributes( { color: value } ) }
										/>
										<GridFlowColorPicker
											label={ __( 'Background Color', 'gridflow' ) }
											value={ bgColor }
											alpha={ false }
											gradients={ true }
											onChange={ ( value ) => setAttributes( { bgColor: value } ) }
										/>
										<GridFlowBoxControl
											label={ __( 'Padding', 'gridflow' ) }
											values={ padding }
											onChange={ ( value ) => setAttributes( { padding: value } ) }
										/>
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
									</>
								);
							}

							if ( tab.name === 'hover' ) {
								return (
									<>
										<GridFlowColorPicker
											label={ __( 'Color', 'gridflow' ) }
											value={ colorHover }
											alpha={ false }
											gradients={ true }
											onChange={ ( value ) => setAttributes( { colorHover: value } ) }
										/>
										<GridFlowColorPicker
											label={ __( 'Background Color', 'gridflow' ) }
											value={ bgColorHover }
											alpha={ false }
											gradients={ true }
											onChange={ ( value ) => setAttributes( { bgColorHover: value } ) }
										/>
										<RangeControl
											label={ __( 'Transition Duration', 'gridflow' ) }
											value={ transition }
											onChange={ ( value ) => setAttributes( { transition: value } ) }
											min={ 0 }
											max={ 3 }
											step={ 0.1 }
										/>
										<SelectControl
											label={ __( 'Hover Effect', 'gridflow' ) }
											value={ hoverEffect }
											onChange={ ( value ) => setAttributes( { hoverEffect: value } ) }
											options={ [
												{ label: __( 'None', 'gridflow' ), value: '' },
											] }
										/>
										<GridFlowBorder
											label={ __( 'Border', 'gridflow' ) }
											values={ borderHover }
											device={ true }
											onChange={ ( value ) => setAttributes( { borderHover: value } ) }
										/>
										<GridFlowBoxControl
											label={ __( 'Border Radius', 'gridflow' ) }
											values={ borderRadiusHover }
											onChange={ ( value ) => setAttributes( { borderRadiusHover: value } ) }
										/>
										<GridFlowBoxShadow
											label={ __( 'Box Shadow', 'gridflow' ) }
											value={ boxShadowHover }
											onChange={ ( value ) => setAttributes( { boxShadowHover: value } ) }
										/>
									</>
								);
							}
						} }
					</TabPanel>
				</PanelBody>
			</InspectorControls>
		</>
	);
};
export default Inspector;
