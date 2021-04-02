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

const { withInlineStyle } = wp.gridflowCompose;

function Edit( {
	isSelected,
	attributes,
	setAttributes,
} ) {
	const { content, placeholder, tagName, uniqueId, icon, iconPosition } = attributes;

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

			<div { ...useBlockProps( { className: classnames( 'gridflow-heading', uniqueId ) } ) }>
				<div className={ classnames( 'gridflow-heading__inner', 'gridflow-block-inner' ) }>
					<div className={ 'gridflow-heading__wrapper' }>
						{ ( icon?.icon || icon?.url ) && iconPosition === 'left' && (
							<span>
								{ icon?.icon && (
									<i className={ icon.icon }></i>
								) }
								{ icon?.url && (
									<img src={ icon.url } alt={ icon?.alt ? icon.alt : '' } />
								) }
							</span>
						) }

						<RichText
							className={ classnames( 'gridflow-heading__content' ) }
							tagName={ tagName }
							placeholder={ placeholder || __( 'Write heading...', 'gridflow' ) }
							keepPlaceholderOnFocus
							value={ content }
							onChange={ ( value ) => setAttributes( { content: value } ) }
						/>

						{ ( icon?.icon || icon?.url ) && iconPosition === 'right' && (
							<span>
								{ icon?.icon && (
									<i className={ icon.icon }></i>
								) }
								{ icon?.url && (
									<img src={ icon.url } alt={ icon?.alt ? icon.alt : '' } />
								) }
							</span>
						) }
					</div>
				</div>
			</div>
		</>
	);
}
export default compose( [
	withInlineStyle,
] )( Edit );
