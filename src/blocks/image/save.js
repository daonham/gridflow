import classnames from 'classnames';

import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { uniqueId, url, alt, id } = attributes;

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridhub-image', uniqueId ) } ) }>
			<div className={ classnames( 'gridhub-image__inner', 'gridhub-block-inner' ) }>
				<div className={ 'gridhub-image__wrapper' }>
					{ url && (
						<img className={ id && `wp-image-${ id }` } src={ url } alt={ alt || '' } />
					) }
				</div>
			</div>
		</div>
	);
}
