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
	const { content, placeholder, tagName, uniqueId } = attributes;

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

			<div { ...useBlockProps( { className: classnames( 'gridhub-heading', uniqueId ) } ) }>
				<div className={ classnames( 'gridhub-heading__inner' ) }>
					{ ( ! RichText.isEmpty( content ) || isSelected ) && (
						<RichText
							className={ classnames( 'gridhub-heading__content' ) }
							tagName={ tagName }
							placeholder={ placeholder || __( 'Write heading...' ) }
							keepPlaceholderOnFocus
							value={ content }
							onChange={ ( value ) => setAttributes( { content: value } ) }
						/>
					) }
				</div>
			</div>
		</>
	);
}
export default compose( [
	withInlineStyle,
] )( Edit );
