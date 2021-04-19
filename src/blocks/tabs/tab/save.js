import classnames from 'classnames';

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { uniqueId, index } = attributes;

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridflow-tab', `gridflow-tab__panel-${ index }`, uniqueId ), tabIndex: index, role: 'tabpanel' } ) }>
			<div className={ classnames( 'gridflow-tab__inner', 'gridflow-block-inner' ) }>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
