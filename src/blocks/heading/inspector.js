import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';

import GridHubColorPicker from '../../components/color';
import GridHubTextShadow from '../../components/text-shadow';
import GridHubBoxControl from '../../components/box';
import GridHubBoxShadow from '../../components/box-shadow';
import GridHubBorder from '../../components/border';
import GridHubIconSelect from '../../components/icon';

const {
	GridHubTyphography,
} = wp.gridhubComponents;

const {
	GridHubLinkControl,
	GridHubTextAlign,
} = wp.gridhubComponents;

const Inspector = ( { attributes, setAttributes } ) => {
	const {
		tagName,
		textAligns,
		color,
		links,
		font,
		fontSize,
		lineHeight,
		fontWeight,
		decoration,
		transform,
		fontStyle,
		letterSpacing,
		textShadow,
		paddingss,
		paddingsss,
		boxShadow,
		borderTests,
		iconTest,
	} = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'gridhub' ) } initialOpen={ true }>
					<SelectControl
						label={ __( 'HTML Tag', 'gridhub' ) }
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
					<GridHubTextAlign
						values={ textAligns }
						onChange={ ( value ) => setAttributes( { textAligns: value } ) }
					/>
					<GridHubColorPicker
						label={ __( 'Color', 'gridhub' ) }
						value={ color }
						alpha={ true }
						onChange={ ( value ) => setAttributes( { color: value } ) }
					/>
					<GridHubLinkControl
						values={ links }
						onChange={ ( value ) => setAttributes( { links: value } ) }
					/>
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
					<GridHubTextShadow
						label={ __( 'Text Shadow', 'gridhub' ) }
						value={ textShadow }
						onChange={ ( value ) => setAttributes( { textShadow: value } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Icon', 'gridhub' ) } initialOpen={ false }>
					<GridHubIconSelect
						label={ 'Icon' }
						values={ iconTest }
						onChange={ ( value ) => setAttributes( { iconTest: value } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Spacing', 'gridhub' ) } initialOpen={ false }>
					<GridHubBoxControl
						label={ 'Padding' }
						values={ paddingss }
						onChange={ ( value ) => setAttributes( { paddingss: value } ) }
					/>
					<GridHubBoxControl
						label={ 'Margin' }
						values={ paddingsss }
						onChange={ ( value ) => setAttributes( { paddingsss: value } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Border', 'gridhub' ) } initialOpen={ false }>
					<GridHubBoxShadow
						label={ __( 'Box Shadow', 'gridhub' ) }
						value={ boxShadow }
						onChange={ ( value ) => setAttributes( { boxShadow: value } ) }
					/>
					<GridHubBorder
						label={ 'Border' }
						values={ borderTests }
						onChange={ ( value ) => setAttributes( { borderTests: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
};
export default Inspector;

