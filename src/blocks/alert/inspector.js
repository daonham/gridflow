import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	Flex,
	FlexItem,
} from '@wordpress/components';

const {
	GridFlowBoxControl,
	GridFlowColorPicker,
	GridFlowIconSelect,
	GridFlowRangeControl,
	GridFlowTextUnit,
	GridFlowTyphography,
} = wp.gridflowComponents;

const Inspector = ( { attributes, setAttributes } ) => {
	const {
		type,
		showTitle,
		showDismissButton,
		bgColor,
		borderColor,
		borderWidth,

		color,
		font,
		fontSize,
		lineHeight,
		fontWeight,
		decoration,
		transform,
		fontStyle,
		letterSpacing,
		paddingTitle,

		colorContent,
		fontContent,
		fontSizeContent,
		lineHeightContent,
		fontWeightContent,
		decorationContent,
		transformContent,
		fontStyleContent,
		letterSpacingContent,
		paddingContent,

		showIcon,
		icons,
		sizeIcon,
		iconColor,
	} = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'gridflow' ) } initialOpen={ true }>
					<SelectControl
						label={ __( 'Type', 'gridflow' ) }
						value={ type }
						onChange={ ( value ) => setAttributes( { type: value } ) }
						options={ [
							{ label: __( 'Left Accent Border', 'gridflow' ), value: 'left-border' },
							{ label: __( 'Titled', 'gridflow' ), value: 'titled' },
							{ label: __( 'Solid', 'gridflow' ), value: 'solid' },
							{ label: __( 'Top Accent Border', 'gridflow' ), value: 'top-border' },
							{ label: __( 'Banner', 'gridflow' ), value: 'banner' },
						] }
					/>
					<ToggleControl
						label={ __( 'Show Title', 'gridflow' ) }
						checked={ showTitle }
						onChange={ () => setAttributes( { showTitle: ! showTitle } ) }
					/>
					<ToggleControl
						label={ __( 'Show Dismiss Button', 'gridflow' ) }
						checked={ showDismissButton }
						onChange={ () => setAttributes( { showDismissButton: ! showDismissButton } ) }
					/>
					<GridFlowColorPicker
						label={ __( 'Background Color', 'gridflow' ) }
						value={ bgColor }
						alpha={ true }
						onChange={ ( value ) => setAttributes( { bgColor: value } ) }
					/>
					<GridFlowColorPicker
						label={ __( 'Border Color', 'gridflow' ) }
						value={ borderColor }
						alpha={ true }
						onChange={ ( value ) => setAttributes( { borderColor: value } ) }
					/>
					<GridFlowRangeControl
						label={ __( 'Border Width', 'gridflow' ) }
						values={ borderWidth }
						onChange={ ( value ) => setAttributes( { borderWidth: value } ) }
						min={ 0 }
						max={ 50 }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Title', 'gridflow' ) } initialOpen={ false }>
					<GridFlowColorPicker
						label={ __( 'Color', 'gridflow' ) }
						value={ color }
						onChange={ ( value ) => setAttributes( { color: value } ) }
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
						values={ paddingTitle }
						onChange={ ( value ) => setAttributes( { paddingTitle: value } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Content', 'gridflow' ) } initialOpen={ false }>
					<GridFlowColorPicker
						label={ __( 'Color', 'gridflow' ) }
						value={ colorContent }
						onChange={ ( value ) => setAttributes( { colorContent: value } ) }
					/>
					<GridFlowTyphography
						font={ fontContent }
						onChangeFont={ ( value ) => setAttributes( { fontContent: value } ) }
						fontSize={ fontSizeContent }
						onChangeFontSize={ ( value ) => setAttributes( { fontSizeContent: value } ) }
						lineHeight={ lineHeightContent }
						onChangeLineHeight={ ( value ) => setAttributes( { lineHeightContent: value } ) }
						fontWeight={ fontWeightContent }
						onChangeFontWeight={ ( value ) => setAttributes( { fontWeightContent: value } ) }
						decoration={ decorationContent }
						onChangeDecoration={ ( value ) => setAttributes( { decorationContent: value } ) }
						transform={ transformContent }
						onChangeTransform={ ( value ) => setAttributes( { transformContent: value } ) }
						fontStyle={ fontStyleContent }
						onChangeFontStyle={ ( value ) => setAttributes( { fontStyleContent: value } ) }
						letterSpacing={ letterSpacingContent }
						onChangeLetterSpacing={ ( value ) => setAttributes( { letterSpacingContent: value } ) }
					/>
					<GridFlowBoxControl
						label={ __( 'Padding', 'gridflow' ) }
						values={ paddingContent }
						onChange={ ( value ) => setAttributes( { paddingContent: value } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Icon', 'gridflow' ) } initialOpen={ false }>
					<ToggleControl
						label={ __( 'Show Icon', 'gridflow' ) }
						checked={ showIcon }
						onChange={ () => setAttributes( { showIcon: ! showIcon } ) }
					/>
					{ showIcon && (
						<>
							<GridFlowIconSelect
								values={ icons }
								onChange={ ( value ) => setAttributes( { icons: value } ) }
							/>
							<GridFlowRangeControl
								label={ __( 'Icon Size', 'gridflow' ) }
								values={ sizeIcon }
								onChange={ ( value ) => setAttributes( { sizeIcon: value } ) }
							/>
							<GridFlowColorPicker
								label={ __( 'Icon Color', 'gridflow' ) }
								value={ iconColor }
								onChange={ ( value ) => setAttributes( { iconColor: value } ) }
							/>
						</>
					) }
				</PanelBody>
			</InspectorControls>
		</>
	);
};
export default Inspector;
