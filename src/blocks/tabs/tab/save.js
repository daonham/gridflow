import classnames from 'classnames';

import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { uniqueId, index, uniqueIdTab, tabTitles } = attributes;

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridflow-tab', uniqueId ) } ) }>
			<button
				className="gridflow-tabs__title__button gridflow-tabs__title__button--mobile"
				role="tab"
				aria-selected={ index === 0 ? 'true' : 'false' }
				aria-controls={ `gridflow-tab__panel_${ uniqueIdTab }_${ index }` }
				tabIndex={ index === 0 ? '0' : '-1' }
			>
				<RichText.Content
					tagName="span"
					value={ tabTitles?.title }
				/>
			</button>
			<div
				id={ `gridflow-tab__panel_${ uniqueIdTab }_${ index }` }
				className={ `gridflow-tab__panel-${ index }_${ index }` }
				tabIndex={ '0' }
				role={ 'tabpanel' }
				aria-labelledby={ `gridflow-tabs__button_${ uniqueIdTab }_${ index }` }
				hidden={ index !== 0 && true }
			>
				<div className={ classnames( 'gridflow-tab__inner', 'gridflow-block-inner' ) }>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
