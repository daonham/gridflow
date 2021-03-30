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
	GridHubTyphography,
	GridHubBoxControl,
	GridHubBorder,
	GridHubBoxShadow,
	GridHubTextAlign,
	GridHubTextUnit,
	GridHubColorPicker,
	GridHubIconSelect,
	GridHubLinkControl,
} = wp.gridhubComponents;

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
				<PanelBody title={ __( 'Settings', 'gridhub' ) } initialOpen={ true }>
					<GridHubLinkControl
						values={ links }
						onChange={ ( value ) => setAttributes( { links: value } ) }
					/>
					<Flex gap={ 8 } justify={ 'flex-start' } align={ 'flex-start' }>
						<FlexItem>
							<GridHubTextUnit
								label={ __( 'Width', 'gridhub' ) }
								values={ width }
								onChange={ ( value ) => setAttributes( { width: value } ) }
							/>
						</FlexItem>

						<FlexItem>
							<GridHubTextUnit
								label={ __( 'Height', 'gridhub' ) }
								values={ height }
								onChange={ ( value ) => setAttributes( { height: value } ) }
							/>
						</FlexItem>
					</Flex>
					<GridHubTextAlign
						label={ __( 'Alignment', 'gridhub' ) }
						values={ textAligns }
						onChange={ ( value ) => setAttributes( { textAligns: value } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Button', 'gridhub' ) } initialOpen={ false }>
					<TabPanel
						tabs={ [
							{
								name: 'normal',
								title: __( 'Normal', 'gridhub' ),
							},
							{
								name: 'hover',
								title: __( 'Hover', 'gridhub' ),
							},
						] }>
						{
							( tab ) => {
								if ( tab.name === 'normal' ) {
									return (
										<>
											<GridHubColorPicker
												label={ __( 'Color', 'gridhub' ) }
												value={ color }
												alpha={ true }
												onChange={ ( value ) => setAttributes( { color: value } ) }
											/>
											<GridHubColorPicker
												label={ __( 'Background Color', 'gridhub' ) }
												value={ bgColor }
												alpha={ true }
												gradients={ true }
												onChange={ ( value ) => setAttributes( { bgColor: value } ) }
											/>
											<GridHubBoxControl
												label={ __( 'Padding', 'gridhub' ) }
												values={ padding }
												onChange={ ( value ) => setAttributes( { padding: value } ) }
											/>
											<GridHubBorder
												label={ __( 'Border', 'gridhub' ) }
												values={ border }
												device={ true }
												onChange={ ( value ) => setAttributes( { border: value } ) }
											/>
											<GridHubBoxControl
												label={ __( 'Border Radius', 'gridhub' ) }
												values={ borderRadius }
												onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
											/>
											<GridHubBoxShadow
												label={ __( 'Box Shadow', 'gridhub' ) }
												value={ boxShadow }
												onChange={ ( value ) => setAttributes( { boxShadow: value } ) }
											/>
										</>
									);
								}

								if ( tab.name === 'hover' ) {
									return (
										<>
											<GridHubColorPicker
												label={ __( 'Color', 'gridhub' ) }
												value={ colorHover }
												alpha={ true }
												onChange={ ( value ) => setAttributes( { colorHover: value } ) }
											/>
											<GridHubColorPicker
												label={ __( 'Background Color', 'gridhub' ) }
												value={ bgColorHover }
												alpha={ true }
												gradients={ true }
												onChange={ ( value ) => setAttributes( { bgColorHover: value } ) }
											/>
											<GridHubBorder
												label={ __( 'Border', 'gridhub' ) }
												values={ borderHover }
												device={ true }
												onChange={ ( value ) => setAttributes( { borderHover: value } ) }
											/>
											<GridHubBoxControl
												label={ __( 'Border Radius', 'gridhub' ) }
												values={ borderRadiusHover }
												onChange={ ( value ) => setAttributes( { borderRadiusHover: value } ) }
											/>
											<GridHubBoxShadow
												label={ __( 'Box Shadow', 'gridhub' ) }
												value={ boxShadowHover }
												onChange={ ( value ) => setAttributes( { boxShadowHover: value } ) }
											/>
										</>
									);
								}
							}
						}
					</TabPanel>
				</PanelBody>

				<PanelBody title={ __( 'Text', 'gridhub' ) } initialOpen={ false }>
					<GridHubTyphography
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

				<PanelBody title={ __( 'Icon', 'gridhub' ) } initialOpen={ false }>
					<GridHubIconSelect
						label={ 'Icon' }
						values={ icon }
						onChange={ ( value ) => setAttributes( { icon: value } ) }
					/>
					<Flex gap={ 8 } justify={ 'flex-start' } align={ 'flex-start' }>
						<FlexItem>
							<SelectControl
								label={ __( 'Icon Position', 'gridhub' ) }
								value={ iconPosition }
								options={ [
									{ label: __( 'Left', 'gridhub' ), value: 'left' },
									{ label: __( 'Right', 'gridhub' ), value: 'right' },
								] }
								onChange={ ( value ) => setAttributes( { iconPosition: value } ) }
								style={ { width: 100 } }
							/>
						</FlexItem>
						<FlexItem>
							<UnitControl
								label={ __( 'Icon Spacing', 'gridhub' ) }
								value={ iconSpacing }
								onChange={ ( value ) => setAttributes( { iconSpacing: value } ) }
								min={ 0 }
								style={ { maxWidth: 90 } }
							/>
						</FlexItem>
					</Flex>
					{ icon?.url && (
						<GridHubTextUnit
							label={ __( 'Width', 'gridhub' ) }
							values={ iconWidth }
							onChange={ ( value ) => setAttributes( { iconWidth: value } ) }
						/>
					) }
					{ icon?.icon && (
						<>
							<Flex gap={ 8 } justify={ 'flex-start' } align={ 'flex-start' }>
								<FlexItem>
									<GridHubTextUnit
										label={ 'Font Size' }
										values={ iconFontSize }
										onChange={ ( value ) => setAttributes( { iconFontSize: value } ) }
									/>
								</FlexItem>

								<FlexItem>
									<GridHubTextUnit
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
							{
								name: 'normal',
								title: __( 'Normal', 'gridhub' ),
							},
							{
								name: 'hover',
								title: __( 'Hover', 'gridhub' ),
							},
						] }>
						{
							( tab ) => {
								if ( tab.name === 'normal' ) {
									return (
										<>
											<GridHubColorPicker
												label={ __( 'Color', 'gridhub' ) }
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
											<GridHubColorPicker
												label={ __( 'Color', 'gridhub' ) }
												value={ iconColorHover }
												alpha={ true }
												gradients={ true }
												onChange={ ( value ) => setAttributes( { iconColorHover: value } ) }
											/>
										</>
									);
								}
							}
						}
					</TabPanel>
				</PanelBody>
			</InspectorControls>
		</>
	);
};
export default Inspector;

