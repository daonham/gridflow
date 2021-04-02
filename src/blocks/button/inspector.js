import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	Flex,
	FlexItem,
	__experimentalUnitControl as UnitControl,
	TabPanel,
} from '@wordpress/components';

const {
	GridFlowTyphography,
	GridFlowBoxControl,
	GridFlowBorder,
	GridFlowBoxShadow,
	GridFlowTextAlign,
	GridFlowTextUnit,
	GridFlowColorPicker,
	GridFlowIconSelect,
	GridFlowLinkControl,
} = wp.gridflowComponents;

const Inspector = ( { attributes, setAttributes } ) => {
	const {
		links,
		textAligns,
		width,
		height,

		color,
		bgColor,
		padding,
		border,
		borderRadius,
		boxShadow,

		colorHover,
		bgColorHover,
		borderHover,
		borderRadiusHover,
		boxShadowHover,

		font,
		fontSize,
		lineHeight,
		fontWeight,
		decoration,
		transform,
		fontStyle,
		letterSpacing,
		icon,
		iconPosition,
		iconSpacing,
		iconWidth,
		iconFontSize,
		iconLineHeight,
		iconColor,
		iconColorHover,
	} = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'gridflow' ) } initialOpen={ true }>
					<GridFlowLinkControl
						values={ links }
						onChange={ ( value ) => setAttributes( { links: value } ) }
					/>
					<Flex gap={ 8 } justify={ 'flex-start' } align={ 'flex-start' }>
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
							/>
						</FlexItem>
					</Flex>
					<GridFlowTextAlign
						label={ __( 'Alignment', 'gridflow' ) }
						values={ textAligns }
						onChange={ ( value ) => setAttributes( { textAligns: value } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Button', 'gridflow' ) } initialOpen={ false }>
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
										<GridFlowColorPicker
											label={ __( 'Color', 'gridflow' ) }
											value={ color }
											alpha={ true }
											onChange={ ( value ) => setAttributes( { color: value } ) }
										/>
										<GridFlowColorPicker
											label={ __( 'Background Color', 'gridflow' ) }
											value={ bgColor }
											alpha={ true }
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
											alpha={ true }
											onChange={ ( value ) => setAttributes( { colorHover: value } ) }
										/>
										<GridFlowColorPicker
											label={ __( 'Background Color', 'gridflow' ) }
											value={ bgColorHover }
											alpha={ true }
											gradients={ true }
											onChange={ ( value ) => setAttributes( { bgColorHover: value } ) }
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

				<PanelBody title={ __( 'Text', 'gridflow' ) } initialOpen={ false }>
					<GridFlowTyphography
						font={ font }
						onChangeFont={ ( value ) => setAttributes( { font: value } ) }
						fontSize={ fontSize }
						onChangeFontSize={ ( value ) => setAttributes( { fontSize: value } ) }
						lineHeight={ lineHeight }
						onChangeLineHeight={ ( value ) => setAttributes( { lineHeight: value } ) }
						fontWeight={ fontWeight }
						onChangeFontWeight={ ( value ) => setAttributes( { fontWeight: value } ) }
						decoration={ decoration }
						onChangeDecoration={ ( value ) => setAttributes( { decoration: value } ) }
						transform={ transform }
						onChangeTransform={ ( value ) => setAttributes( { transform: value } ) }
						fontStyle={ fontStyle }
						onChangeFontStyle={ ( value ) => setAttributes( { fontStyle: value } ) }
						letterSpacing={ letterSpacing }
						onChangeLetterSpacing={ ( value ) => setAttributes( { letterSpacing: value } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Icon', 'gridflow' ) } initialOpen={ false }>
					<GridFlowIconSelect
						label={ 'Icon' }
						values={ icon }
						onChange={ ( value ) => setAttributes( { icon: value } ) }
					/>
					<Flex gap={ 8 } justify={ 'flex-start' } align={ 'flex-start' }>
						<FlexItem>
							<SelectControl
								label={ __( 'Icon Position', 'gridflow' ) }
								value={ iconPosition }
								options={ [
									{ label: __( 'Left', 'gridflow' ), value: 'left' },
									{ label: __( 'Right', 'gridflow' ), value: 'right' },
								] }
								onChange={ ( value ) => setAttributes( { iconPosition: value } ) }
								style={ { width: 100 } }
							/>
						</FlexItem>
						<FlexItem>
							<UnitControl
								label={ __( 'Icon Spacing', 'gridflow' ) }
								value={ iconSpacing }
								onChange={ ( value ) => setAttributes( { iconSpacing: value } ) }
								min={ 0 }
								style={ { maxWidth: 90 } }
							/>
						</FlexItem>
					</Flex>
					{ icon?.url && (
						<GridFlowTextUnit
							label={ __( 'Width', 'gridflow' ) }
							values={ iconWidth }
							onChange={ ( value ) => setAttributes( { iconWidth: value } ) }
						/>
					) }
					{ icon?.icon && (
						<>
							<Flex gap={ 8 } justify={ 'flex-start' } align={ 'flex-start' } >
								<FlexItem>
									<GridFlowTextUnit
										label={ 'Font Size' }
										values={ iconFontSize }
										onChange={ ( value ) => setAttributes( { iconFontSize: value } ) }
									/>
								</FlexItem>

								<FlexItem>
									<GridFlowTextUnit
										label={ 'Line Height' }
										values={ iconLineHeight }
										onChange={ ( value ) => setAttributes( { iconLineHeight: value } ) }
									/>
								</FlexItem>
							</Flex>
						</>
					) }
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
										<GridFlowColorPicker
											label={ __( 'Color', 'gridflow' ) }
											value={ iconColor }
											alpha={ true }
											gradients={ true }
											onChange={ ( value ) => setAttributes( { iconColor: value } ) }
										/>
									</>
								);
							}

							if ( tab.name === 'hover' ) {
								return (
									<>
										<GridFlowColorPicker
											label={ __( 'Color', 'gridflow' ) }
											value={ iconColorHover }
											alpha={ true }
											gradients={ true }
											onChange={ ( value ) => setAttributes( { iconColorHover: value } ) }
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
