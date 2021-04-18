import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	Flex,
	FlexItem,
	TextControl,
} from '@wordpress/components';

const {
	GridFlowTyphography,
	GridFlowBoxControl,
	GridFlowBorder,
	GridFlowBoxShadow,
	GridFlowColorPicker,
	GridFlowDivider,
} = wp.gridflowComponents;

const Inspector = ( { attributes, setAttributes } ) => {
	const {
		fromValue,
		toValue,
		prefix,
		suffix,
		duration,
		step,

		color,
		font,
		fontSize,
		lineHeight,
		fontWeight,
		decoration,
		transform,
		fontStyle,
		letterSpacing,
		bgColor,
		paddingNumber,
		borderNumber,
		borderRadiusNumber,
		boxShadowNumber,

		colorTitle,
		fontTitle,
		fontSizeTitle,
		lineHeightTitle,
		fontWeightTitle,
		decorationTitle,
		transformTitle,
		fontStyleTitle,
		letterSpacingTitle,
	} = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'gridflow' ) } initialOpen={ true }>
					<Flex>
						<FlexItem>
							<TextControl
								label={ __( 'Start Number', 'gridflow' ) }
								value={ fromValue || '0' }
								onChange={ ( value ) => setAttributes( { fromValue: value } ) }
								type="number"
								min="0"
							/>
							<TextControl
								label={ __( 'Step', 'gridflow' ) }
								value={ step || '1' }
								onChange={ ( value ) => setAttributes( { step: value } ) }
								type="number"
								min="0"
								step="1"
							/>
							<TextControl
								label={ __( 'Prefix', 'gridflow' ) }
								value={ prefix || '' }
								onChange={ ( value ) => setAttributes( { prefix: value } ) }
							/>
						</FlexItem>
						<FlexItem>
							<TextControl
								label={ __( 'End Number', 'gridflow' ) }
								value={ toValue || '100' }
								onChange={ ( value ) => setAttributes( { toValue: value } ) }
								type="number"
								min="0"
							/>
							<TextControl
								label={ __( 'Duration', 'gridflow' ) }
								value={ duration || '2000' }
								onChange={ ( value ) => setAttributes( { duration: value } ) }
								type="number"
								min="0"
							/>
							<TextControl
								label={ __( 'Suffix', 'gridflow' ) }
								value={ suffix || '' }
								onChange={ ( value ) => setAttributes( { suffix: value } ) }
							/>
						</FlexItem>
					</Flex>
				</PanelBody>

				<PanelBody title={ __( 'Number', 'gridflow' ) } initialOpen={ false }>
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
					<GridFlowDivider />
					<GridFlowColorPicker
						label={ __( 'Background Color', 'gridflow' ) }
						value={ bgColor }
						onChange={ ( value ) => setAttributes( { bgColor: value } ) }
					/>
					<GridFlowBoxControl
						label={ __( 'Padding', 'gridflow' ) }
						values={ paddingNumber }
						onChange={ ( value ) => setAttributes( { paddingNumber: value } ) }
					/>
					<GridFlowBorder
						label={ __( 'Border', 'gridflow' ) }
						values={ borderNumber }
						device={ true }
						onChange={ ( value ) => setAttributes( { borderNumber: value } ) }
					/>
					<GridFlowBoxControl
						label={ __( 'Border Radius', 'gridflow' ) }
						values={ borderRadiusNumber }
						onChange={ ( value ) => setAttributes( { borderRadiusNumber: value } ) }
					/>
					<GridFlowBoxShadow
						label={ __( 'Box Shadow', 'gridflow' ) }
						value={ boxShadowNumber }
						onChange={ ( value ) => setAttributes( { boxShadowNumber: value } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Title', 'gridflow' ) } initialOpen={ false }>
					<GridFlowColorPicker
						label={ __( 'Color', 'gridflow' ) }
						value={ colorTitle }
						onChange={ ( value ) => setAttributes( { colorTitle: value } ) }
					/>
					<GridFlowTyphography
						font={ fontTitle }
						onChangeFont={ ( value ) => setAttributes( { fontTitle: value } ) }
						fontSize={ fontSizeTitle }
						onChangeFontSize={ ( value ) => setAttributes( { fontSizeTitle: value } ) }
						lineHeight={ lineHeightTitle }
						onChangeLineHeight={ ( value ) => setAttributes( { lineHeightTitle: value } ) }
						fontWeight={ fontWeightTitle }
						onChangeFontWeight={ ( value ) => setAttributes( { fontWeightTitle: value } ) }
						decoration={ decorationTitle }
						onChangeDecoration={ ( value ) => setAttributes( { decorationTitle: value } ) }
						transform={ transformTitle }
						onChangeTransform={ ( value ) => setAttributes( { transformTitle: value } ) }
						fontStyle={ fontStyleTitle }
						onChangeFontStyle={ ( value ) => setAttributes( { fontStyleTitle: value } ) }
						letterSpacing={ letterSpacingTitle }
						onChangeLetterSpacing={ ( value ) => setAttributes( { letterSpacingTitle: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
};
export default Inspector;
