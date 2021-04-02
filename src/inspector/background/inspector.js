import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

import GridFlowBackground from '../../components/background';

const Inspector = ( { attributes, setAttributes } ) => {
	const { gridflowBackground } = attributes;

	return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Background', 'gridflow' ) } initialOpen={ false }>
				<GridFlowBackground
					values={ gridflowBackground }
					onChange={ ( value ) => setAttributes( { gridflowBackground: value } ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
