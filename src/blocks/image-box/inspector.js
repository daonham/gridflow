import { pick, map, filter, get } from 'lodash';

import { __ } from '@wordpress/i18n';
import { InspectorControls, store as blockEditorStore } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import {
	PanelBody,
	SelectControl,
	Flex,
	FlexItem,
	TextareaControl,
	RangeControl,
} from '@wordpress/components';

const {
	GridFlowTyphography,
	GridFlowBoxControl,
	GridFlowBorder,
	GridFlowBoxShadow,
	GridFlowTextAlign,
	GridFlowTextUnit,
	GridFlowRangeControl,
	GridFlowColorPicker,
	GridFlowLinkControl,
	GridFlowFocusPointPicker,
	GridFlowSelect,
} = wp.gridflowComponents;

const Inspector = ( { attributes, setAttributes, isSelected } ) => {
	const {
		url,
		id,
		alt,
		linkType,
		links,
		imagePosition,
		sizeSlug,
		width,
		height,
		objectFit,
		objectPosition,
		overlay,
		bgOverlay,
		border,
		borderRadius,
		boxShadow,

		style,
		tagName,
		type,
		icon,
		textAligns,
		color,

		colorText,
		font,
		fontSize,
		lineHeight,
		fontWeight,
		decoration,
		transform,
		fontStyle,
		letterSpacing,
		textPosition,
		textSpacing,

		iconPosition,
		iconSpacing,
		iconWidth,
		iconFontSize,
		iconColor,
		iconBackgroundColor,
		iconPadding,
		iconBorder,
		iconBorderRadius,
		iconBoxShadow,
	} = attributes;

	const { image } = useSelect(
		( select ) => {
			const { getMedia } = select( coreStore );

			return {
				image: id && isSelected ? getMedia( id ) : null,
			};
		},
		[ id, isSelected ]
	);

	const { imageSizes } = useSelect(
		( select ) => {
			const { getSettings } = select( blockEditorStore );

			return pick( getSettings(), [
				'imageSizes',
			] );
		}
	);

	const imageSizeOptions = map(
		filter( imageSizes, ( { slug } ) =>
			get( image, [ 'media_details', 'sizes', slug, 'source_url' ] )
		),
		( { name, slug } ) => ( { value: slug, label: name } )
	);

	function updateImage( newSizeSlug ) {
		const newUrl = get( image, [
			'media_details',
			'sizes',
			newSizeSlug,
			'source_url',
		] );

		const newWidth = image?.media_details?.sizes?.[ newSizeSlug ]?.width;

		const newHeight = image?.media_details?.sizes?.[ newSizeSlug ]?.height;

		if ( ! newUrl || ! newSizeSlug ) {
			setAttributes( {
				url: image?.source_url || url,
				sizeSlug: '',
				width: {},
				height: {},
			} );

			return;
		}

		const nextWidth = newWidth ? { desktop: newWidth + 'px', tablet: newWidth + 'px', mobile: newWidth + 'px' } : { ...width };
		const nextHeight = newHeight ? { desktop: newHeight + 'px', tablet: newHeight + 'px', mobile: newHeight + 'px' } : { ...height };

		setAttributes( {
			url: newUrl,
			width: nextWidth,
			height: nextHeight,
			sizeSlug: newSizeSlug,
		} );
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'gridflow' ) } initialOpen={ true }>
					<TextareaControl
						label={ __( 'Alt text (alternative text)', 'gridflow' ) }
						value={ alt }
						onChange={ ( value ) => setAttributes( { alt: value } ) }
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
					<SelectControl
						label={ __( 'Image Position', 'gridflow' ) }
						value={ imagePosition }
						onChange={ ( value ) => setAttributes( { imagePosition: value } ) }
						options={ [
							{ label: __( 'Left', 'gridflow' ), value: 'left' },
							{ label: __( 'Top', 'gridflow' ), value: 'top' },
							{ label: __( 'Right', 'gridflow' ), value: 'right' },
						] }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Image', 'gridflow' ) } initialOpen={ false }>
					<SelectControl
						label={ __( 'Image Size', 'gridflow' ) }
						value={ sizeSlug || '' }
						onChange={ ( value ) => updateImage( value ) }
						options={ [ ...imageSizeOptions, { value: '', label: 'Custom' } ] }
					/>
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
					<GridFlowFocusPointPicker
						label={ __( 'Object Position', 'gridflow' ) }
						url={ url }
						values={ objectPosition }
						onChange={ ( value ) =>
							setAttributes( { objectPosition: value } )
						}
					/>
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
				</PanelBody>

				{ type === 'icon' && (
					<PanelBody title={ __( 'Icon', 'gridflow' ) } initialOpen={ false }>
						<SelectControl
							label={ __( 'Position', 'gridflow' ) }
							value={ iconPosition }
							options={ [
								{ label: __( 'Center', 'gridflow' ), value: 'center' },
								{ label: __( 'Left', 'gridflow' ), value: 'left' },
								{ label: __( 'Right', 'gridflow' ), value: 'right' },
							] }
							onChange={ ( value ) => setAttributes( { iconPosition: value } ) }
						/>
						<Flex gap={ 8 } justify={ 'flex-start' } align={ 'flex-start' }>
							<FlexItem>
								<GridFlowTextUnit
									label={ 'Font Size' }
									values={ iconFontSize }
									onChange={ ( value ) => setAttributes( { iconFontSize: value } ) }
								/>
							</FlexItem>
							<FlexItem>
								<GridFlowTextUnit
									label={ __( 'Icon Spacing', 'gridflow' ) }
									values={ iconSpacing }
									onChange={ ( value ) => setAttributes( { iconSpacing: value } ) }
									min={ 0 }
									style={ { maxWidth: 90 } }
								/>
							</FlexItem>
						</Flex>
						{ icon?.url && (
							<GridFlowTextUnit
								label={ __( 'Width', 'gridflow' ) }
								values={ iconWidth }
								onChange={ ( value ) => setAttributes( { iconWidth: value } ) }
							/>
						) }
						{ icon?.icon && (
							<GridFlowColorPicker
								label={ __( 'Color', 'gridflow' ) }
								value={ iconColor }
								alpha={ true }
								onChange={ ( value ) => setAttributes( { iconColor: value } ) }
							/>
						) }
						<GridFlowColorPicker
							label={ __( 'Background Color', 'gridflow' ) }
							value={ iconBackgroundColor }
							alpha={ true }
							gradients={ true }
							onChange={ ( value ) => setAttributes( { iconBackgroundColor: value } ) }
						/>
						<GridFlowBoxControl
							label={ __( 'Padding', 'gridflow' ) }
							values={ iconPadding }
							onChange={ ( value ) => setAttributes( { iconPadding: value } ) }
						/>
						<GridFlowBorder
							label={ __( 'Border', 'gridflow' ) }
							values={ iconBorder }
							device={ true }
							onChange={ ( value ) => setAttributes( { iconBorder: value } ) }
						/>
						<GridFlowBoxControl
							label={ __( 'Border Radius', 'gridflow' ) }
							values={ iconBorderRadius }
							onChange={ ( value ) => setAttributes( { iconBorderRadius: value } ) }
						/>
						<GridFlowBoxShadow
							label={ __( 'Box Shadow', 'gridflow' ) }
							value={ iconBoxShadow }
							onChange={ ( value ) => setAttributes( { iconBoxShadow: value } ) }
						/>
					</PanelBody>
				) }
			</InspectorControls>
		</>
	);
};
export default Inspector;
