import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import GridHubBoxControl from '../../components/box';

const Inspector = ( { attributes, setAttributes } ) => {
	const { gridhubMargin, gridhubPadding } = attributes;

	return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Spacing', 'gridhub' ) } initialOpen={ false }>
				<GridHubBoxControl
					label={ __( 'Margin', 'gridhub' ) }
					values={ gridhubMargin }
					onChange={ ( value ) => setAttributes( { gridhubMargin: value } ) }
					inputProps={ { min: undefined } }
				/>
				<GridHubBoxControl
					label={ __( 'Padding', 'gridhub' ) }
					values={ gridhubPadding }
					onChange={ ( value ) => setAttributes( { gridhubPadding: value } ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
