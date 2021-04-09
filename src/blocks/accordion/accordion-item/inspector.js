import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Tip, ToggleControl } from '@wordpress/components';

const Inspector = ( { attributes, setAttributes } ) => {
	const { collapse } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'gridflow' ) } initialOpen={ true }>
					<ToggleControl
						label={ __( 'Collapse', 'gridflow' ) }
						help={ __( 'Default accordion item able to open', 'gridflow' ) }
						checked={ collapse }
						onChange={ () => setAttributes( { collapse: ! collapse } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Style', 'gridflow' ) } initialOpen={ true }>
					<Tip>{ __( 'You can configuration Styles in Accordion', 'gridflow' ) }</Tip>
				</PanelBody>
			</InspectorControls>
		</>
	);
};
export default Inspector;
