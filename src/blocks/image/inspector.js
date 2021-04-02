import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	Flex,
	FlexItem,
	RangeControl,
	TabPanel,
	TextareaControl,
	ToggleControl,
} from '@wordpress/components';

const {
	GridFlowTyphography,
	GridFlowBoxControl,
	GridFlowBorder,
	GridFlowBoxShadow,
	GridFlowTextAlign,
	GridFlowTextUnit,
	GridFlowColorPicker,
	GridFlowFocusPointPicker,
	GridFlowLinkControl,
	GridFlowSelect,
} = wp.gridflowComponents;

const Inspector = ( { attributes, setAttributes } ) => {
	const {
		url,
		alt,
		linkType,
		links,
		enableCaption,
		textAligns,
		width,
		height,
		objectFit,
		objectPosition,
		overlay,
		bgOverlay,
		border,
		borderRadius,
		boxShadow,

		overlayHover,
		bgOverlayHover,
		transition,
		hoverEffect,

		font,
		fontSize,
		lineHeight,
		fontWeight,
		decoration,
		transform,
		fontStyle,
		letterSpacing,
		captionTextAligns,
		captionSpacing,
	} = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'gridflow' ) } initialOpen={ true }>
					<TextareaControl
						label={ __( 'Alt text (alternative text)', 'gridflow' ) }
						value={ alt }
						onChange={ ( value ) => setAttributes( { alt: value } ) }
					/>
					<ToggleControl
						label={ __( 'Enable Caption', 'gridflow' ) }
						checked={ enableCaption }
						onChange={ () => setAttributes( { enableCaption: ! enableCaption } ) }
					/>
					<SelectControl
						label={ __( 'Link', 'gridflow' ) }
						value={ linkType }
						onChange={ ( value ) => setAttributes( { linkType: value } ) }
						options={ [
							{ label: __( 'None', 'gridflow' ), value: '' },
							{ label: __( 'Media File', 'gridflow' ), value: 'media' },
							{ label: __( 'Custom Link', 'gridflow' ), value: 'custom' },
						] }
					/>
					{ linkType === 'custom' && (
						<GridFlowLinkControl
							values={ links }
							onChange={ ( value ) => setAttributes( { links: value } ) }
						/>
					) }
					<GridFlowTextAlign
						label={ __( 'Alignment', 'gridflow' ) }
						values={ textAligns }
						onChange={ ( value ) => setAttributes( { textAligns: value } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Image', 'gridflow' ) } initialOpen={ false }>
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
										<Flex
											gap={ 8 }
											justify={ 'flex-start' }
											align={ 'flex-start' }
											style={ { marginTop: 10 } }
										>
											<FlexItem>
												<GridFlowTextUnit
													label={ __( 'Width', 'gridflow' ) }
													values={ width }
													onChange={ ( value ) => setAttributes( { width: value } ) }
												/>
											</FlexItem>

											<FlexItem>
												<GridFlowTextUnit
													label={ __( 'Height', 'gridflow' ) }
													values={ height }
													onChange={ ( value ) => setAttributes( { height: value } ) }
												/>
											</FlexItem>
										</Flex>
										<GridFlowSelect
											label={ __( 'Object Fit', 'gridflow' ) }
											values={ objectFit }
											onChange={ ( value ) => setAttributes( { objectFit: value } ) }
											options={ [
												{ label: __( 'Default', 'gridflow' ), value: '' },
												{ label: __( 'Contain', 'gridflow' ), value: 'contain' },
												{ label: __( 'Cover', 'gridflow' ), value: 'cover' },
												{ label: __( 'Scale down', 'gridflow' ), value: 'scale-down' },
												{ label: __( 'None', 'gridflow' ), value: 'none' },
											] }
										/>
										{ url && (
											<GridFlowFocusPointPicker
												label={ __( 'Object Position', 'gridflow' ) }
												url={ url }
												values={ objectPosition }
												onChange={ ( value ) =>
													setAttributes( {
														objectPosition: value,
													} )
												}
											/>
										) }
										<RangeControl
											label={ __( 'Overlay', 'gridflow' ) }
											value={ overlay }
											onChange={ ( value ) => setAttributes( { overlay: value } ) }
											min={ 0 }
											max={ 100 }
										/>
										<GridFlowColorPicker
											label={ __( 'Background Overlay', 'gridflow' ) }
											value={ bgOverlay }
											alpha={ false }
											gradients={ true }
											onChange={ ( value ) => setAttributes( { bgOverlay: value } ) }
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
										<RangeControl
											label={ __( 'Overlay', 'gridflow' ) }
											value={ overlayHover }
											onChange={ ( value ) => setAttributes( { overlayHover: value } ) }
											min={ 0 }
											max={ 100 }
										/>
										<GridFlowColorPicker
											label={ __( 'Background Overlay', 'gridflow' ) }
											value={ bgOverlayHover }
											alpha={ false }
											gradients={ true }
											onChange={ ( value ) => setAttributes( { bgOverlayHover: value } ) }
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
											] }
										/>
									</>
								);
							}
						} }
					</TabPanel>
				</PanelBody>

				{ enableCaption && (
					<PanelBody title={ __( 'Caption', 'gridflow' ) } initialOpen={ false } >
						<GridFlowTextAlign
							label={ __( 'Alignment', 'gridflow' ) }
							values={ captionTextAligns }
							onChange={ ( value ) => setAttributes( { captionTextAligns: value } ) }
						/>
						<GridFlowTyphography
							font={ font }
							onChangeFont={ ( value ) => setAttributes( { font: value } ) }
							fontSize={ fontSize }
							onChangeFontSize={ ( value ) => setAttributes( { fontSize: value } ) }
							lineHeight={ lineHeight }
							onChangeLineHeight={ ( value ) => setAttributes( { lineHeight: value } ) }
							fontWeight={ fontWeight }
							onChangeFontWeight={ ( value ) => setAttributes( { fontWeight: value } ) }
							decoration={ decoration }
							onChangeDecoration={ ( value ) => setAttributes( { decoration: value } ) }
							transform={ transform }
							onChangeTransform={ ( value ) => setAttributes( { transform: value } ) }
							fontStyle={ fontStyle }
							onChangeFontStyle={ ( value ) => setAttributes( { fontStyle: value } ) }
							letterSpacing={ letterSpacing }
							onChangeLetterSpacing={ ( value ) => setAttributes( { letterSpacing: value } ) }
						/>
						<GridFlowBoxControl
							label={ __( 'Caption Spacing', 'gridflow' ) }
							value={ captionSpacing }
							onChange={ ( value ) => setAttributes( { captionSpacing: value } ) }
						/>
					</PanelBody>
				) }
			</InspectorControls>
		</>
	);
};
export default Inspector;
