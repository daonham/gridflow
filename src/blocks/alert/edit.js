import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { useBlockProps, RichText } from '@wordpress/block-editor';

import Controls from './controls';
import Inspector from './inspector';

const { withInlineStyle } = wp.gridflowCompose;

function Edit( { isSelected, attributes, setAttributes } ) {
	const { uniqueId, title, content, type, showTitle, showDismissButton, showIcon, icons } = attributes;

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
					<div className={ classnames( 'gridflow-alert__wrapper', `gridflow-alert--type__${ type }`, { 'gridflow-alert__wrapper--icon': showIcon } ) } role="alert">
						{ showIcon && type !== 'titled' && (
							<span className="gridflow-alert__icon">
								{ icons?.icon && (
									<i className={ icons.icon }></i>
								) }
								{ icons?.url && (
									<img src={ icons.url } alt={ icons?.alt ? icons.alt : '' } />
								) }
							</span>
						) }
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

							{ showDismissButton && (
								<button className="gridflow-alert__dismiss">
									<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
								</button>
							) }
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
