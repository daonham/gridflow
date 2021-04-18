import classnames from 'classnames';

import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { uniqueId, title, caption, percent, suffix, showTitle, showCaption, showValue, percentPosition } = attributes;

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridflow-progress-bar', uniqueId ) } ) }>
			<div className={ classnames( 'gridflow-progress-bar__inner', 'gridflow-block-inner' ) }>
				<div className="gridflow-progress-bar__wrapper">
					{ showTitle && ! RichText.isEmpty( title ) && (
						<RichText.Content
							tagName="span"
							className="gridflow-progress-bar__title"
							value={ title }
						/>
					) }
					<div className="gridflow-progress-bar__content">
						<div className={ classnames( 'gridflow-progress-bar__content__value', {[`is-percent-${percentPosition}`]: percentPosition } ) } data-percent={ parseInt( percent ) } data-suffix={ suffix || '' }>
							<div className="gridflow-progress-bar__content__label">
								{ showCaption && ! RichText.isEmpty( caption ) && (
									<RichText.Content
										tagName="span"
										className="gridflow-progress-bar__content__label__caption"
										value={ caption }
									/>
								) }
								<span className="gridflow-progress-bar__content__label__inner">
									{ showValue && percent ? `${ parseInt( percent ) }${ suffix || '' }` : '' }
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
