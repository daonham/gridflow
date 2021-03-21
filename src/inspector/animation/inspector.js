import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, Flex, FlexItem } from '@wordpress/components';

import GridHubSelect from '../../components/select';

const Inspector = ( { attributes, setAttributes } ) => {
	const { gridhubAnimation, gridhubSpeed, gridhubDelay } = attributes;

	return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Animation', 'gridhub' ) } initialOpen={ false }>
				<GridHubSelect
					label={ __( 'Animation', 'gridhub' ) }
					values={ gridhubAnimation }
					onChange={ ( value ) => setAttributes( { gridhubAnimation: value } ) }
					options={ [
						{ label: 'None', value: '' },
						{ label: 'Fade In', value: 'fadeIn' },
						{ label: 'Fade In Down', value: 'fadeInDown' },
						{ label: 'Fade In Left', value: 'fadeInLeft' },
						{ label: 'Fade In Right', value: 'fadeInRight' },
						{ label: 'Fade In Up', value: 'fadeInUp' },
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
							label={ __( 'Speed', 'gridhub' ) }
							value={ gridhubSpeed }
							options={ [
								{ label: __( 'Default' ), value: '' },
								{ label: __( 'Slow' ), value: 'slow' },
								{ label: __( 'Slower' ), value: 'slower' },
								{ label: __( 'Fast' ), value: 'fast' },
								{ label: __( 'Faster' ), value: 'faster' },
							] }
							onChange={ ( value ) => setAttributes( { gridhubSpeed: value } ) }
							style={ { width: '100%' } }
						/>
					</FlexItem>
					<FlexItem style={ { width: '50%' } }>
						<SelectControl
							label={ __( 'Delay', 'gridhub' ) }
							value={ gridhubDelay }
							options={ [
								{ label: __( 'Default' ), value: '' },
								{ label: __( '1s' ), value: '1s' },
								{ label: __( '2s' ), value: '2s' },
								{ label: __( '3s' ), value: '3s' },
								{ label: __( '4s' ), value: '4s' },
								{ label: __( '5s' ), value: '5s' },
							] }
							onChange={ ( value ) => setAttributes( { gridhubDelay: value } ) }
							style={ { width: '100%' } }
						/>
					</FlexItem>
				</Flex>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
