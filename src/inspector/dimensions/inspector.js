import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Flex, FlexItem } from '@wordpress/components';
import GridFlowSelect from '../../components/select';
import GridFlowTextUnit from '../../components/text';

import { useSelect } from '@wordpress/data';

const Inspector = ( { attributes, setAttributes } ) => {
	const {
		gridflowWidth,
		gridflowCustomWidth,
		gridflowMinWidth,
		gridflowMaxWidth,
	} = attributes;

	const getPreviewDeviceType = useSelect( ( select ) => {
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' );

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : false;
	}, [] );

	const deviceType = getPreviewDeviceType.toLowerCase() || 'desktop';

	return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Dimensions', 'gridflow' ) } initialOpen={ false }>
				<GridFlowSelect
					label={ __( 'Width', 'gridflow' ) }
					values={ gridflowWidth }
					onChange={ ( value ) => setAttributes( { gridflowWidth: value } ) }
					options={ [
						{ label: 'Default', value: '' },
						{ label: 'Full width', value: 'full' },
						{ label: 'Inline', value: 'inline' },
						{ label: 'Custom', value: 'custom' },
					] }
				/>
				{ gridflowWidth?.[ deviceType ] === 'custom' && (
					<GridFlowTextUnit
						label={ __( 'Custom Width', 'gridflow' ) }
						values={ gridflowCustomWidth }
						onChange={ ( value ) => setAttributes( { gridflowCustomWidth: value } ) }
					/>
				) }
				<Flex>
					<FlexItem>
						<GridFlowTextUnit
							label={ __( 'Min Width', 'gridflow' ) }
							values={ gridflowMinWidth }
							onChange={ ( value ) => setAttributes( { gridflowMinWidth: value } ) }
						/>
					</FlexItem>
					<FlexItem>
						<GridFlowTextUnit
							label={ __( 'Max Width', 'gridflow' ) }
							values={ gridflowMaxWidth }
							onChange={ ( value ) => setAttributes( { gridflowMaxWidth: value } ) }
						/>
					</FlexItem>
				</Flex>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
