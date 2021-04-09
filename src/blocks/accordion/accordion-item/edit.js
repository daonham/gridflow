import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { useBlockProps, InnerBlocks, RichText, store as blockEditorStore } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

import Controls from './controls';
import Inspector from './inspector';

const { withInlineStyle } = wp.gridflowCompose;

const TEMPLATE = [
	[ 'gridflow/heading', { placeholder: __( 'Add content…', 'gridflow' ), tagName: 'p' } ],
];

function Edit( { isSelected, attributes, setAttributes, clientId } ) {
	const { uniqueId, title, collapse, icon, iconActive, iconAlign } = attributes;

	const isSelectedChild = useSelect( ( select ) => {
		const { getSelectedBlockClientId, getBlocks } = select( blockEditorStore );

		const hasSelectedChildren = getBlocks( clientId ).filter( ( elem ) => elem.clientId === getSelectedBlockClientId() );

		return hasSelectedChildren.length > 0;
	}, [ clientId ] );

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

			<div { ...useBlockProps( { className: classnames( 'gridflow-accordion__item', uniqueId ) } ) }>
				<div className={ classnames( 'gridflow-accordion__item__inner', 'gridflow-block-inner' ) }>
					<div className={ 'gridflow-accordion__item__wrapper' }>
						<div className="gridflow-accordion__item__title">
							{ ( icon?.icon || icon?.url ) && iconAlign && iconAlign === 'left' && (
								<span className="gridflow-accordion__item__icon gridflow-accordion__item__icon--left">
									<span className="gridflow-accordion__item__icon__closed">
										{ icon?.icon && (
											<i className={ icon.icon }></i>
										) }
										{ icon?.url && (
											<img src={ icon.url } alt={ icon?.alt ? icon.alt : '' } />
										) }
									</span>

									{ ( iconActive?.icon || iconActive?.url ) && (
										<span className="gridflow-accordion__item__icon__opened">
											{ iconActive?.icon && (
												<i className={ iconActive.icon }></i>
											) }
											{ iconActive?.url && (
												<img src={ iconActive.url } alt={ iconActive?.alt ? iconActive.alt : '' } />
											) }
										</span>
									) }
								</span>
							) }
							<RichText
								tagName="span"
								placeholder={ __( 'Write accordion item title…', 'gridflow' ) }
								className={ 'gridflow-accordion__item__title-content' }
								value={ title }
								onChange={ ( value ) => setAttributes( { title: value } ) }
								keepPlaceholderOnFocus
							/>
							{ ( icon?.icon || icon?.url ) && iconAlign && iconAlign === 'right' && (
								<span className="gridflow-accordion__item__icon gridflow-accordion__item__icon--right">
									<span className="gridflow-accordion__item__icon__closed">
										{ icon?.icon && (
											<i className={ icon.icon }></i>
										) }
										{ icon?.url && (
											<img src={ icon.url } alt={ icon?.alt ? icon.alt : '' } />
										) }
									</span>

									{ ( iconActive?.icon || iconActive?.url ) && (
										<span className="gridflow-accordion__item__icon__opened">
											{ iconActive?.icon && (
												<i className={ iconActive.icon }></i>
											) }
											{ iconActive?.url && (
												<img src={ iconActive.url } alt={ iconActive?.alt ? iconActive.alt : '' } />
											) }
										</span>
									) }
								</span>
							) }
						</div>
						<div className="gridflow-accordion__item__content" style={ { display: isSelected || isSelectedChild || collapse ? 'block' : 'none' } }>
							<InnerBlocks
								template={ TEMPLATE }
								templateInsertUpdatesSelection={ false }
								__experimentalCaptureToolbars={ true }
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
