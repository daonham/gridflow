import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { useBlockProps, RichText } from '@wordpress/block-editor';

import Controls from './controls';
import Inspector from './inspector';

const { withInlineStyle } = wp.gridflowCompose;

function Edit( { isSelected, attributes, setAttributes } ) {
	const { uniqueId, title, content, showTitle } = attributes;

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

			<div { ...useBlockProps( { className: classnames( 'gridflow-alert', uniqueId ) } ) }>
				<div className={ classnames( 'gridflow-alert__inner', 'gridflow-block-inner' ) }>
					<div className={ 'gridflow-alert__wrapper' } role="alert">
						<div className={ 'gridflow-alert__text' }>
							{ showTitle && (
								<RichText
									tagName={ 'div' }
									placeholder={ __( 'Write alert title…', 'gridflow' ) }
									className={ 'gridflow-alert__title' }
									value={ title }
									onChange={ ( value ) => setAttributes( { title: value } ) }
									keepplaceholderonfocus="true"
								/>
							) }

							<RichText
								tagName={ 'div' }
								placeholder={ __( 'Write alert content…', 'gridflow' ) }
								className={ 'gridflow-alert__content' }
								value={ content }
								onChange={ ( value ) => setAttributes( { content: value } ) }
								keepplaceholderonfocus="true"
							/>
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
