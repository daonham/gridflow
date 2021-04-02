import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	Flex,
	FlexItem,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';

const {
	GridFlowTyphography,
	GridFlowBoxControl,
	GridFlowBorder,
	GridFlowBoxShadow,
	GridFlowTextAlign,
	GridFlowTextUnit,
	GridFlowTextShadow,
	GridFlowColorPicker,
	GridFlowIconSelect,
} = wp.gridflowComponents;

const Inspector = ( { attributes, setAttributes } ) => {
	const {
		tagName,
		textAligns,
		color,
		font,
		fontSize,
		lineHeight,
		fontWeight,
		decoration,
		transform,
		fontStyle,
		letterSpacing,
		textShadow,
		icon,
		iconPosition,
		iconSpacing,
		iconAlignment,
		iconWidth,
		iconFontSize,
		iconLineHeight,
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
					<GridFlowTextAlign
						values={ textAligns }
						onChange={ ( value ) => setAttributes( { textAligns: value } ) }
					/>
					<GridFlowColorPicker
						label={ __( 'Color', 'gridflow' ) }
						value={ color }
						alpha={ true }
						onChange={ ( value ) => setAttributes( { color: value } ) }
					/>
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
					<GridFlowTextShadow
						label={ __( 'Text Shadow', 'gridflow' ) }
						value={ textShadow }
						onChange={ ( value ) => setAttributes( { textShadow: value } ) }
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
					<SelectControl
						label={ __( 'Vertical Alignment', 'gridflow' ) }
						value={ iconAlignment }
						options={ [
							{ label: __( 'Top', 'gridflow' ), value: 'flex-start' },
							{ label: __( 'Center', 'gridflow' ), value: 'center' },
							{ label: __( 'Bottom', 'gridflow' ), value: 'flex-end' },
						] }
						onChange={ ( value ) => setAttributes( { iconAlignment: value } ) }
					/>
					{ icon?.url && (
						<GridFlowTextUnit
							label={ __( 'Width', 'gridflow' ) }
							values={ iconWidth }
							onChange={ ( value ) => setAttributes( { iconWidth: value } ) }
						/>
					) }
					{ icon?.icon && (
						<>
							<Flex
								gap={ 8 }
								justify={ 'flex-start' }
								align={ 'flex-start' }
							>
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
							<GridFlowColorPicker
								label={ __( 'Color', 'gridflow' ) }
								value={ iconColor }
								alpha={ true }
								gradients={ true }
								onChange={ ( value ) => setAttributes( { iconColor: value } ) }
							/>
						</>
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
			</InspectorControls>
		</>
	);
};
export default Inspector;
