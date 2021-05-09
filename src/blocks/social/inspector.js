import { __ } from '@wordpress/i18n';
import { InspectorControls, store as blockEditorStore } from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

import {
	PanelBody,
	SelectControl,
	RangeControl,
	TabPanel,
} from '@wordpress/components';

const {
	GridFlowBoxControl,
	GridFlowBorder,
	GridFlowBoxShadow,
	GridFlowTextAlign,
	GridFlowColorPicker,
	GridFlowRangeControl,
} = wp.gridflowComponents;

const Inspector = ( { attributes, setAttributes, clientId } ) => {
	const {
		columns,
		textAligns,
		spacing,
		rowGap,

		fontSize,
		width,
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

	const innerBlockClientIds = useSelect( ( select ) => {
		const { getBlockOrder } = select( blockEditorStore );

		return getBlockOrder( clientId );
	}, [ clientId ] );

	const { updateBlockAttributes } = useDispatch( blockEditorStore );

	useEffect( () => {
		innerBlockClientIds.forEach( ( innerBlockClientId ) => {
			updateBlockAttributes( innerBlockClientId, {
				fontSize, width, color, bgColor, border, borderRadius, boxShadow, colorHover, bgColorHover, transition, hoverEffect, borderHover, borderRadiusHover,
			} );
		} );
	}, [ fontSize, width, color, bgColor, border, borderRadius, boxShadow, colorHover, bgColorHover, transition, hoverEffect, borderHover, borderRadiusHover, clientId, innerBlockClientIds ] );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'gridflow' ) } initialOpen={ true }>
					<GridFlowRangeControl
						label={ __( 'Columns', 'gridflow' ) }
						values={ columns }
						onChange={ ( value ) => setAttributes( { columns: value } ) }
						min={ 1 }
						max={ 10 }
						step={ 1 }
						marks={ [
							{ value: 1, label: '1' },
							{ value: 2, label: '2' },
							{ value: 3, label: '3' },
							{ value: 4, label: '4' },
							{ value: 5, label: '5' },
							{ value: 6, label: '6' },
							{ value: 10, label: '10' },
						] }
					/>
					<GridFlowRangeControl
						label={ __( 'Spacing', 'gridflow' ) }
						values={ spacing }
						onChange={ ( value ) => setAttributes( { spacing: value } ) }
						min={ 0 }
						max={ 200 }
					/>
					<GridFlowRangeControl
						label={ __( 'Row Gap', 'gridflow' ) }
						values={ rowGap }
						onChange={ ( value ) => setAttributes( { rowGap: value } ) }
						min={ 0 }
						max={ 200 }
					/>
					<GridFlowTextAlign
						label={ __( 'Alignment', 'gridflow' ) }
						values={ textAligns }
						onChange={ ( value ) => setAttributes( { textAligns: value } ) }
					/>
				</PanelBody>

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
											label={ __( 'Width & Height', 'gridflow' ) }
											values={ width }
											onChange={ ( value ) => setAttributes( { width: value } ) }
											min={ 5 }
											max={ 500 }
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
			</InspectorControls>
		</>
	);
};
export default Inspector;
