/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { content, tagName, uniqueId, icon, iconPosition } = attributes;

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridflow-heading', uniqueId ) } ) }>
			<div className={ classnames( 'gridflow-heading__inner', 'gridflow-block-inner' ) }>
				<div className={ 'gridflow-heading__wrapper' }>
					{ ( icon?.icon || icon?.url ) && iconPosition === 'left' && (
						<span>
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
							className={ classnames( 'gridflow-heading__content' ) }
							tagName={ tagName }
							value={ content }
						/>
					) }

					{ ( icon?.icon || icon?.url ) && iconPosition === 'right' && (
						<span>
							{ icon?.icon && (
								<i className={ icon.icon }></i>
							) }
							{ icon?.url && (
								<img src={ icon.url } alt={ icon?.alt ? icon.alt : '' } />
							) }
						</span>
					) }
				</div>
			</div>
		</div>
	);
}
