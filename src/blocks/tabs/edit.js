import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { useSelect, useDispatch } from '@wordpress/data';
import { useBlockProps, RichText, store as blockEditorStore, useInnerBlocksProps } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { useState, useEffect } from '@wordpress/element';
import { Icon, plus, closeSmall } from '@wordpress/icons';
import { Tooltip, Button } from '@wordpress/components';

import Controls from './controls';
import Inspector from './inspector';

const { withInlineStyle, GridFlowInspectorControls } = wp.gridflowCompose;

function Edit( { name, isSelected, attributes, setAttributes, clientId } ) {
	const { uniqueId, tabTitles, uniqueIdTitle, iconPosition, position } = attributes;

	const [ activeTab, setActiveTab ] = useState( 0 );

	useEffect( () => {
		if ( getPreviewDeviceType === 'Mobile' ) {
			return;
		}

		const block = document.querySelector( `#block-${ clientId }` );
		const ele = block.querySelector( `.gridflow-tab__panel-${ activeTab }` );

		[ ...block.querySelectorAll( '.gridflow-tab .gridflow-tab__panel' ) ].forEach( ( element ) => {
			element.style.display = 'none';
		} );

		if ( ele ) {
			ele.style.display = 'block';
		}
	}, [ isSelected, activeTab, tabTitles ] );

	const uniqueIdBlock = clientId.substr( 0, 6 );

	const { updateBlockAttributes } = useDispatch( blockEditorStore );

	const { isSelectedChild, innerBlocks, innerBlockClientIds } = useSelect( ( select ) => {
		const { hasSelectedInnerBlock, getBlocks, getBlockOrder } = select( blockEditorStore );

		return {
			innerBlockClientIds: getBlockOrder( clientId ),
			isSelectedChild: hasSelectedInnerBlock( clientId, true ),
			innerBlocks: getBlocks( clientId ),
		};
	}, [ clientId ] );

	useEffect( () => {
		if ( uniqueIdTitle !== uniqueIdBlock ) {
			setAttributes( { uniqueIdTitle: uniqueIdBlock } );
		}

		innerBlockClientIds.forEach( ( innerBlockClientId, index ) => {
			updateBlockAttributes( innerBlockClientId, {
				uniqueIdTab: uniqueIdBlock,
				tabTitles: tabTitles[ index ],
			} );
		} );
	}, [ isSelected, innerBlockClientIds, activeTab, tabTitles ] );

	const getPreviewDeviceType = useSelect( ( select ) => {
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' );

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : 'Desktop';
	}, [] );

	const isEditing = isSelected || isSelectedChild;

	const changeLabel = ( value, i ) => {
		const nextLabel = tabTitles.map( ( tabTitle, index ) => {
			if ( i === index ) {
				return { title: value, icon: tabTitle.icon };
			}

			return tabTitle;
		} );

		setAttributes( { tabTitles: nextLabel } );

		innerBlockClientIds.forEach( ( innerBlockClientId, index ) => {
			if ( i === index ) {
				updateBlockAttributes( innerBlockClientId, {
					uniqueIdTab: uniqueIdBlock,
					tabTitles: { title: value, icon: nextLabel[ i ].icon },
				} );
			}
		} );
	};

	const addTab = () => {
		const newTabTitle = [ ...tabTitles ];
		const length = newTabTitle.length + 1;

		newTabTitle.push( {
			title: 'Tab ' + length,
			icon: {
				icon: null,
				url: null,
				id: null,
				alt: null,
			},
		} );

		setActiveTab( length - 1 );

		setAttributes( { tabTitles: newTabTitle } );

		const updateInnerBlocks = [
			...innerBlocks,
			createBlock( 'gridflow/tab', { index: length - 1 } ),
		];

		replaceInnerBlocks( clientId, updateInnerBlocks );
	};

	const removeTab = ( i ) => {
		const newTabTitle = [ ...tabTitles ];

		if ( 1 >= innerBlockClientIds.length ) {
			removeBlock( clientId );
		} else if ( innerBlockClientIds[ i ] ) {
			removeBlock( innerBlockClientIds[ i ].clientId );

			if ( tabTitles[ i ] ) {
				newTabTitle.splice( i, 1 );

				const newInnerBlocks = [ ...innerBlocks ];
				newInnerBlocks.splice( i, 1 );

				replaceInnerBlocks( clientId, newInnerBlocks, false );

				setAttributes( { tabTitles: newTabTitle } );

				newInnerBlocks.forEach( ( innerBlock, index ) => {
					updateBlockAttributes( innerBlock.clientId, {
						index,
					} );
				} );

				setActiveTab( newTabTitle.length );
			}
		}
	};

	const { replaceInnerBlocks, removeBlock } = useDispatch( blockEditorStore );

	const getTabsTemplate = () => {
		const result = [];

		tabTitles.forEach( ( ele, i ) => {
			result.push( [ 'gridflow/tab', { index: i } ] );
		} );

		return result;
	};

	const innerBlocksProps = useInnerBlocksProps( { className: 'gridflow-tabs__content' }, {
		allowedBlocks: [ 'gridflow/tab' ],
		template: getTabsTemplate(),
		orientation: 'vertical',
		renderAppender: false,
	} );

	return (
		<>
			{ isSelected && (
				<Controls
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			) }

			{ isSelected && (
				<GridFlowInspectorControls name={ name } attributes={ attributes } setAttributes={ setAttributes }>
					<Inspector
						attributes={ attributes }
						setAttributes={ setAttributes }
					/>
				</GridFlowInspectorControls>
			) }

			<div { ...useBlockProps( { className: classnames( 'gridflow-tabs', uniqueId, { 'gridflow-tabs__icons--right': iconPosition === 'right' } ) } ) }>
				<div className={ classnames( 'gridflow-tabs__inner', 'gridflow-block-inner' ) }>
					<div className="gridflow-tabs__wrapper">
						{ getPreviewDeviceType !== 'Mobile' && (
							<div className="gridflow-tabs__title">
								{ tabTitles.map( ( tabData, i ) => {
									return (
										<button
											key={ i }
											className={ classnames( 'gridflow-tabs__title__button', { 'gridflow-tabs__title__button-active': activeTab === i } ) }
											onClick={ () => setActiveTab( i ) }
										>
											{ tabData?.icon?.icon && (
												<i className={ tabData.icon.icon }></i>
											) }
											{ tabData?.icon?.url && (
												<img src={ tabData.icon.url } alt={ tabData?.icon?.alt ? tabData.icon.alt : '' } />
											) }
											<RichText
												tagName="span"
												placeholder={ __( 'Tab label', 'gridflow' ) }
												keepplaceholderonfocus="true"
												value={ tabData?.title }
												onChange={ ( value ) => changeLabel( value, i ) }
											/>
											<Button
												className="gridflow-tabs__title__button__remove"
												icon={ closeSmall }
												onClick={ () => removeTab( i ) }
												label={ __( 'Remove tab', 'gridflow' ) }
												style={ { display: activeTab !== i && 'none' } }
												disabled={ activeTab !== i }
											/>
										</button>
									);
								} ) }

								{ isEditing && (
									<Tooltip text={ __( 'Add Tab', 'gridflow' ) }>
										<div style={ { display: 'inline-flex', alignItems: 'center', margin: ( position === 'left' || position === 'right' ) ? '10px 0 0 0' : '0 0 0 10px' } }>
											<Button
												className={ classnames( 'block-editor-button-block-appender' ) }
												style={ { padding: 0 } }
												onClick={ () => addTab() }
											>
												<Icon icon={ plus } />
											</Button>
										</div>
									</Tooltip>
								) }
							</div>
						) }

						<div { ...innerBlocksProps } />
					</div>
				</div>
			</div>
		</>
	);
}
export default compose( [
	withInlineStyle,
] )( Edit );
