/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { content, tagName, uniqueId } = attributes;

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridhub-heading', uniqueId ) } ) }>
			<div className={ classnames( 'gridhub-heading__inner' ) }>
				{ ! RichText.isEmpty( content ) && (
					<RichText.Content
						className={ classnames( 'gridhub-heading__content' ) }
						tagName={ tagName }
						value={ content }
					/>
				) }
			</div>
		</div>
	);
}
