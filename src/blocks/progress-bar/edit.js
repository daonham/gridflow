import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { ResizableBox } from '@wordpress/components';

import Controls from './controls';
import Inspector from './inspector';

const { withInlineStyle } = wp.gridflowCompose;

function Edit( { isSelected, attributes, setAttributes, toggleSelection } ) {
	const { uniqueId, percent, suffix, showValue, title, caption, showTitle, showCaption, percentPosition } = attributes;

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

			<div { ...useBlockProps( { className: classnames( 'gridflow-progress-bar', uniqueId ) } ) }>
				<div className={ classnames( 'gridflow-progress-bar__inner', 'gridflow-block-inner' ) }>
					<div className={ 'gridflow-progress-bar__wrapper' }>
						{ showTitle && (
							<RichText
								tagName="span"
								className="gridflow-progress-bar__title"
								placeholder={ __( 'Write title…', 'gridflow' ) }
								value={ title }
								onChange={ ( value ) => setAttributes( { title: value } ) }
								keepplaceholderonfocus="true"
							/>
						) }
						<div className={ 'gridflow-progress-bar__content' }>
							<ResizableBox
								showHandle={ isSelected }
								className={ classnames( 'gridflow-progress-bar__content__value', { [ `is-percent-${ percentPosition }` ]: percentPosition } ) }
								size={ { width: percent + '%' } }
								minWidth="0%"
								maxWidth="100%"
								minHeight="100%"
								maxHeight="100%"
								enable={ {
									top: false,
									right: true,
									bottom: false,
									left: false,
								} }
								onResizeStart={ () => {
									toggleSelection( false );
								} }
								onResizeStop={ ( event, direction, elt, delta ) => {
									setAttributes( {
										percent: Math.min( 100, Math.max( 0, percent + parseInt( ( 100 * delta.width ) / elt.parentElement.offsetWidth, 10 ) ) ),
									} );

									toggleSelection( true );
								} }
							>
								<div className={ 'gridflow-progress-bar__content__label' }>
									{ showCaption && (
										<RichText
											tagName="span"
											className="gridflow-progress-bar__content__label__caption"
											placeholder={ __( 'Write caption…', 'gridflow' ) }
											value={ caption }
											onChange={ ( value ) => setAttributes( { caption: value } ) }
											keepplaceholderonfocus="true"
										/>
									) }
									<span className={ 'gridflow-progress-bar__content__label__inner' }>
										{ showValue ? `${ percent }${ suffix || '' }` : '' }
									</span>
								</div>
							</ResizableBox>
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
