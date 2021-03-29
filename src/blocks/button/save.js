import classnames from 'classnames';

import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { content, links, uniqueId, icon, iconPosition } = attributes;

	let rel = links?.rel;
	const target = links?.target ? '_blank' : undefined;

	if ( target && ! rel.includes( 'noreferrer' ) ) {
		rel = rel ? `noreferrer noopener ${ rel }` : 'noreferrer noopener';
	}

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridhub-button', uniqueId ) } ) }>
			<div className={ classnames( 'gridhub-button__inner', 'gridhub-block-inner' ) }>
				<a className={ 'gridhub-button__link' } href={ links?.url } target={ target } rel={ rel }>
					{ ( icon?.icon || icon?.url ) && iconPosition === 'left' && (
						<span className="gridhub-button__icon">
							{ icon?.icon && (
								<i className={ icon.icon }></i>
							) }
							{ icon?.url && (
								<img src={ icon.url } alt={ icon?.alt ? icon.alt : '' } />
							) }
						</span>
					) }

					{ ! RichText.isEmpty( content ) && (
						<RichText.Content
							tagName={ 'span' }
							className={ classnames( 'gridhub-button__text' ) }
							value={ content }
						/>
					) }

					{ ( icon?.icon || icon?.url ) && iconPosition === 'right' && (
						<span className="gridhub-button__icon">
							{ icon?.icon && (
								<i className={ icon.icon }></i>
							) }
							{ icon?.url && (
								<img src={ icon.url } alt={ icon?.alt ? icon.alt : '' } />
							) }
						</span>
					) }
				</a>
			</div>
		</div>
	);
}
