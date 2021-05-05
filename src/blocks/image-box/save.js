/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { uniqueId, url, id, alt, linkType, links, imagePosition, overlay, hoverOverlay, hoverEffect } = attributes;

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

	const imageBoxImage = (
		<>
			{ linkType ? (
				<div className={ 'gridflow-image-box__image' }>
					<a className={ 'gridflow-image-box__link' } href={ href } target={ target } rel={ rel }>
						<img className={ classnames(id && `wp-image-${ id }`, 'gridflow-image-box__img' ) } src={ url } alt={ alt || '' } />

						{ ( overlay || hoverOverlay ) && (
							<div className={ classnames('gridflow-image-box__image--overlay')}></div>
						)}
					</a>
				</div>
			) : (
				<div className={ 'gridflow-image-box__image' }>
					<img className={ classnames(id && `wp-image-${ id }`, 'gridflow-image-box__img' ) } src={ url } alt={ alt || '' } />

					{ ( overlay || hoverOverlay ) && (
							<div className={ classnames('gridflow-image-box__image--overlay')}></div>
						)}
				</div>
			) }
		</>
	);

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridflow-image-box', uniqueId ) } ) }>
			<div className={ classnames( 'gridflow-image-box__inner', 'gridflow-block-inner' ) }>
				<div className={ classnames(
					'gridflow-image-box__wrapper',
					`gridflow-image-box__wrapper--image--${ imagePosition }`,
					{ [`gridflow-image-box__wrapper--image--hover--${ hoverEffect}`]: hoverEffect }
					) }>
					{ imageBoxImage }

					<div className="gridflow-image-box__content">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</div>
	);
}
