import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

import Typhography from '../../components/typopgraphy';

const Inspector = ( { attributes, setAttributes } ) => {
	const { font, fontSizes, lineHeight, fontWeights } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Text', 'gridhub' ) } initialOpen={ false }>
					<Typhography
						font={ font }
						onChangeFont={ ( value ) => setAttributes( { font: value } ) }
						fontSize={ fontSizes }
						onChangeFontSize={ ( value ) => setAttributes( { fontSizes: value } ) }
						lineHeight={ lineHeight }
						onChangeLineHeight={ ( value ) => setAttributes( { lineHeight: value } ) }
						fontWeight={ fontWeights }
						onChangeFontWeight={ ( value ) => setAttributes( { fontWeights: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
};
export default Inspector;

