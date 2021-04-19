import classnames from 'classnames';

import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { uniqueId } = attributes;

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridflow-tabs', uniqueId ) } ) }>
			<div className={ classnames( 'gridflow-tabs__inner', 'gridflow-block-inner' ) }>
				<div className="gridflow-tabs__wrapper">

				</div>
			</div>
		</div>
	);
}
