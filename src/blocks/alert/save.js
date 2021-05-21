import classnames from 'classnames';

import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { uniqueId, title, content, type, showTitle, showDismissButton } = attributes;

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridflow-alert', uniqueId ) } ) }>
			<div className={ classnames( 'gridflow-alert__inner', 'gridflow-block-inner' ) }>
				<div className={ classnames( 'gridflow-alert__wrapper', `gridflow-alert--type__${ type }` ) } role="alert">
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
						{ showDismissButton && (
							<button className="gridflow-alert__dismiss">
								<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
							</button>
						) }
					</div>
				</div>
			</div>
		</div>
	);
}
