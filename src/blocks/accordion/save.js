import classnames from 'classnames';

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { uniqueId, close, collapse } = attributes;

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridflow-accordion', uniqueId ) } ) }>
			<div className={ classnames( 'gridflow-accordion__inner', 'gridflow-block-inner' ) }>
				<div className={ classnames(
					'gridflow-accordion__wrapper',
					{ 'gridflow-accordion__wrapper--close': close },
					{ 'gridflow-accordion__wrapper--collapse': collapse }
				) }>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
