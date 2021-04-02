import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

import GridFlowBoxControl from '../../components/box';
import GridFlowBorder from '../../components/border';
import GridFlowBoxShadow from '../../components/box-shadow';

const Inspector = ( { attributes, setAttributes } ) => {
	const { gridflowBorder, gridflowBorderRadius, gridflowBoxShadow } = attributes;

	return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Border', 'gridflow' ) } initialOpen={ false }>
				<GridFlowBorder
					label={ __( 'Border', 'gridflow' ) }
					values={ gridflowBorder }
					device={ true }
					onChange={ ( value ) => setAttributes( { gridflowBorder: value } ) }
				/>
				<GridFlowBoxControl
					label={ __( 'Border Radius', 'gridflow' ) }
					values={ gridflowBorderRadius }
					onChange={ ( value ) =>
						setAttributes( { gridflowBorderRadius: value } )
					}
				/>
				<GridFlowBoxShadow
					label={ __( 'Box Shadow', 'gridflow' ) }
					value={ gridflowBoxShadow }
					onChange={ ( value ) =>
						setAttributes( { gridflowBoxShadow: value } )
					}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
