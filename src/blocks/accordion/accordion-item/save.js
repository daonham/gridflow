import classnames from 'classnames';

import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { uniqueId, title, tagName, icon, iconActive, iconAlign, collapse } = attributes;

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridflow-accordion__item', uniqueId, { active: collapse } ) } ) }>
			<div className={ classnames( 'gridflow-accordion__item__inner', 'gridflow-block-inner' ) }>
				<div className={ 'gridflow-accordion__item__wrapper' }>
					<div className="gridflow-accordion__item__title">
						{ ( icon?.icon || icon?.url ) && iconAlign && iconAlign === 'left' && (
							<span className="gridflow-accordion__item__icon gridflow-accordion__item__icon--left">
								<span className="gridflow-accordion__item__icon__closed">
									{ icon?.icon && (
										<i className={ icon.icon }></i>
									) }
									{ icon?.url && (
										<img src={ icon.url } alt={ icon?.alt ? icon.alt : '' } />
									) }
								</span>

								{ ( iconActive?.icon || iconActive?.url ) && (
									<span className="gridflow-accordion__item__icon__opened">
										{ iconActive?.icon && (
											<i className={ iconActive.icon }></i>
										) }
										{ iconActive?.url && (
											<img src={ iconActive.url } alt={ iconActive?.alt ? iconActive.alt : '' } />
										) }
									</span>
								) }
							</span>
						) }
						<RichText.Content
							tagName={ tagName }
							className={ 'gridflow-accordion__item__title-content' }
							value={ title }
						/>
						{ ( icon?.icon || icon?.url ) && iconAlign && iconAlign === 'right' && (
							<span className="gridflow-accordion__item__icon gridflow-accordion__item__icon--right">
								<span className="gridflow-accordion__item__icon__closed">
									{ icon?.icon && (
										<i className={ icon.icon }></i>
									) }
									{ icon?.url && (
										<img src={ icon.url } alt={ icon?.alt ? icon.alt : '' } />
									) }
								</span>

								{ ( iconActive?.icon || iconActive?.url ) && (
									<span className="gridflow-accordion__item__icon__opened">
										{ iconActive?.icon && (
											<i className={ iconActive.icon }></i>
										) }
										{ iconActive?.url && (
											<img src={ iconActive.url } alt={ iconActive?.alt ? iconActive.alt : '' } />
										) }
									</span>
								) }
							</span>
						) }
					</div>
					<div className="gridflow-accordion__item__content">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</div>
	);
}
