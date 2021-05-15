import classnames from 'classnames';

import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { uniqueId, title, content, showTitle } = attributes;

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridflow-alert', uniqueId ) } ) }>
			<div className={ classnames( 'gridflow-alert__inner', 'gridflow-block-inner' ) }>
				<div className={ 'gridflow-alert__wrapper' } role="alert">
					<div className={ 'gridflow-alert__text' }>
						{ showTitle && (
							<RichText.Content
								tagName={ 'div' }
								className={ 'gridflow-alert__title' }
								value={ title }
							/>
						) }
						<RichText.Content
							tagName={ 'div' }
							className={ 'gridflow-alert__content' }
							value={ content }
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
