import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	Flex,
	FlexItem,
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';

import GridHubColorPicker from '../../components/color';
import GridHubTextShadow from '../../components/text-shadow';
import GridHubIconSelect from '../../components/icon';

const {
	GridHubTyphography,
	GridHubBackground,
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
		icon,
		iconPosition,
		iconSpacing,
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
						values={ icon }
						onChange={ ( value ) => setAttributes( { icon: value } ) }
					/>
					<Flex gap={ 8 } justify={ 'flex-start' } align={ 'flex-start' }>
						<FlexItem>
							<SelectControl
								label={ __( 'Icon Position', 'gridhub' ) }
								value={ iconPosition }
								options={ [
									{ label: 'Left', value: 'left' },
									{ label: 'Right', value: 'right' },
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
				</PanelBody>
			</InspectorControls>
		</>
	);
};
export default Inspector;

