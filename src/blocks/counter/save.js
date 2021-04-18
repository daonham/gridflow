import classnames from 'classnames';

import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { uniqueId, prefix, suffix, title, duration, fromValue, toValue, step } = attributes;

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridflow-counter', uniqueId ) } ) }>
			<div className={ classnames( 'gridflow-counter__inner', 'gridflow-block-inner' ) }>
				<div className="gridflow-counter__wrapper">
					<div className="gridflow-counter__number">
						<span className="gridflow-counter__number__prefix">{ prefix }</span>
						<span className="gridflow-counter__number__number" data-duration={ duration || '2000' } data-step={ step || '1' } data-from={ fromValue || '0' } data-to={ toValue || '100' }>{ fromValue }</span>
						<span className="gridflow-counter__number__suffix">{ suffix }</span>
					</div>
					{ ! RichText.isEmpty( title ) && (
						<RichText.Content
							tagName="div"
							className="gridflow-counter__title"
							value={ title }
						/>
					) }
				</div>
			</div>
		</div>
	);
}
