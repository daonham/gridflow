/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { style, tagName, uniqueId, type, icon, text } = attributes;

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridflow-divider', uniqueId ) } ) }>
			<div className={ classnames( 'gridflow-divider__inner', 'gridflow-block-inner' ) }>
					<div className={ 'gridflow-divider__wrapper' }>
						<div className={ classnames(
							'gridflow-divider-separator',
							{ [`gridflow-divider-separator--${style}`]: style },
							{ [`gridflow-divider-separator--${type}`]: type }
							)}>
							{ type === 'text' && (
								<RichText.Content
								className={ classnames( 'gridflow-divider__text' ) }
								tagName={ tagName }
								value={ text }
								/>
							) }

							{ type === 'icon' && ( icon?.icon || icon?.url ) && (
								<span className="gridflow-divider__icon">
									{ icon?.icon && (
										<i className={ icon.icon }></i>
									) }
									{ icon?.url && (
										<img src={ icon.url } alt={ icon?.alt ? icon.alt : '' } />
									) }
								</span>
							)}
						</div>
					</div>
				</div>
		</div>
	);
}
