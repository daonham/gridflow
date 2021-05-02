/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { uniqueId, url, id, alt, linkType, links } = attributes;

	let href, target, rel;

	if ( linkType === 'media' ) {
		href = url;
	} else if ( linkType === 'custom' ) {
		href = links?.url;
		target = links?.target && '_blank';
		rel = links?.rel;

		if ( links?.target && ! rel.includes( 'noreferrer' ) ) {
			rel = rel ? `noreferrer noopener ${ rel }` : 'noreferrer noopener';
		}
	}

	const contentLink = (
		<>
			{ linkType ? (
				<a className={ classnames( 'gridflow-image-box__image' ) } href={ href } target={ target } rel={ rel }>
					<img className={ id && `wp-image-${ id }` } src={ url } alt={ alt || '' } />
				</a>
			) : (
				<div className={ classnames( 'gridflow-image-box__image' ) }>
					<img className={ id && `wp-image-${ id }` } src={ url } alt={ alt || '' } />
				</div>
			) }
		</>
	);

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridflow-image-box', uniqueId ) } ) }>
			<div className={ classnames( 'gridflow-image-box__inner', 'gridflow-block-inner' ) }>
				<div className={ 'gridflow-image-box__wrapper' }>
					{ contentLink }

					<div className="gridflow-image-box__content">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</div>
	);
}
