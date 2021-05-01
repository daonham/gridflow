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

function Edit( { isSelected, attributes, setAttributes } ) {
	const { style, placeholder, tagName, uniqueId, type, icon, text } = attributes;

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

			<div { ...useBlockProps( { className: classnames( 'gridflow-divider', uniqueId ) } ) }>
				<div className={ classnames( 'gridflow-divider__inner', 'gridflow-block-inner' ) }>
					<div className={ 'gridflow-divider__wrapper' }>
						<div className={ classnames(
							'gridflow-divider-separator',
							{ [`gridflow-divider-separator--${style}`]: style },
							{ [`gridflow-divider-separator--${type}`]: type }
							)}>
							{ type === 'text' && (
								<RichText
								className={ classnames( 'gridflow-divider__text' ) }
								tagName={ tagName }
								placeholder={ placeholder || __( 'Write text...', 'gridflow' ) }
								keepplaceholderonfocus="true"
								value={ text }
								onChange={ ( value ) => setAttributes( { text: value } ) }
								/>
							) }

							{ type === 'icon' && ( icon?.icon || icon?.url ) && (
								<span className="gridflow-divider__icon">
									{ icon?.icon && (
										<i className={ icon.icon }></i>
									) }
									{ icon?.url && (
										<img src={ icon.url } alt={ icon?.alt ? icon.alt : '' } />
									) }
								</span>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default compose( [
	withInlineStyle,
] )( Edit );
