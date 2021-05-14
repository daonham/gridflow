import { __ } from '@wordpress/i18n';
import { InspectorControls, store as blockEditorStore } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import {
	PanelBody,
	SelectControl,
	RangeControl,
	TabPanel,
	Tip,
	Button,
} from '@wordpress/components';

const {
	GridFlowBoxControl,
	GridFlowBorder,
	GridFlowBoxShadow,
	GridFlowTextAlign,
	GridFlowColorPicker,
	GridFlowLinkControl,
	GridFlowIconSelect,
	GridFlowRangeControl,
	GridFlowDivider,
} = wp.gridflowComponents;

const Inspector = ( { attributes, setAttributes } ) => {
	const {
		icon,
		links,
		textAligns,
		fontSize,
		padding,
		color,
		bgColor,
		border,
		borderRadius,
		boxShadow,

		colorHover,
		bgColorHover,
		transition,
		hoverEffect,
		borderHover,
		borderRadiusHover,
		boxShadowHover,
	} = attributes;

	const { selectBlock } = useDispatch(
		blockEditorStore
	);

	const { firstParentClientId, parentBlockName } = useSelect(
		( select ) => {
			const { getBlockParents, getSelectedBlockClientId, getBlockName } = select( blockEditorStore );

			const selectedBlockClientId = getSelectedBlockClientId();
			const parents = getBlockParents( selectedBlockClientId );
			const _firstParentClientId = parents[ parents.length - 1 ];

			return {
				firstParentClientId: _firstParentClientId,
				parentBlockName: getBlockName( _firstParentClientId ),
			};
		},
		[]
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'gridflow' ) } initialOpen={ true }>
					<GridFlowIconSelect
						label={ 'Icon' }
						values={ icon }
						onChange={ ( value ) => setAttributes( { icon: value } ) }
					/>
					<GridFlowLinkControl
						values={ links }
						onChange={ ( value ) => setAttributes( { links: value } ) }
					/>
					<GridFlowTextAlign
						label={ __( 'Alignment', 'gridflow' ) }
						values={ textAligns }
						onChange={ ( value ) => setAttributes( { textAligns: value } ) }
					/>

					{ firstParentClientId && parentBlockName === 'gridflow/social' && (
						<>
							<GridFlowDivider />
							<Tip>
								{ __( 'You can configuration style Icon in ', 'gridflow' ) }
								<Button
									isLink
									onClick={ () => selectBlock( firstParentClientId ) }
								>
									{ __( 'Social Icons', 'gridflow' ) }
								</Button>
							</Tip>
						</>
					) }
				</PanelBody>

				{ ( ! firstParentClientId || ! parentBlockName === 'gridflow/social' ) && (
					<PanelBody title={ __( 'Icon', 'gridflow' ) } initialOpen={ false }>
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

											<GridFlowRangeControl
												label={ __( 'Icon Size', 'gridflow' ) }
												values={ fontSize }
												onChange={ ( value ) => setAttributes( { fontSize: value } ) }
												min={ 2 }
												max={ 300 }
											/>
											<GridFlowRangeControl
												label={ __( 'Padding', 'gridflow' ) }
												values={ padding }
												onChange={ ( value ) => setAttributes( { padding: value } ) }
												min={ 0 }
												max={ 300 }
											/>

											<GridFlowColorPicker
												label={ __( 'Color', 'gridflow' ) }
												value={ color }
												onChange={ ( value ) => setAttributes( { color: value } ) }
											/>
											<GridFlowColorPicker
												label={ __( 'Background Color', 'gridflow' ) }
												value={ bgColor }
												alpha={ true }
												gradients={ true }
												onChange={ ( value ) => setAttributes( { bgColor: value } ) }
											/>
											<GridFlowBorder
												label={ __( 'Border', 'gridflow' ) }
												values={ border }
												device={ true }
												onChange={ ( value ) => setAttributes( { border: value } ) }
											/>
											<GridFlowBoxControl
												label={ __( 'Border Radius', 'gridflow' ) }
												values={ borderRadius }
												onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
											/>
											<GridFlowBoxShadow
												label={ __( 'Box Shadow', 'gridflow' ) }
												value={ boxShadow }
												onChange={ ( value ) => setAttributes( { boxShadow: value } ) }
											/>
										</>
									);
								}

								if ( tab.name === 'hover' ) {
									return (
										<>
											<GridFlowColorPicker
												label={ __( 'Color', 'gridflow' ) }
												value={ colorHover }
												onChange={ ( value ) => setAttributes( { colorHover: value } ) }
											/>
											<GridFlowColorPicker
												label={ __( 'Background Color', 'gridflow' ) }
												value={ bgColorHover }
												alpha={ true }
												gradients={ true }
												onChange={ ( value ) => setAttributes( { bgColorHover: value } ) }
											/>
											<RangeControl
												label={ __( 'Transition Duration', 'gridflow' ) }
												value={ transition }
												onChange={ ( value ) => setAttributes( { transition: value } ) }
												min={ 0 }
												max={ 3 }
												step={ 0.1 }
											/>
											<SelectControl
												label={ __( 'Hover Effect', 'gridflow' ) }
												value={ hoverEffect }
												onChange={ ( value ) => setAttributes( { hoverEffect: value } ) }
												options={ [
													{ label: __( 'None', 'gridflow' ), value: '' },
													{ label: 'bounce', value: 'bounce' },
													{ label: 'bounceIn', value: 'bounceIn' },
													{ label: 'flash', value: 'flash' },
													{ label: 'pulse', value: 'pulse' },
													{ label: 'rubberBand', value: 'rubberBand' },
													{ label: 'shakeX', value: 'shakeX' },
													{ label: 'shakeY', value: 'shakeY' },
													{ label: 'headShake', value: 'headShake' },
													{ label: 'swing', value: 'swing' },
													{ label: 'tada', value: 'tada' },
													{ label: 'wobble', value: 'wobble' },
													{ label: 'jello', value: 'jello' },
													{ label: 'heartBeat', value: 'heartBeat' },
													{ label: 'fadeIn', value: 'fadeIn' },
													{ label: 'fadeOut', value: 'fadeOut' },
													{ label: 'flip', value: 'flip' },
												] }
											/>
											<GridFlowBorder
												label={ __( 'Border', 'gridflow' ) }
												values={ borderHover }
												device={ true }
												onChange={ ( value ) => setAttributes( { borderHover: value } ) }
											/>
											<GridFlowBoxControl
												label={ __( 'Border Radius', 'gridflow' ) }
												values={ borderRadiusHover }
												onChange={ ( value ) => setAttributes( { borderRadiusHover: value } ) }
											/>
											<GridFlowBoxShadow
												label={ __( 'Box Shadow', 'gridflow' ) }
												value={ boxShadowHover }
												onChange={ ( value ) => setAttributes( { boxShadowHover: value } ) }
											/>
										</>
									);
								}
							} }
						</TabPanel>
					</PanelBody>
				) }
			</InspectorControls>
		</>
	);
};
export default Inspector;
