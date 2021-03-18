import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';

const Inspector = ( { attributes, setAttributes } ) => {
	const { hideDesktop, hideTablet, hideMobile } = attributes;

	return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Responsive', 'gridhub' ) } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Hide in Desktop', 'gridhub' ) }
					checked={ hideDesktop }
					onChange={ () => setAttributes( { hideDesktop: ! hideDesktop } ) }
				/>
				<ToggleControl
					label={ __( 'Hide in Tablet', 'gridhub' ) }
					checked={ hideTablet }
					onChange={ () => setAttributes( { hideTablet: ! hideTablet } ) }
				/>
				<ToggleControl
					label={ __( 'Hide in Mobile', 'gridhub' ) }
					checked={ hideMobile }
					onChange={ () => setAttributes( { hideMobile: ! hideMobile } ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
