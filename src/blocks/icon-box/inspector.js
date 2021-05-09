
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
	GridFlowColorPicker,
	GridFlowLinkControl,
	GridFlowRangeControl,
	GridFlowIconSelect,
} = wp.gridflowComponents;

const Inspector = ( { attributes, setAttributes } ) => {
	const {
		icon,
		links,
		iconPosition,
		spacing,
		color,
		bgColor,
		fontSize,
		width,
		border,
		borderRadius,
		boxShadow,

		colorHover,
		bgColorHover,
		transition,
		hoverEffect,

		contentAlignment,
		contentVerticalAlignment,
		contentColor,
		contentBackgroundColor,
		contentMargin,
		contentPadding,
		contentBorder,
		contentBorderRadius,
		contentBoxShadow,
	} = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'gridflow' ) } initialOpen={ true }>
					<GridFlowIconSelect
						label={ __( 'Select Icon', 'gridflow' ) }
						values={ icon }
						onChange={ ( value ) => setAttributes( { icon: value } ) }
					/>
					<GridFlowLinkControl
						values={ links }
						onChange={ ( value ) => setAttributes( { links: value } ) }
					/>
					<SelectControl
						label={ __( 'Icon Position', 'gridflow' ) }
						value={ iconPosition }
						onChange={ ( value ) => setAttributes( { iconPosition: value } ) }
						options={ [
							{ label: __( 'Top', 'gridflow' ), value: 'top' },
							{ label: __( 'Left', 'gridflow' ), value: 'left' },
							{ label: __( 'Right', 'gridflow' ), value: 'right' },
						] }
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
										<GridFlowRangeControl
											label={ __( 'Spacing', 'gridflow' ) }
											values={ spacing }
											onChange={ ( value ) => setAttributes( { spacing: value } ) }
											allowReset={ true }
										/>
										<GridFlowColorPicker
											label={ __( 'Color', 'gridflow' ) }
											value={ color }
											onChange={ ( value ) => setAttributes( { color: value } ) }
										/>
										<GridFlowColorPicker
											label={ __( 'Background Color', 'gridflow' ) }
											value={ bgColor }
											onChange={ ( value ) => setAttributes( { bgColor: value } ) }
										/>
										<GridFlowRangeControl
											label={ __( 'Icon Size', 'gridflow' ) }
											values={ fontSize }
											onChange={ ( value ) => setAttributes( { fontSize: value } ) }
											min={ 2 }
											max={ 300 }
										/>
										<GridFlowRangeControl
											label={ __( 'Width & Height', 'gridflow' ) }
											values={ width }
											onChange={ ( value ) => setAttributes( { width: value } ) }
											min={ 5 }
											max={ 500 }
											allowReset={ true }
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
											onChange={ ( value ) => setAttributes( { colorHover: value } ) }
										/>
										<GridFlowColorPicker
											label={ __( 'Background Color', 'gridflow' ) }
											value={ bgColorHover }
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
									</>
								);
							}
						} }
					</TabPanel>
				</PanelBody>

				<PanelBody title={ __( 'Content', 'gridflow' ) } initialOpen={ false }>
					<GridFlowTextAlign
						label={ __( 'Alignment', 'gridflow' ) }
						values={ contentAlignment }
						onChange={ ( value ) => setAttributes( { contentAlignment: value } ) }
					/>

					<SelectControl
						label={ __( 'Vertical Alignment', 'gridflow' ) }
						value={ contentVerticalAlignment }
						onChange={ ( value ) => setAttributes( { contentVerticalAlignment: value } ) }
						options={ [
							{ label: __( 'Top', 'gridflow' ), value: 'flex-start' },
							{ label: __( 'Center', 'gridflow' ), value: 'center' },
							{ label: __( 'Bottom', 'gridflow' ), value: 'flex-end' },
						] }
					/>
					<GridFlowColorPicker
						label={ __( 'Color', 'gridflow' ) }
						value={ contentColor }
						onChange={ ( value ) => setAttributes( { contentColor: value } ) }
					/>
					<GridFlowColorPicker
						label={ __( 'Background Color', 'gridflow' ) }
						value={ contentBackgroundColor }
						alpha={ true }
						gradients={ true }
						onChange={ ( value ) => setAttributes( { contentBackgroundColor: value } ) }
					/>
					<GridFlowBoxControl
						label={ __( 'Margin', 'gridflow' ) }
						values={ contentMargin }
						onChange={ ( value ) => setAttributes( { contentMargin: value } ) }
					/>
					<GridFlowBoxControl
						label={ __( 'Padding', 'gridflow' ) }
						values={ contentPadding }
						onChange={ ( value ) => setAttributes( { contentPadding: value } ) }
					/>
					<GridFlowBorder
						label={ __( 'Border', 'gridflow' ) }
						values={ contentBorder }
						device={ true }
						onChange={ ( value ) => setAttributes( { contentBorder: value } ) }
					/>
					<GridFlowBoxControl
						label={ __( 'Border Radius', 'gridflow' ) }
						values={ contentBorderRadius }
						onChange={ ( value ) => setAttributes( { contentBorderRadius: value } ) }
					/>
					<GridFlowBoxShadow
						label={ __( 'Box Shadow', 'gridflow' ) }
						value={ contentBoxShadow }
						onChange={ ( value ) => setAttributes( { contentBoxShadow: value } ) }
					/>
				</PanelBody>

			</InspectorControls>
		</>
	);
};
export default Inspector;
