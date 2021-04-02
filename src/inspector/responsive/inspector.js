import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';

const Inspector = ( { attributes, setAttributes } ) => {
	const { gridflowHideDesktop, gridflowHideTablet, gridflowHideMobile } = attributes;

	return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Responsive', 'gridflow' ) } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Hide in Desktop', 'gridflow' ) }
					checked={ gridflowHideDesktop }
					onChange={ () => setAttributes( { gridflowHideDesktop: ! gridflowHideDesktop } ) }
				/>
				<ToggleControl
					label={ __( 'Hide in Tablet', 'gridflow' ) }
					checked={ gridflowHideTablet }
					onChange={ () => setAttributes( { gridflowHideTablet: ! gridflowHideTablet } ) }
				/>
				<ToggleControl
					label={ __( 'Hide in Mobile', 'gridflow' ) }
					checked={ gridflowHideMobile }
					onChange={ () => setAttributes( { gridflowHideMobile: ! gridflowHideMobile } ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
