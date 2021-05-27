/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';

import Controls from './controls';
import Inspector from './inspector';

const { withInlineStyle, GridFlowInspectorControls } = wp.gridflowCompose;

function Edit( {
	name,
	isSelected,
	attributes,
	setAttributes,
} ) {
	const { content, placeholder, links, uniqueId, icon, iconPosition } = attributes;

	let rel = links?.rel;
	const target = links?.target ? '_blank' : undefined;

	if ( target && ! rel.includes( 'noreferrer' ) ) {
		rel = rel ? `noreferrer noopener ${ rel }` : 'noreferrer noopener';
	}

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

			<div { ...useBlockProps( { className: classnames( 'gridflow-button', uniqueId ) } ) }>
				<div className={ classnames( 'gridflow-button__inner', 'gridflow-block-inner' ) }>
					<a className={ 'gridflow-button__link' } href={ links?.url } onClick={ ( e ) => e.preventDefault() } target={ target } rel={ rel }>
						{ ( icon?.icon || icon?.url ) && iconPosition === 'left' && (
							<span className="gridflow-button__icon">
								{ icon?.icon && (
									<i className={ icon.icon }></i>
								) }
								{ icon?.url && (
									<img src={ icon.url } alt={ icon?.alt ? icon.alt : '' } />
								) }
							</span>
						) }

						<RichText
							tagName={ 'span' }
							className={ 'gridflow-button__text' }
							placeholder={ placeholder || __( 'Add text...', 'gridflow' ) }
							keepplaceholderonfocus="true"
							value={ content }
							onChange={ ( value ) => setAttributes( { content: value } ) }
						/>

						{ ( icon?.icon || icon?.url ) && iconPosition === 'right' && (
							<span className="gridflow-button__icon">
								{ icon?.icon && (
									<i className={ icon.icon }></i>
								) }
								{ icon?.url && (
									<img src={ icon.url } alt={ icon?.alt ? icon.alt : '' } />
								) }
							</span>
						) }
					</a>
				</div>
			</div>
		</>
	);
}
export default compose( [
	withInlineStyle,
] )( Edit );
