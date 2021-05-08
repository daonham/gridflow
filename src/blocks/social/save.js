import classnames from 'classnames';

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { uniqueId } = attributes;

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridflow-social-icons', uniqueId ) } ) }>
			<div className={ classnames( 'gridflow-social-icons__inner', 'gridflow-block-inner' ) }>
				<div className={ 'gridflow-social-icons__wrapper' }>
					<div className="gridflow-social-icons__items">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</div>
	);
}
