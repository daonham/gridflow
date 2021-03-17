import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

import GridHubBoxControl from '../../components/box';
import GridHubBorder from '../../components/border';
import GridHubBoxShadow from '../../components/box-shadow';

const Inspector = ( { attributes, setAttributes } ) => {
	const { border, borderRadius, boxShadow } = attributes;

	return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Border', 'gridhub' ) } initialOpen={ false }>
				<GridHubBorder
					label={ 'Border' }
					values={ border }
					device={ true }
					onChange={ ( value ) => setAttributes( { border: value } ) }
				/>
				<GridHubBoxControl
					label={ 'Border Radius' }
					values={ borderRadius }
					onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
				/>
				<GridHubBoxShadow
					label={ __( 'Box Shadow', 'gridhub' ) }
					value={ boxShadow }
					onChange={ ( value ) => setAttributes( { boxShadow: value } ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
