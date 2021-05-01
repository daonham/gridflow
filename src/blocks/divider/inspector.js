import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	Flex,
	FlexItem,
} from '@wordpress/components';

const {
	GridFlowTyphography,
	GridFlowBoxControl,
	GridFlowBorder,
	GridFlowBoxShadow,
	GridFlowTextAlign,
	GridFlowTextUnit,
	GridFlowRangeControl,
	GridFlowColorPicker,
	GridFlowIconSelect,
} = wp.gridflowComponents;

const Inspector = ( { attributes, setAttributes } ) => {
	const {
		style,
		tagName,
		type,
		icon,
		textAligns,
		width,
		height,
		color,

		colorText,
		font,
		fontSize,
		lineHeight,
		fontWeight,
		decoration,
		transform,
		fontStyle,
		letterSpacing,
		textPosition,
		textSpacing,

		iconPosition,
		iconSpacing,
		iconWidth,
		iconFontSize,
		iconColor,
		iconBackgroundColor,
		iconPadding,
		iconBorder,
		iconBorderRadius,
		iconBoxShadow,
	} = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'gridflow' ) } initialOpen={ true }>
					<SelectControl
						label={ __( 'Style', 'gridflow' ) }
						value={ style }
						options={ [
							{ label: 'Solid', value: 'solid' },
							{ label: 'Dotted', value: 'dotted' },
							{ label: 'Double', value: 'double' },
							{ label: 'Dashed', value: 'dashed' },
						] }
						onChange={ ( value ) => setAttributes( { style: value } ) }
					/>
					<SelectControl
						label={ __( 'Add Text or Icon', 'gridflow' ) }
						value={ type }
						options={ [
							{ label: 'None', value: '' },
							{ label: 'Text', value: 'text' },
							{ label: 'Icon', value: 'icon' },
						] }
						onChange={ ( value ) => setAttributes( { type: value } ) }
					/>
					{ type === 'text' && (
						<SelectControl
							label={ __( 'HTML Tag', 'gridflow' ) }
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
					) }
					{ type === 'icon' && (
						<GridFlowIconSelect
							label={ 'Icon' }
							values={ icon }
							onChange={ ( value ) => setAttributes( { icon: value } ) }
						/>
					) }
					<GridFlowTextAlign
						label={ __( 'Alignment', 'gridflow' ) }
						values={ textAligns }
						onChange={ ( value ) => setAttributes( { textAligns: value } ) }
					/>
					<Flex style={ { marginTop: 15 } }>
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
					<GridFlowColorPicker
						label={ __( 'Color', 'gridflow' ) }
						value={ color }
						alpha={ false }
						onChange={ ( value ) => setAttributes( { color: value } ) }
					/>
				</PanelBody>

				{ type === 'text' && (
					<PanelBody title={ __( 'Text', 'gridflow' ) } initialOpen={ false }>
						<SelectControl
							label={ __( 'Position', 'gridflow' ) }
							value={ textPosition }
							options={ [
								{ label: __( 'Center', 'gridflow' ), value: 'center' },
								{ label: __( 'Left', 'gridflow' ), value: 'left' },
								{ label: __( 'Right', 'gridflow' ), value: 'right' },
							] }
							onChange={ ( value ) => setAttributes( { textPosition: value } ) }
						/>
						<GridFlowRangeControl
							label={ __( 'Spacing', 'gridflow' ) }
							values={ textSpacing }
							onChange={ ( value ) => setAttributes( { textSpacing: value } ) }
						/>
						<GridFlowColorPicker
							label={ __( 'Color', 'gridflow' ) }
							value={ colorText }
							alpha={ false }
							onChange={ ( value ) => setAttributes( { colorText: value } ) }
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
					</PanelBody>
				) }

				{ type === 'icon' && (
					<PanelBody title={ __( 'Icon', 'gridflow' ) } initialOpen={ false }>
						<SelectControl
							label={ __( 'Position', 'gridflow' ) }
							value={ iconPosition }
							options={ [
								{ label: __( 'Center', 'gridflow' ), value: 'center' },
								{ label: __( 'Left', 'gridflow' ), value: 'left' },
								{ label: __( 'Right', 'gridflow' ), value: 'right' },
							] }
							onChange={ ( value ) => setAttributes( { iconPosition: value } ) }
						/>
						<Flex gap={ 8 } justify={ 'flex-start' } align={ 'flex-start' }>
							<FlexItem>
								<GridFlowTextUnit
									label={ 'Font Size' }
									values={ iconFontSize }
									onChange={ ( value ) => setAttributes( { iconFontSize: value } ) }
								/>
							</FlexItem>
							<FlexItem>
								<GridFlowTextUnit
									label={ __( 'Icon Spacing', 'gridflow' ) }
									values={ iconSpacing }
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
							<GridFlowColorPicker
								label={ __( 'Color', 'gridflow' ) }
								value={ iconColor }
								alpha={ true }
								onChange={ ( value ) => setAttributes( { iconColor: value } ) }
							/>
						) }
						<GridFlowColorPicker
							label={ __( 'Background Color', 'gridflow' ) }
							value={ iconBackgroundColor }
							alpha={ true }
							gradients={ true }
							onChange={ ( value ) => setAttributes( { iconBackgroundColor: value } ) }
						/>
						<GridFlowBoxControl
							label={ __( 'Padding', 'gridflow' ) }
							values={ iconPadding }
							onChange={ ( value ) => setAttributes( { iconPadding: value } ) }
						/>
						<GridFlowBorder
							label={ __( 'Border', 'gridflow' ) }
							values={ iconBorder }
							device={ true }
							onChange={ ( value ) => setAttributes( { iconBorder: value } ) }
						/>
						<GridFlowBoxControl
							label={ __( 'Border Radius', 'gridflow' ) }
							values={ iconBorderRadius }
							onChange={ ( value ) => setAttributes( { iconBorderRadius: value } ) }
						/>
						<GridFlowBoxShadow
							label={ __( 'Box Shadow', 'gridflow' ) }
							value={ iconBoxShadow }
							onChange={ ( value ) => setAttributes( { iconBoxShadow: value } ) }
						/>
					</PanelBody>
				) }
			</InspectorControls>
		</>
	);
};
export default Inspector;
