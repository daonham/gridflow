import classnames from 'classnames';

import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { uniqueId } = attributes;

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridflow-progress-bar', uniqueId ) } ) }>
			<div className={ classnames( 'gridflow-progress-bar__inner', 'gridflow-block-inner' ) }>
				<div className={ 'gridflow-progress-bar__wrapper' }>

				</div>
			</div>
		</div>
	);
}
