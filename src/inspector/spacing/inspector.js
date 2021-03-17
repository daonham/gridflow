import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import GridHubBoxControl from '../../components/box';

const Inspector = ( { attributes, setAttributes } ) => {
	const { margin, padding } = attributes;

	return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Spacing', 'gridhub' ) } initialOpen={ false }>
				<GridHubBoxControl
					label={ __( 'Margin', 'gridhub' ) }
					values={ margin }
					onChange={ ( value ) => setAttributes( { margin: value } ) }
				/>
				<GridHubBoxControl
					label={ __( 'Padding', 'gridhub' ) }
					values={ padding }
					onChange={ ( value ) => setAttributes( { padding: value } ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
