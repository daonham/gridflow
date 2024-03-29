import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	RangeControl,
	TabPanel,
	Flex,
	FlexItem,
} from '@wordpress/components';

const {
	GridFlowTyphography,
	GridFlowBoxControl,
	GridFlowBorder,
	GridFlowBoxShadow,
	GridFlowColorPicker,
	GridFlowDivider,
	GridFlowTextAlign,
	GridFlowIconSelect,
	GridFlowTextUnit,
} = wp.gridflowComponents;

const Inspector = ( { attributes, setAttributes } ) => {
	const {
		tabTitles,
		position,
		aligns,
		borderWidth,
		borderColor,

		color,
		font,
		fontSize,
		lineHeight,
		fontWeight,
		decoration,
		transform,
		fontStyle,
		letterSpacing,
		bgColor,
		marginTitle,
		paddingTitle,
		borderTitle,
		borderRadiusTitle,
		boxShadowTitle,
		colorActive,
		bgColorActive,
		borderTitleActive,
		borderRadiusTitleActive,
		boxShadowTitleActive,

		colorContent,
		bgColorContent,
		paddingContent,
		borderContent,
		borderRadiusContent,

		iconPosition,
		iconSpacing,
		fontSizeIcon,
		lineHeightIcon,
		imgWidthIcon,
		colorIcon,
		colorIconActive,
	} = attributes;

	const onChangeIcon = ( value, i ) => {
		const nextLabel = tabTitles.map( ( tabTitle, index ) => {
			if ( i === index ) {
				return { title: tabTitle.title, icon: value };
			}

			return tabTitle;
		} );

		setAttributes( { tabTitles: nextLabel } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'gridflow' ) } initialOpen={ true }>
					<SelectControl
						label={ __( 'Position', 'gridflow' ) }
						value={ position }
						onChange={ ( value ) => setAttributes( { position: value } ) }
						options={ [
							{ label: __( 'Top', 'gridflow' ), value: '' },
						] }
					/>
					<GridFlowTextAlign
						label={ __( 'Alignment', 'gridflow' ) }
						values={ aligns }
						onChange={ ( value ) => setAttributes( { aligns: value } ) }
					/>
					<RangeControl
						label={ __( 'Border width', 'gridflow' ) }
						value={ borderWidth }
						onChange={ ( value ) => setAttributes( { borderWidth: value } ) }
						min={ 0 }
						max={ 10 }
						step={ 1 }
						allowReset={ true }
					/>
					<GridFlowColorPicker
						label={ __( 'Border Color', 'gridflow' ) }
						value={ borderColor }
						onChange={ ( value ) => setAttributes( { borderColor: value } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Title', 'gridflow' ) } initialOpen={ false }>
					<TabPanel
						tabs={ [
							{ name: 'normal', title: __( 'Normal', 'gridflow' ) },
							{ name: 'active', title: __( 'Active', 'gridflow' ) },
						] }
					>
						{ ( tab ) => {
							if ( tab.name === 'normal' ) {
								return (
									<>
										<GridFlowColorPicker
											label={ __( 'Color', 'gridflow' ) }
											value={ color }
											onChange={ ( value ) => setAttributes( { color: value } ) }
										/>
										<GridFlowColorPicker
											label={ __( 'Background Color', 'gridflow' ) }
											value={ bgColor }
											onChange={ ( value ) => setAttributes( { bgColor: value } ) }
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
										<GridFlowDivider />
										<GridFlowBoxControl
											label={ __( 'Margin', 'gridflow' ) }
											values={ marginTitle }
											onChange={ ( value ) => setAttributes( { marginTitle: value } ) }
										/>
										<GridFlowBoxControl
											label={ __( 'Padding', 'gridflow' ) }
											values={ paddingTitle }
											onChange={ ( value ) => setAttributes( { paddingTitle: value } ) }
										/>
										<GridFlowBorder
											label={ __( 'Border', 'gridflow' ) }
											values={ borderTitle }
											device={ true }
											onChange={ ( value ) => setAttributes( { borderTitle: value } ) }
										/>
										<GridFlowBoxControl
											label={ __( 'Border Radius', 'gridflow' ) }
											values={ borderRadiusTitle }
											onChange={ ( value ) => setAttributes( { borderRadiusTitle: value } ) }
										/>
										<GridFlowBoxShadow
											label={ __( 'Box Shadow', 'gridflow' ) }
											value={ boxShadowTitle }
											onChange={ ( value ) => setAttributes( { boxShadowTitle: value } ) }
										/>
									</>
								);
							}

							if ( tab.name === 'active' ) {
								return (
									<>
										<GridFlowColorPicker
											label={ __( 'Color', 'gridflow' ) }
											value={ colorActive }
											onChange={ ( value ) => setAttributes( { colorActive: value } ) }
										/>
										<GridFlowColorPicker
											label={ __( 'Background Color', 'gridflow' ) }
											value={ bgColorActive }
											onChange={ ( value ) => setAttributes( { bgColorActive: value } ) }
										/>
										<GridFlowBorder
											label={ __( 'Border', 'gridflow' ) }
											values={ borderTitleActive }
											device={ true }
											onChange={ ( value ) => setAttributes( { borderTitleActive: value } ) }
										/>
										<GridFlowBoxControl
											label={ __( 'Border Radius', 'gridflow' ) }
											values={ borderRadiusTitleActive }
											onChange={ ( value ) => setAttributes( { borderRadiusTitleActive: value } ) }
										/>
										<GridFlowBoxShadow
											label={ __( 'Box Shadow', 'gridflow' ) }
											value={ boxShadowTitleActive }
											onChange={ ( value ) => setAttributes( { boxShadowTitleActive: value } ) }
										/>
									</>
								);
							}
						} }
					</TabPanel>
				</PanelBody>

				<PanelBody title={ __( 'Content', 'gridflow' ) } initialOpen={ false }>
					<GridFlowColorPicker
						label={ __( 'Color', 'gridflow' ) }
						value={ colorContent }
						onChange={ ( value ) => setAttributes( { colorContent: value } ) }
					/>
					<GridFlowColorPicker
						label={ __( 'Background Color', 'gridflow' ) }
						value={ bgColorContent }
						onChange={ ( value ) => setAttributes( { bgColorContent: value } ) }
					/>
					<GridFlowBoxControl
						label={ __( 'Padding', 'gridflow' ) }
						values={ paddingContent }
						onChange={ ( value ) => setAttributes( { paddingContent: value } ) }
					/>
					<GridFlowBorder
						label={ __( 'Border', 'gridflow' ) }
						values={ borderContent }
						device={ true }
						onChange={ ( value ) => setAttributes( { borderContent: value } ) }
					/>
					<GridFlowBoxControl
						label={ __( 'Border Radius', 'gridflow' ) }
						values={ borderRadiusContent }
						onChange={ ( value ) => setAttributes( { borderRadiusContent: value } ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Icons', 'gridflow' ) } initialOpen={ false }>
					{ tabTitles.map( ( tabTitle, index ) => {
						return (
							<GridFlowIconSelect
								key={ index }
								label={ tabTitle?.title || 'Icon Tab' }
								values={ tabTitle?.icon }
								onChange={ ( value ) => onChangeIcon( value, index ) }
							/>
						);
					} ) }
					<Flex gap={ 8 } justify={ 'flex-start' } align={ 'flex-start' } style={ { marginTop: 10 } } >
						<FlexItem>
							<SelectControl
								label={ __( 'Icon Position', 'gridflow' ) }
								value={ iconPosition }
								options={ [
									{ label: __( 'Left', 'gridflow' ), value: 'left' },
									{ label: __( 'Right', 'gridflow' ), value: 'right' },
								] }
								onChange={ ( value ) => setAttributes( { iconPosition: value } ) }
								style={ { width: 100 } }
							/>
							<GridFlowTextUnit
								label={ __( 'Font Size', 'gridflow' ) }
								values={ fontSizeIcon }
								onChange={ ( value ) => setAttributes( { fontSizeIcon: value } ) }
							/>
						</FlexItem>
						<FlexItem>
							<GridFlowTextUnit
								label={ __( 'Icon Spacing', 'gridflow' ) }
								values={ iconSpacing }
								onChange={ ( value ) => setAttributes( { iconSpacing: value } ) }
							/>
							<GridFlowTextUnit
								label={ __( 'Line Height', 'gridflow' ) }
								values={ lineHeightIcon }
								onChange={ ( value ) => setAttributes( { lineHeightIcon: value } ) }
							/>
						</FlexItem>
					</Flex>

					<GridFlowTextUnit
						label={ __( 'Icon Image Width', 'gridflow' ) }
						values={ imgWidthIcon }
						onChange={ ( value ) => setAttributes( { imgWidthIcon: value } ) }
					/>
					<TabPanel
						tabs={ [
							{ name: 'normal', title: __( 'Normal', 'gridflow' ) },
							{ name: 'active', title: __( 'Active', 'gridflow' ) },
						] }
					>
						{ ( tab ) => {
							if ( tab.name === 'normal' ) {
								return (
									<>
										<GridFlowColorPicker
											label={ __( 'Color', 'gridflow' ) }
											value={ colorIcon }
											onChange={ ( value ) => setAttributes( { colorIcon: value } ) }
										/>
									</>
								);
							}

							if ( tab.name === 'active' ) {
								return (
									<>
										<GridFlowColorPicker
											label={ __( 'Color', 'gridflow' ) }
											value={ colorIconActive }
											onChange={ ( value ) => setAttributes( { colorIconActive: value } ) }
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
