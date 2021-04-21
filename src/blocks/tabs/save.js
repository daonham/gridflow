import classnames from 'classnames';

import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { uniqueId, tabTitles, uniqueIdTitle } = attributes;

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridflow-tabs', uniqueId ) } ) }>
			<div className={ classnames( 'gridflow-tabs__inner', 'gridflow-block-inner' ) }>
				<div className="gridflow-tabs__wrapper">
					<div className="gridflow-tabs__title" role="tablist">
						{ tabTitles.map( ( tabData, i ) => {
							return (
								<button
									key={ i }
									id={ `gridflow-tabs__button_${ uniqueIdTitle }_${ i }` }
									className="gridflow-tabs__title__button"
									role="tab"
									aria-selected={ i === 0 ? 'true' : 'false' }
									aria-controls={ `gridflow-tab__panel_${ uniqueIdTitle }_${ i }` }
									tabIndex={ i === 0 ? '0' : '-1' }
								>
									<RichText.Content
										tagName="span"
										value={ tabData?.title }
									/>
								</button>
							);
						} ) }
					</div>

					<div className="gridflow-tabs__content" role="tablist">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</div>
	);
}
