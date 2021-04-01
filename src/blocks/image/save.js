import classnames from 'classnames';

import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { uniqueId, url, alt, id, linkType, links, overlay, overlayHover, enableCaption, caption } = attributes;

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

	function contentLink() {
		return (
			<>
				{ linkType ? (
					<a className={ classnames( 'gridhub-image__wrapper', { 'gridhub-image__wrapper--overlay': overlay || overlayHover } ) } href={ href } target={ target } rel={ rel }>
						<img className={ id && `wp-image-${ id }` } src={ url } alt={ alt || '' } />
					</a>
				) : (
					<div className={ classnames( 'gridhub-image__wrapper', { 'gridhub-image__wrapper--overlay': overlay || overlayHover } ) }>
						<img className={ id && `wp-image-${ id }` } src={ url } alt={ alt || '' } />
					</div>
				) }
			</>
		);
	}

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridhub-image', uniqueId ) } ) }>
			{ url && (
				<div className={ classnames( 'gridhub-image__inner', 'gridhub-block-inner' ) }>
					{ enableCaption && ! RichText.isEmpty( caption ) ? (
						<figure className={ 'gridhub-image__caption' }>
							{ contentLink() }

							<RichText.Content tagName="figcaption" value={ caption } className={ 'gridhub-image__caption__text' } />
						</figure>
					) : (
						contentLink()
					) }
				</div>
			) }
		</div>
	);
}
