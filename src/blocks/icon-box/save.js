/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { uniqueId, icon, links, iconPosition, hoverEffect } = attributes;

	let rel = links?.rel;
	const target = links?.target ? '_blank' : undefined;

	if ( target && ! rel.includes( 'noreferrer' ) ) {
		rel = rel ? `noreferrer noopener ${ rel }` : 'noreferrer noopener';
	}

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridflow-icon-box', uniqueId ) } ) }>
			<div className={ classnames( 'gridflow-icon-box__inner', 'gridflow-block-inner' ) }>
				<div className={ classnames(
					'gridflow-icon-box__wrapper',
					`gridflow-icon-box__wrapper--icon--${ iconPosition }`,
					{ [ `gridflow-icon-box__wrapper--icon--hover--${ hoverEffect }` ]: hoverEffect }
				) }>
					{ links?.url ? (
						<div className={ 'gridflow-icon-box__icon' }>
							<a
								className={ classnames( 'gridflow-icon-box__link' ) }
								href={ links.url }
								target={ target }
								rel={ rel }
							>
								{ icon?.icon && (
									<i className={ classnames( 'gridflow-icon-box__i', icon.icon ) }></i>
								) }
								{ icon?.url && (
									<img className={ 'gridflow-icon-box__img' } src={ icon.url } alt={ icon?.alt || '' } />
								) }
							</a>
						</div>
					) : (
						<div className={ classnames( 'gridflow-icon-box__icon' ) }>
							{ icon?.icon && (
								<i className={ classnames( 'gridflow-icon-box__i', icon.icon ) }></i>
							) }
							{ icon?.url && (
								<img className={ 'gridflow-icon-box__img' } src={ icon.url } alt={ icon?.alt || '' } />
							) }
						</div>
					) }
					<div className="gridflow-icon-box__content">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</div>
	);
}
