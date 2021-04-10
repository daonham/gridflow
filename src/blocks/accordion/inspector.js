import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	Flex,
	FlexItem,
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
	GridFlowRangeControl,
} = wp.gridflowComponents;

const Inspector = ( { attributes, setAttributes } ) => {
	const {
		icon,
		iconActive,
		spacing,
		boxShadow,
		tagName,

		titleTextAligns,
		titleColor,
		bgTitleColor,
		font,
		fontSize,
		lineHeight,
		fontWeight,
		decoration,
		transform,
		fontStyle,
		letterSpacing,
		titlePadding,
		titleBorder,
		titleBorderRadius,

		titleColorActive,
		bgTitleColorActive,
		fontWeightActive,
		titleBorderActive,
		titleBorderRadiusActive,

		iconAlign,
		iconColor,
		iconColorActive,
		iconFontSize,
		iconSpacing,

		contentColor,
		bgContentColor,
		contentPadding,
		contentBorder,
		contentBorderRadius,
	} = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'gridflow' ) } initialOpen={ true }>
					<GridFlowIconSelect
						label={ __( 'Icon', 'gridflow' ) }
						values={ icon }
						onChange={ ( value ) => setAttributes( { icon: value } ) }
					/>
					<GridFlowIconSelect
						label={ __( 'Icon Active', 'gridflow' ) }
						values={ iconActive }
						onChange={ ( value ) => setAttributes( { iconActive: value } ) }
					/>
					<GridFlowRangeControl
						label={ __( 'Spacing', 'gridflow' ) }
						values={ spacing }
						onChange={ ( value ) => setAttributes( { spacing: value } ) }
					/>
					<GridFlowBoxShadow
						label={ __( 'Box Shadow', 'gridflow' ) }
						value={ boxShadow }
						onChange={ ( value ) => setAttributes( { boxShadow: value } ) }
					/>
					<SelectControl
						label={ __( 'Title HTML Tag', 'gridflow' ) }
						value={ tagName }
						options={ [
							{ label: 'H1', value: 'h1' },
							{ label: 'H2', value: 'h2' },
							{ label: 'H3', value: 'h3' },
							{ label: 'H4', value: 'h4' },
							{ label: 'H5', value: 'h5' },
							{ label: 'H6', value: 'h6' },
							{ label: 'DIV', value: 'div' },
							{ label: 'P', value: 'p' },
							{ label: 'SPAN', value: 'span' },
						] }
						onChange={ ( value ) => setAttributes( { tagName: value } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Title', 'gridflow' ) } initialOpen={ false }>
					<TabPanel
						tabs={ [
							{ name: 'normal', title: __( 'Normal', 'gridflow' ) },
							{ name: 'active', title: __( 'Hover - Active', 'gridflow' ) },
						] }
					>
						{ ( tab ) => {
							if ( tab.name === 'normal' ) {
								return (
									<>
										<GridFlowTextAlign
											label={ __( 'Alignment', 'gridflow' ) }
											values={ titleTextAligns }
											onChange={ ( value ) => setAttributes( { titleTextAligns: value } ) }
											style={ { marginTop: 10 } }
										/>
										<GridFlowColorPicker
											label={ __( 'Color', 'gridflow' ) }
											value={ titleColor }
											alpha={ true }
											onChange={ ( value ) => setAttributes( { titleColor: value } ) }
										/>
										<GridFlowColorPicker
											label={ __( 'Background Color', 'gridflow' ) }
											value={ bgTitleColor }
											alpha={ true }
											gradients={ true }
											onChange={ ( value ) => setAttributes( { bgTitleColor: value } ) }
										/>
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
										<GridFlowBoxControl
											label={ __( 'Padding', 'gridflow' ) }
											values={ titlePadding }
											onChange={ ( value ) => setAttributes( { titlePadding: value } ) }
										/>
										<GridFlowBorder
											label={ __( 'Border', 'gridflow' ) }
											values={ titleBorder }
											device={ true }
											onChange={ ( value ) => setAttributes( { titleBorder: value } ) }
										/>
										<GridFlowBoxControl
											label={ __( 'Border Radius', 'gridflow' ) }
											values={ titleBorderRadius }
											onChange={ ( value ) => setAttributes( { titleBorderRadius: value } ) }
										/>
									</>
								);
							}

							if ( tab.name === 'active' ) {
								return (
									<>
										<GridFlowColorPicker
											label={ __( 'Color', 'gridflow' ) }
											value={ titleColorActive }
											alpha={ true }
											onChange={ ( value ) => setAttributes( { titleColorActive: value } ) }
										/>
										<GridFlowColorPicker
											label={ __( 'Background Color', 'gridflow' ) }
											value={ bgTitleColorActive }
											alpha={ true }
											gradients={ true }
											onChange={ ( value ) => setAttributes( { bgTitleColorActive: value } ) }
										/>
										<SelectControl
											label={ 'Font Weight' }
											value={ fontWeightActive }
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
											onChange={ ( value ) => setAttributes( { fontWeightActive: value } ) }
										/>
										<GridFlowBorder
											label={ __( 'Border', 'gridflow' ) }
											values={ titleBorderActive }
											device={ true }
											onChange={ ( value ) => setAttributes( { titleBorderActive: value } ) }
										/>
										<GridFlowBoxControl
											label={ __( 'Border Radius', 'gridflow' ) }
											values={ titleBorderRadiusActive }
											onChange={ ( value ) => setAttributes( { titleBorderRadiusActive: value } ) }
										/>
									</>
								);
							}
						} }
					</TabPanel>
				</PanelBody>

				<PanelBody title={ __( 'Icon', 'gridflow' ) } initialOpen={ false }>
					<SelectControl
						label={ __( 'Alignment', 'gridflow' ) }
						value={ iconAlign }
						options={ [
							{ label: 'Left', value: 'left' },
							{ label: 'Right', value: 'right' },
						] }
						onChange={ ( value ) => setAttributes( { iconAlign: value } ) }
					/>
					<GridFlowColorPicker
						label={ __( 'Color', 'gridflow' ) }
						value={ iconColor }
						alpha={ true }
						onChange={ ( value ) => setAttributes( { iconColor: value } ) }
					/>
					<GridFlowColorPicker
						label={ __( 'Active Color', 'gridflow' ) }
						value={ iconColorActive }
						alpha={ true }
						onChange={ ( value ) => setAttributes( { iconColorActive: value } ) }
					/>
					<Flex gap={ 8 } align={ 'flex-start' } justify={ 'flex-start' }>
						<FlexItem>
							<GridFlowTextUnit
								label={ __( 'Font size', 'gridflow' ) }
								values={ iconFontSize }
								onChange={ ( value ) => setAttributes( { iconFontSize: value } ) }
							/>
						</FlexItem>
						<FlexItem>
							<GridFlowTextUnit
								label={ __( 'Spacing', 'gridflow' ) }
								values={ iconSpacing }
								onChange={ ( value ) => setAttributes( { iconSpacing: value } ) }
							/>
						</FlexItem>
					</Flex>
				</PanelBody>

				<PanelBody title={ __( 'Content', 'gridflow' ) } initialOpen={ false }>
					<GridFlowColorPicker
						label={ __( 'Color', 'gridflow' ) }
						value={ contentColor }
						alpha={ true }
						onChange={ ( value ) => setAttributes( { contentColor: value } ) }
					/>
					<GridFlowColorPicker
						label={ __( 'Background Color', 'gridflow' ) }
						value={ bgContentColor }
						alpha={ true }
						gradients={ true }
						onChange={ ( value ) => setAttributes( { bgContentColor: value } ) }
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
				</PanelBody>
			</InspectorControls>
		</>
	);
};
export default Inspector;
