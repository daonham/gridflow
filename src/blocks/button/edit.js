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

const { withInlineStyle } = wp.gridhubCompose;

function Edit( {
	isSelected,
	attributes,
	setAttributes,
} ) {
	const { content, placeholder, links, uniqueId, icon, iconPosition } = attributes;

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

			<div { ...useBlockProps( { className: classnames( 'gridhub-button', uniqueId ) } ) }>
				<div className={ classnames( 'gridhub-button__inner', 'gridhub-block-inner' ) }>
					<a className={ 'gridhub-button__link' } href={ links?.url } target={ links?.target } rel={ links?.rel }>
						{ ( icon?.icon || icon?.url ) && iconPosition === 'left' && (
							<span className="gridhub-button__icon">
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
							className={ 'gridhub-button__text' }
							placeholder={ placeholder || __( 'Add text...', 'gridhub' ) }
							keepPlaceholderOnFocus
							value={ content }
							onChange={ ( value ) => setAttributes( { content: value } ) }
						/>

						{ ( icon?.icon || icon?.url ) && iconPosition === 'right' && (
							<span className="gridhub-button__icon">
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
