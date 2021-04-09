import classnames from 'classnames';

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { uniqueId } = attributes;

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridflow-accordion', uniqueId ) } ) }>
			<div className={ classnames( 'gridflow-accordion__inner', 'gridflow-block-inner' ) }>
				<div className={ 'gridflow-accordion__wrapper' }>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
