import classnames from 'classnames';

import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { uniqueId, prefix, suffix, title, duration, fromValue, toValue, step, delimiter } = attributes;

	const counter = {
		duration: duration || '2000',
		step: step || '1',
		from: fromValue || '0',
		to: toValue || '100',
		delimiter: delimiter || '',
	};

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridflow-counter', uniqueId ) } ) }>
			<div className={ classnames( 'gridflow-counter__inner', 'gridflow-block-inner' ) }>
				<div className="gridflow-counter__wrapper">
					<div className="gridflow-counter__number">
						<span className="gridflow-counter__number__prefix">{ prefix }</span>
						<span className="gridflow-counter__number__number" data-counter={ JSON.stringify( counter ) }>{ fromValue }</span>
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
