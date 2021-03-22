import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

import GridHubBackground from '../../components/background';

const Inspector = ( { attributes, setAttributes } ) => {
	const { gridhubBackground } = attributes;

	return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Background', 'gridhub' ) } initialOpen={ false }>
				<GridHubBackground
					values={ gridhubBackground }
					onChange={ ( value ) => setAttributes( { gridhubBackground: value } ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
