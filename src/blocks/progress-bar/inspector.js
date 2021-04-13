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
	TabPanel,
} from '@wordpress/components';

const {
	GridFlowBoxControl,
	GridFlowBorder,
	GridFlowBoxShadow,
	GridFlowTextAlign,
	GridFlowTextUnit,
	GridFlowColorPicker,
	GridFlowLinkControl,
	GridFlowIconSelect,
} = wp.gridflowComponents;

const Inspector = ( { attributes, setAttributes } ) => {
	const {
		percent,
		showValue,
		suffix,
	} = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'gridflow' ) } initialOpen={ true }>
					<RangeControl
						label={ __( 'Percent', 'gridflow' ) }
						value={ percent }
						onChange={ ( value ) => setAttributes( { percent: value } ) }
						min={ 0 }
						max={ 100 }
						step={ 1 }
					/>
					<ToggleControl
						label={ __( 'Show percent value', 'gridflow' ) }
						checked={ showValue }
						onChange={ () => setAttributes( { showValue: ! showValue } ) }
					/>
					<TextControl
						label={ __( 'Suffix', 'gridflow' ) }
						value={ suffix }
						onChange={ ( value ) => setAttributes( { suffix: value } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Icon', 'gridflow' ) } initialOpen={ false }>
				</PanelBody>
			</InspectorControls>
		</>
	);
};
export default Inspector;
