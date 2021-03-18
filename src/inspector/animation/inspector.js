import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, Flex, FlexItem } from '@wordpress/components';

import GridHubSelect from '../../components/select';

const Inspector = ( { attributes, setAttributes } ) => {
	const { gridhubAnimation, gridhubDuration, gridhubDelay } = attributes;

	return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Animation', 'gridhub' ) } initialOpen={ false }>
				<GridHubSelect
					label={ __( 'Animation', 'gridhub' ) }
					values={ gridhubAnimation }
					onChange={ ( value ) => setAttributes( { gridhubAnimation: value } ) }
					options={ [
						{ label: 'None', value: '' },
						{ label: 'Fade In', value: 'gridHubFadeIn' },
						{ label: 'Fade In Down', value: 'gridhubFadeInDown' },
						{ label: 'Fade In Left', value: 'gridhubFadeInLeft' },
						{ label: 'Fade In Right', value: 'gridhubFadeInRight' },
						{ label: 'Fade In Up', value: 'gridhubFadeInUp' },
						{ label: 'bounce In', value: 'bounceIn' },
						{ label: 'bounce In Down', value: 'bounceInDown' },
						{ label: 'bounce In Left', value: 'bounceInLeft' },
						{ label: 'bounce In Right', value: 'bounceInRight' },
						{ label: 'zoomIn', value: 'zoomIn' },
						{ label: 'zoom In Down', value: 'zoomInDown' },
						{ label: 'zoom In Left', value: 'zoomInLeft' },
						{ label: 'zoom In Right', value: 'zoomInRight' },
						{ label: 'zoom In Up', value: 'zoomInUp' },
						{ label: 'slide In Down', value: 'slideInDown' },
						{ label: 'slide In Left', value: 'slideInLeft' },
						{ label: 'slide In Right', value: 'slideInRight' },
						{ label: 'slide In Up', value: 'slideInUp' },
						{ label: 'rotate In', value: 'rotateIn' },
						{ label: 'rotate In Down Left', value: 'rotateInDownLeft' },
						{ label: 'rotate In Down Right', value: 'rotateInDownRight' },
						{ label: 'rotate In Up Left', value: 'rotateInUpLeft' },
						{ label: 'rotate In Up Right', value: 'rotateInUpRight' },
					] }
				/>
				<Flex>
					<FlexItem style={ { width: '50%' } }>
						<SelectControl
							label={ __( 'Duration', 'gridhub' ) }
							value={ gridhubDuration }
							options={ [
								{ label: __( 'Default' ), value: '' },
								{ label: __( 'Slow' ), value: '3' },
								{ label: __( 'Slower' ), value: '3.5' },
								{ label: __( 'Fast' ), value: '1' },
								{ label: __( 'Faster' ), value: '0.5' },
							] }
							onChange={ ( value ) => setAttributes( { gridhubDuration: value } ) }
							style={ { width: '100%' } }
						/>
					</FlexItem>
					<FlexItem>
						<TextControl
							label={ __( 'Delay (ms)', 'gridhub' ) }
							type="number"
							min={ 0 }
							value={ gridhubDelay }
							placeholder={ 200 }
							onChange={ ( value ) => setAttributes( { gridhubDelay: value } ) }
						/>
					</FlexItem>
				</Flex>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
