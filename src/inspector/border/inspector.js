import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

import GridHubBoxControl from '../../components/box';
import GridHubBorder from '../../components/border';
import GridHubBoxShadow from '../../components/box-shadow';

const Inspector = ( { attributes, setAttributes } ) => {
	const { gridhubBorder, gridhubBorderRadius, gridhubBoxShadow } = attributes;

	return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Border', 'gridhub' ) } initialOpen={ false }>
				<GridHubBorder
					label={ __( 'Border', 'gridhub' ) }
					values={ gridhubBorder }
					device={ true }
					onChange={ ( value ) => setAttributes( { gridhubBorder: value } ) }
				/>
				<GridHubBoxControl
					label={ __( 'Border Radius', 'gridhub' ) }
					values={ gridhubBorderRadius }
					onChange={ ( value ) => setAttributes( { gridhubBorderRadius: value } ) }
				/>
				<GridHubBoxShadow
					label={ __( 'Box Shadow', 'gridhub' ) }
					value={ gridhubBoxShadow }
					onChange={ ( value ) => setAttributes( { gridhubBoxShadow: value } ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
