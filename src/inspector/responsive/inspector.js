import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';

const Inspector = ( { attributes, setAttributes } ) => {
	const { gridhubHideDesktop, gridhubHideTablet, gridhubHideMobile } = attributes;

	return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Responsive', 'gridhub' ) } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Hide in Desktop', 'gridhub' ) }
					checked={ gridhubHideDesktop }
					onChange={ () => setAttributes( { gridhubHideDesktop: ! gridhubHideDesktop } ) }
				/>
				<ToggleControl
					label={ __( 'Hide in Tablet', 'gridhub' ) }
					checked={ gridhubHideTablet }
					onChange={ () => setAttributes( { gridhubHideTablet: ! gridhubHideTablet } ) }
				/>
				<ToggleControl
					label={ __( 'Hide in Mobile', 'gridhub' ) }
					checked={ gridhubHideMobile }
					onChange={ () => setAttributes( { gridhubHideMobile: ! gridhubHideMobile } ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
