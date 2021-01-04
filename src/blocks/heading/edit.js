/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

import Controls from './controls';
import Inspector from './inspector';

const edit = ( {
	isSelected,
	attributes,
	setAttributes,
} ) => {
	const { content, placeholder, tagName } = attributes;

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

			<div { ...useBlockProps( { className: classnames( 'gridhub-heading' ) } ) }>
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
};
export default edit;
