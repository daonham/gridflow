import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TabPanel } from '@wordpress/components';

import GridFlowBoxControl from '../../components/box';
import GridFlowBorder from '../../components/border';
import GridFlowBoxShadow from '../../components/box-shadow';

const Inspector = ( { attributes, setAttributes } ) => {
	const { gridflowBorder, gridflowBorderRadius, gridflowBoxShadow, gridflowBorderHover, gridflowBorderRadiusHover, gridflowBoxShadowHover } = attributes;

	return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Border', 'gridflow' ) } initialOpen={ false }>
				<TabPanel
					tabs={ [
						{ name: 'normal', title: __( 'Normal', 'gridflow' ) },
						{ name: 'hover', title: __( 'Hover', 'gridflow' ) },
					] }
				>

					{ ( tab ) => {
						if ( tab.name === 'normal' ) {
							return (
								<>
									<div style={ { marginTop: 10 } } />
									<GridFlowBorder
										label={ __( 'Border', 'gridflow' ) }
										values={ gridflowBorder }
										device={ true }
										onChange={ ( value ) => setAttributes( { gridflowBorder: value } ) }
									/>
									<GridFlowBoxControl
										label={ __( 'Border Radius', 'gridflow' ) }
										values={ gridflowBorderRadius }
										onChange={ ( value ) => setAttributes( { gridflowBorderRadius: value } ) }
									/>
									<GridFlowBoxShadow
										label={ __( 'Box Shadow', 'gridflow' ) }
										value={ gridflowBoxShadow }
										onChange={ ( value ) => setAttributes( { gridflowBoxShadow: value } ) }
									/>
								</>
							);
						}

						if ( tab.name === 'hover' ) {
							return (
								<>
									<div style={ { marginTop: 10 } } />
									<GridFlowBorder
										label={ __( 'Border', 'gridflow' ) }
										values={ gridflowBorderHover }
										device={ true }
										onChange={ ( value ) => setAttributes( { gridflowBorderHover: value } ) }
									/>
									<GridFlowBoxControl
										label={ __( 'Border Radius', 'gridflow' ) }
										values={ gridflowBorderRadiusHover }
										onChange={ ( value ) => setAttributes( { gridflowBorderRadiusHover: value } ) }
									/>
									<GridFlowBoxShadow
										label={ __( 'Box Shadow', 'gridflow' ) }
										value={ gridflowBoxShadowHover }
										onChange={ ( value ) => setAttributes( { gridflowBoxShadowHover: value } ) }
									/>
								</>
							);
						}
					} }
				</TabPanel>

			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
