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
	GridFlowBoxControl,
	GridFlowBorder,
	GridFlowBoxShadow,
	GridFlowTextAlign,
	GridFlowTextUnit,
	GridFlowColorPicker,
	GridFlowLinkControl,
	GridFlowFocusPointPicker,
	GridFlowSelect,
	GridFlowDivider,
	GridFlowRangeControl,
} = wp.gridflowComponents;

const Inspector = ( { attributes, setAttributes, isSelected } ) => {
	const {
		url,
		id,
		alt,
		linkType,
		links,
		imagePosition,
		spacing,
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
		transition,
		hoverOverlay,
		hoverBgOverlay,
		hoverEffect,

		contentAlignment,
		contentVerticalAlignment,
		contentColor,
		contentBackgroundColor,
		contentMargin,
		contentPadding,
		contentBorder,
		contentBorderRadius,
		contentBoxShadow,
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
					<GridFlowRangeControl
						label={ __( 'Spacing', 'gridflow' ) }
						values={ spacing }
						onChange={ ( value ) => setAttributes( { spacing: value } ) }
					/>
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
					<GridFlowDivider />
					<RangeControl
						label={ __( 'Transition Duration', 'gridflow' ) }
						value={ transition }
						onChange={ ( value ) => setAttributes( { transition: value } ) }
						min={ 0 }
						max={ 3 }
						step={ 0.1 }
					/>
					<RangeControl
						label={ __( 'Hover Overlay', 'gridflow' ) }
						value={ hoverOverlay }
						onChange={ ( value ) => setAttributes( { hoverOverlay: value } ) }
						min={ 0 }
						max={ 100 }
					/>
					<GridFlowColorPicker
						label={ __( 'Hover Background Overlay', 'gridflow' ) }
						value={ hoverBgOverlay }
						alpha={ false }
						gradients={ true }
						onChange={ ( value ) => setAttributes( { hoverBgOverlay: value } ) }
					/>
					<SelectControl
						label={ __( 'Hover Effect', 'gridflow' ) }
						value={ hoverEffect }
						onChange={ ( value ) => setAttributes( { hoverEffect: value } ) }
						options={ [
							{ label: __( 'None', 'gridflow' ), value: '' },
						] }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Content', 'gridflow' ) } initialOpen={ false }>
					<GridFlowTextAlign
						label={ __( 'Alignment', 'gridflow' ) }
						values={ contentAlignment }
						onChange={ ( value ) => setAttributes( { contentAlignment: value } ) }
					/>

					<SelectControl
						label={ __( 'Vertical Alignment', 'gridflow' ) }
						value={ contentVerticalAlignment }
						onChange={ ( value ) => setAttributes( { contentVerticalAlignment: value } ) }
						options={ [
							{ label: __( 'Top', 'gridflow' ), value: 'flex-start' },
							{ label: __( 'Center', 'gridflow' ), value: 'center' },
							{ label: __( 'Bottom', 'gridflow' ), value: 'flex-end' },
						] }
					/>
					<GridFlowColorPicker
						label={ __( 'Color', 'gridflow' ) }
						value={ contentColor }
						onChange={ ( value ) => setAttributes( { contentColor: value } ) }
					/>
					<GridFlowColorPicker
						label={ __( 'Background Color', 'gridflow' ) }
						value={ contentBackgroundColor }
						alpha={ true }
						gradients={ true }
						onChange={ ( value ) => setAttributes( { contentBackgroundColor: value } ) }
					/>
					<GridFlowBoxControl
						label={ __( 'Margin', 'gridflow' ) }
						values={ contentMargin }
						onChange={ ( value ) => setAttributes( { contentMargin: value } ) }
					/>
					<GridFlowBoxControl
						label={ __( 'Padding', 'gridflow' ) }
						values={ contentPadding }
						onChange={ ( value ) => setAttributes( { contentPadding: value } ) }
					/>
					<GridFlowBorder
						label={ __( 'Border', 'gridflow' ) }
						values={ contentBorder }
						device={ true }
						onChange={ ( value ) => setAttributes( { contentBorder: value } ) }
					/>
					<GridFlowBoxControl
						label={ __( 'Border Radius', 'gridflow' ) }
						values={ contentBorderRadius }
						onChange={ ( value ) => setAttributes( { contentBorderRadius: value } ) }
					/>
					<GridFlowBoxShadow
						label={ __( 'Box Shadow', 'gridflow' ) }
						value={ contentBoxShadow }
						onChange={ ( value ) => setAttributes( { contentBoxShadow: value } ) }
					/>
				</PanelBody>

			</InspectorControls>
		</>
	);
};
export default Inspector;
