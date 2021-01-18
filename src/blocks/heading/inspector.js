import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, __experimentalBoxControl as BoxControl } from '@wordpress/components';

import Typhography from '../../components/typopgraphy';

import GridHubColorPicker from '../../components/color';
import GridHubTextShadow from '../../components/text-shadow';
import GridHubBoxControl from '../../components/box';
import GridHubBoxShadow from '../../components/box-shadow';
import GridHubBorder from '../../components/border';
import GridHubIconSelect from '../../components/icon';

const Inspector = ( { attributes, setAttributes } ) => {
	const {
		font,
		fontSizes,
		lineHeight,
		fontWeights,
		transform,
		color,
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
				<PanelBody title={ __( 'Text', 'gridhub' ) } initialOpen={ false }>
					<GridHubColorPicker
						label={ __( 'Color', 'gridhub' ) }
						value={ color }
						alpha={ true }
						onChange={ ( value ) => setAttributes( { color: value } ) }
					/>
					<Typhography
						font={ font }
						onChangeFont={ ( value ) => setAttributes( { font: value } ) }
						fontSize={ fontSizes }
						onChangeFontSize={ ( value ) => setAttributes( { fontSizes: value } ) }
						lineHeight={ lineHeight }
						onChangeLineHeight={ ( value ) => setAttributes( { lineHeight: value } ) }
						fontWeight={ fontWeights }
						onChangeFontWeight={ ( value ) => setAttributes( { fontWeights: value } ) }
						transform={ transform }
						onChangeTransform={ ( value ) => setAttributes( { transform: value } ) }
					/>
					<GridHubTextShadow
						label={ __( 'Text Shadow', 'gridhub' ) }
						value={ textShadow }
						onChange={ ( value ) => setAttributes( { textShadow: value } ) }
					/>

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

