import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { useBlockProps, RichText } from '@wordpress/block-editor';

import Controls from './controls';
import Inspector from './inspector';

const { withInlineStyle, GridFlowInspectorControls } = wp.gridflowCompose;

function Edit( { name, isSelected, attributes, setAttributes } ) {
	const { uniqueId, prefix, suffix, title, toValue, delimiter } = attributes;

	return (
		<>
			{ isSelected && (
				<Controls
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			) }

			{ isSelected && (
				<GridFlowInspectorControls name={ name } attributes={ attributes } setAttributes={ setAttributes }>
					<Inspector
						attributes={ attributes }
						setAttributes={ setAttributes }
					/>
				</GridFlowInspectorControls>
			) }

			<div { ...useBlockProps( { className: classnames( 'gridflow-counter', uniqueId ) } ) }>
				<div className={ classnames( 'gridflow-counter__inner', 'gridflow-block-inner' ) }>
					<div className="gridflow-counter__wrapper">
						<div className="gridflow-counter__number">
							<span className="gridflow-counter__number__prefix">{ prefix }</span>
							<span className="gridflow-counter__number__number">{ delimiter ? toValue.toString().replace( /\B(?=(\d{3})+(?!\d))/g, delimiter ) : toValue }</span>
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
