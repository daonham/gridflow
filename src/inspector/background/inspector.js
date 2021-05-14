import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TabPanel } from '@wordpress/components';

import GridFlowBackground from '../../components/background';

const Inspector = ( { attributes, setAttributes } ) => {
	const { gridflowBackground, gridflowBackgroundHover } = attributes;

	return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Background', 'gridflow' ) } initialOpen={ false }>
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
									<GridFlowBackground
										values={ gridflowBackground }
										onChange={ ( value ) => setAttributes( { gridflowBackground: value } ) }
									/>
								</>
							);
						}

						if ( tab.name === 'hover' ) {
							return (
								<>
									<div style={ { marginTop: 10 } } />
									<GridFlowBackground
										values={ gridflowBackgroundHover }
										onChange={ ( value ) => setAttributes( { gridflowBackgroundHover: value } ) }
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
