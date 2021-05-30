import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Flex, FlexItem } from '@wordpress/components';
import GridFlowSelect from '../../components/select';
import GridFlowRangeControl from '../../components/range';
import GridFlowTextUnit from '../../components/text';

import { useSelect } from '@wordpress/data';

const Inspector = ( { attributes, setAttributes } ) => {
	const {
		gridflowZindex,
		gridflowPosition,
		gridflowPositionHorizontal,
		gridflowPositionHorizontalOffset,
		gridflowPositionVertical,
		gridflowPositionVerticalOffset,
	} = attributes;

	const getPreviewDeviceType = useSelect( ( select ) => {
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' );

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : false;
	}, [] );

	const deviceType = getPreviewDeviceType.toLowerCase() || 'desktop';

	return (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Positioning', 'gridflow' ) } initialOpen={ false }>
				<GridFlowRangeControl
					label={ __( 'Z Index', 'gridflow' ) }
					values={ gridflowZindex }
					onChange={ ( value ) => setAttributes( { gridflowZindex: value } ) }
					min={ 0 }
					max={ 1000 }
					allowReset={ true }
				/>
				<GridFlowSelect
					label={ __( 'Position', 'gridflow' ) }
					values={ gridflowPosition }
					onChange={ ( value ) => setAttributes( { gridflowPosition: value } ) }
					options={ [
						{ label: 'Default', value: '' },
						{ label: 'Relative', value: 'relative' },
						{ label: 'Absolute', value: 'absolute' },
						{ label: 'Fixed', value: 'fixed' },
						{ label: 'Sticky', value: 'sticky' },
					] }
				/>
				{ gridflowPosition?.[ deviceType ] && (
					<>
						<Flex>
							<FlexItem>
								<GridFlowSelect
									label={ __( 'X Orientation', 'gridflow' ) }
									values={ gridflowPositionHorizontal }
									onChange={ ( value ) => setAttributes( { gridflowPositionHorizontal: value } ) }
									options={ [
										{ label: 'Left', value: 'left' },
										{ label: 'Right', value: 'right' },
									] }
								/>
							</FlexItem>

							<FlexItem>
								<GridFlowSelect
									label={ __( 'Y Orientation', 'gridflow' ) }
									values={ gridflowPositionVertical }
									onChange={ ( value ) => setAttributes( { gridflowPositionVertical: value } ) }
									options={ [
										{ label: 'Top', value: 'top' },
										{ label: 'Bottom', value: 'bottom' },
									] }
								/>
							</FlexItem>

						</Flex>
						<Flex>
							<FlexItem>
								<GridFlowTextUnit
									label={ __( 'X Offset', 'gridflow' ) }
									values={ gridflowPositionHorizontalOffset }
									onChange={ ( value ) => setAttributes( { gridflowPositionHorizontalOffset: value } ) }
								/>
							</FlexItem>

							<FlexItem>
								<GridFlowTextUnit
									label={ __( 'Y Offset', 'gridflow' ) }
									values={ gridflowPositionVerticalOffset }
									onChange={ ( value ) => setAttributes( { gridflowPositionVerticalOffset: value } ) }
								/>
							</FlexItem>

						</Flex>
					</>
				) }
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
