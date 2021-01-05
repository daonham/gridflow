import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

import Typhography from '../../components/typopgraphy';

const Inspector = ( { attributes, setAttributes } ) => {
	const { font, fontSize } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Text', 'gridhub' ) } initialOpen={ false }>
					<Typhography
						font={ font }
						onChangeFont={ ( value ) => setAttributes( { font: value } ) }
						fontSize={ fontSize }
						onChangeFontSize={ ( value ) => setAttributes( { fontSize: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
};
export default Inspector;

