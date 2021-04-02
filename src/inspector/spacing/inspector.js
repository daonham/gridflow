import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import GridFlowBoxControl from '../../components/box';

const Inspector = ( { attributes, setAttributes } ) => {
	const { gridflowMargin, gridflowPadding } = attributes;

	return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Spacing', 'gridflow' ) } initialOpen={ false }>
				<GridFlowBoxControl
					label={ __( 'Margin', 'gridflow' ) }
					values={ gridflowMargin }
					onChange={ ( value ) => setAttributes( { gridflowMargin: value } ) }
					inputProps={ { min: undefined } }
				/>
				<GridFlowBoxControl
					label={ __( 'Padding', 'gridflow' ) }
					values={ gridflowPadding }
					onChange={ ( value ) => setAttributes( { gridflowPadding: value } ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
