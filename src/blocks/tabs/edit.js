import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { useSelect, useDispatch } from '@wordpress/data';
import { useBlockProps, RichText, store as blockEditorStore, __experimentalUseInnerBlocksProps as useInnerBlocksProps } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { useState, useEffect } from '@wordpress/element';
import { Icon, plus } from '@wordpress/icons';
import { Tooltip, Button } from '@wordpress/components';

import Controls from './controls';
import Inspector from './inspector';

const { withInlineStyle } = wp.gridflowCompose;

function Edit( { isSelected, attributes, setAttributes, clientId } ) {
	const { uniqueId, tabTitles, uniqueIdTitle } = attributes;

	const [ activeTab, setActiveTab ] = useState( 0 );

	useEffect( () => {
		const block = document.querySelector( `#block-${ clientId }` );
		const ele = block.querySelector( `.gridflow-tab__panel-${ activeTab }` );

		[ ...block.querySelectorAll( '.gridflow-tab' ) ].forEach( ( element ) => {
			element.style.display = 'none';
		} );

		if ( ele ) {
			ele.style.display = 'block';
		}
	}, [ activeTab ] );

	const uniqueIdBlock = clientId.substr( 0, 6 );

	useEffect( () => {
		if ( ! uniqueIdTitle ) {
			setAttributes( { uniqueIdTitle: uniqueIdBlock } );
		} else if ( uniqueId && uniqueIdTitle !== uniqueIdBlock ) {
			setAttributes( { uniqueIdTitle: uniqueIdBlock } );
		}
	}, [ clientId ] );

	const { isSelectedChild, innerBlocks } = useSelect( ( select ) => {
		const { hasSelectedInnerBlock, getBlocks } = select( blockEditorStore );

		return {
			isSelectedChild: hasSelectedInnerBlock( clientId, true ),
			innerBlocks: getBlocks( clientId ),
		};
	}, [ clientId ] );

	const isEditing = isSelected || isSelectedChild;

	const changeLabel = ( value, i ) => {
		const nextLabel = tabTitles.map( ( title, index ) => {
			if ( i === index ) {
				return { title: value };
			}

			return title;
		} );

		setAttributes( { tabTitles: nextLabel } );
	};

	const addTab = () => {
		const newTabTitle = [ ...tabTitles ];
		const length = newTabTitle.length + 1;

		newTabTitle.push( {
			title: 'Tab' + length,
		} );

		setActiveTab( length - 1 );

		setAttributes( { tabTitles: newTabTitle } );

		const updateInnerBlocks = [
			...innerBlocks,
			createBlock( 'gridflow/tab', { index: length - 1, uniqueIdTab: uniqueIdBlock } ),
		];

		replaceInnerBlocks( clientId, updateInnerBlocks );
	};

	const { replaceInnerBlocks } = useDispatch( blockEditorStore );

	const getTabsTemplate = () => {
		const result = [];

		tabTitles.forEach( ( ele, i ) => {
			result.push( [ 'gridflow/tab', { index: i, uniqueIdTab: uniqueIdBlock } ] );
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
				<Inspector
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			) }

			<div { ...useBlockProps( { className: classnames( 'gridflow-tabs', uniqueId ) } ) }>
				<div className={ classnames( 'gridflow-tabs__inner', 'gridflow-block-inner' ) }>
					<div className="gridflow-tabs__wrapper">
						<div className="gridflow-tabs__title">
							{ tabTitles.map( ( tabData, i ) => {
								return (
									<button
										key={ i }
										className="gridflow-tabs__title__button"
										onClick={ () => {
											setActiveTab( i );
										} }
									>
										<RichText
											tagName="span"
											placeholder={ __( 'Tab label', 'gridflow' ) }
											keepplaceholderonfocus="true"
											value={ tabData?.title }
											onChange={ ( value ) => {
												changeLabel( value, i );
											} }
										/>
									</button>
								);
							} ) }

							{ isEditing && (
								<Tooltip text={ __( 'Add Tab', 'gridflow' ) }>
									<div style={ { display: 'inline-flex', alignItems: 'center', margin: 0 } }>
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
