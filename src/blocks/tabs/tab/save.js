import classnames from 'classnames';

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { uniqueId, index, uniqueIdTab } = attributes;

	return (
		<div { ...useBlockProps.save( {
			id: `gridflow-tab__panel_${uniqueIdTab}_${index}`,
			className: classnames( 'gridflow-tab', `gridflow-tab__panel-${ index }_${index}`, uniqueId ),
			tabIndex: '0',
			role: 'tabpanel',
			'aria-labelledby': `gridflow-tabs__button_${uniqueIdTab}_${index}`,
			hidden: index !== 0 && true
			} ) }
		>
			<div className={ classnames( 'gridflow-tab__inner', 'gridflow-block-inner' ) }>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
