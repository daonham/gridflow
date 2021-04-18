import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	Flex,
	FlexItem,
	RangeControl,
	ToggleControl,
	TextControl,
} from '@wordpress/components';

const {
	GridFlowTyphography,
	GridFlowDivider,
	GridFlowRangeControl,
	GridFlowBoxControl,
	GridFlowColorPicker,
} = wp.gridflowComponents;

const Inspector = ( { attributes, setAttributes } ) => {
	const {
		color,
		bgColor,
		bgColorContent,
		percent,
		height,
		showValue,
		percentPosition,
		suffix,
		showTitle,
		showCaption,
		borderRadius,

		colorTitle,
		font,
		fontSize,
		lineHeight,
		fontWeight,
		decoration,
		transform,
		fontStyle,
		letterSpacing,
		spacing,

		colorCaption,
		fontCaption,
		fontSizeCaption,
		lineHeightCaption,
		fontWeightCaption,
		decorationCaption,
		transformCaption,
		fontStyleCaption,
		letterSpacingCaption,
		paddingCaption,

		colorPercent,
		fontPercent,
		fontSizePercent,
		lineHeightPercent,
		fontWeightPercent,
		decorationPercent,
		transformPercent,
		fontStylePercent,
		letterSpacingPercent,
		paddingPercent,
	} = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'gridflow' ) } initialOpen={ true }>
					<GridFlowColorPicker
						label={ __( 'Bar Color', 'gridflow' ) }
						value={ color }
						onChange={ ( value ) => setAttributes( { color: value } ) }
						alpha={ true }
					/>
					<GridFlowColorPicker
						label={ __( 'Bar Background Color', 'gridflow' ) }
						value={ bgColor }
						onChange={ ( value ) => setAttributes( { bgColor: value } ) }
						alpha={ true }
						gradients={ true }
					/>
					<GridFlowColorPicker
						label={ __( 'Background Color', 'gridflow' ) }
						value={ bgColorContent }
						onChange={ ( value ) => setAttributes( { bgColorContent: value } ) }
						alpha={ true }
						gradients={ true }
					/>
					<RangeControl
						label={ __( 'Percent', 'gridflow' ) }
						value={ percent }
						onChange={ ( value ) => setAttributes( { percent: value } ) }
						min={ 0 }
						max={ 100 }
						step={ 1 }
					/>
					<Flex style={ { marginBottom: 10 } }>
						<FlexItem style={ { width: '50%' } }>
							<SelectControl
								label={ __( 'Percent Position', 'gridflow' ) }
								value={ percentPosition }
								options={ [
									{ label: __( 'Inner', 'gridflow' ), value: '' },
									{ label: __( 'Top', 'gridflow' ), value: 'top' },
									{ label: __( 'Bottom', 'gridflow' ), value: 'bottom' },
								] }
								onChange={ ( value ) => setAttributes( { percentPosition: value } ) }
							/>
						</FlexItem>
						<FlexItem style={ { width: '50%' } }>
							<TextControl
								label={ __( 'Suffix', 'gridflow' ) }
								value={ suffix }
								onChange={ ( value ) => setAttributes( { suffix: value } ) }
							/>
						</FlexItem>
					</Flex>
					<ToggleControl
						label={ __( 'Show Percent', 'gridflow' ) }
						checked={ showValue }
						onChange={ () => setAttributes( { showValue: ! showValue } ) }
					/>
					<ToggleControl
						label={ __( 'Show Title', 'gridflow' ) }
						checked={ showTitle }
						onChange={ () => setAttributes( { showTitle: ! showTitle } ) }
					/>
					<ToggleControl
						label={ __( 'Show Caption', 'gridflow' ) }
						checked={ showCaption }
						onChange={ () => setAttributes( { showCaption: ! showCaption } ) }
					/>
					<GridFlowDivider />
					<RangeControl
						label={ __( 'Height', 'gridflow' ) }
						value={ height }
						onChange={ ( value ) => setAttributes( { height: value } ) }
					/>
					<GridFlowBoxControl
						label={ __( 'Border Radius', 'gridflow' ) }
						values={ borderRadius }
						onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Title', 'gridflow' ) } initialOpen={ false }>
					<GridFlowColorPicker
						label={ __( 'Color', 'gridflow' ) }
						value={ colorTitle }
						onChange={ ( value ) => setAttributes( { colorTitle: value } ) }
						alpha={ true }
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
					<GridFlowRangeControl
						label={ __( 'Spacing', 'gridhub' ) }
						values={ spacing }
						onChange={ ( value ) => setAttributes( { spacing: value } ) }
						min={ 0 }
						max={ 100 }
						allowReset={ true }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Caption', 'gridflow' ) } initialOpen={ false }>
					<GridFlowColorPicker
						label={ __( 'Color', 'gridflow' ) }
						value={ colorCaption }
						onChange={ ( value ) => setAttributes( { colorCaption: value } ) }
						alpha={ true }
					/>
					<GridFlowTyphography
						font={ fontCaption }
						onChangeFont={ ( value ) => setAttributes( { fontCaption: value } ) }
						fontSize={ fontSizeCaption }
						onChangeFontSize={ ( value ) => setAttributes( { fontSizeCaption: value } ) }
						lineHeight={ lineHeightCaption }
						onChangeLineHeight={ ( value ) => setAttributes( { lineHeightCaption: value } ) }
						fontWeight={ fontWeightCaption }
						onChangeFontWeight={ ( value ) => setAttributes( { fontWeightCaption: value } ) }
						decoration={ decorationCaption }
						onChangeDecoration={ ( value ) => setAttributes( { decorationCaption: value } ) }
						transform={ transformCaption }
						onChangeTransform={ ( value ) => setAttributes( { transformCaption: value } ) }
						fontStyle={ fontStyleCaption }
						onChangeFontStyle={ ( value ) => setAttributes( { fontStyleCaption: value } ) }
						letterSpacing={ letterSpacingCaption }
						onChangeLetterSpacing={ ( value ) => setAttributes( { letterSpacingCaption: value } ) }
					/>
					<GridFlowDivider />
					<GridFlowBoxControl
						label={ __( 'Padding', 'gridflow' ) }
						values={ paddingCaption }
						onChange={ ( value ) => setAttributes( { paddingCaption: value } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Percent', 'gridflow' ) } initialOpen={ false }>
					<GridFlowColorPicker
						label={ __( 'Color', 'gridflow' ) }
						value={ colorPercent }
						onChange={ ( value ) => setAttributes( { colorPercent: value } ) }
						alpha={ true }
					/>
					<GridFlowTyphography
						font={ fontPercent }
						onChangeFont={ ( value ) => setAttributes( { fontPercent: value } ) }
						fontSize={ fontSizePercent }
						onChangeFontSize={ ( value ) => setAttributes( { fontSizePercent: value } ) }
						lineHeight={ lineHeightPercent }
						onChangeLineHeight={ ( value ) => setAttributes( { lineHeightPercent: value } ) }
						fontWeight={ fontWeightPercent }
						onChangeFontWeight={ ( value ) => setAttributes( { fontWeightPercent: value } ) }
						decoration={ decorationPercent }
						onChangeDecoration={ ( value ) => setAttributes( { decorationPercent: value } ) }
						transform={ transformPercent }
						onChangeTransform={ ( value ) => setAttributes( { transformPercent: value } ) }
						fontStyle={ fontStylePercent }
						onChangeFontStyle={ ( value ) => setAttributes( { fontStylePercent: value } ) }
						letterSpacing={ letterSpacingPercent }
						onChangeLetterSpacing={ ( value ) => setAttributes( { letterSpacingPercent: value } ) }
					/>
					<GridFlowDivider />
					<GridFlowBoxControl
						label={ __( 'Padding', 'gridflow' ) }
						values={ paddingPercent }
						onChange={ ( value ) => setAttributes( { paddingPercent: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
};
export default Inspector;
