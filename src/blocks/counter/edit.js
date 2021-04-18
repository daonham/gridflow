import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { useBlockProps, RichText } from '@wordpress/block-editor';

import Controls from './controls';
import Inspector from './inspector';

const { withInlineStyle } = wp.gridflowCompose;

function Edit( { isSelected, attributes, setAttributes } ) {
	const { uniqueId, prefix, suffix, title, toValue } = attributes;

	return (
		<>
			{ isSelected && (
				<Controls
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			) }

			{ isSelected && (
				<Inspector
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			) }

			<div { ...useBlockProps( { className: classnames( 'gridflow-counter', uniqueId ) } ) }>
				<div className={ classnames( 'gridflow-counter__inner', 'gridflow-block-inner' ) }>
					<div className="gridflow-counter__wrapper">
						<div className="gridflow-counter__number">
							<span className="gridflow-counter__number__prefix">{ prefix }</span>
							<span className="gridflow-counter__number__number">{ toValue }</span>
							<span className="gridflow-counter__number__suffix">{ suffix }</span>
						</div>
						<RichText
							tagName="div"
							className="gridflow-counter__title"
							placeholder={ __( 'Write title…', 'gridflow' ) }
							value={ title }
							onChange={ ( value ) => setAttributes( { title: value } ) }
							keepplaceholderonfocus="true"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
export default compose( [
	withInlineStyle,
] )( Edit );
