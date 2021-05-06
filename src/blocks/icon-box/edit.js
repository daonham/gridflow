/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
} from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';

import Controls from './controls';
import Inspector from './inspector';

const { withInlineStyle } = wp.gridflowCompose;

const TEMPLATE = [
	[
		'gridflow/heading',
		{
			placeholder: __( 'Add heading', 'gridflow' ),
			tagName: 'h3',
		},
	],
	[
		'gridflow/heading',
		{
			placeholder: __( 'Add content...', 'gridflow' ),
			tagName: 'p',
		},
	],
];

function Edit( { isSelected, attributes, setAttributes } ) {
	const { uniqueId, icon, links, iconPosition, hoverEffect } = attributes;

	const innerBlocksContent = useInnerBlocksProps( { className: 'gridflow-icon-box__content' }, {
		allowedBlocks: [ 'gridflow/heading', 'gridflow/button', 'core/heading', 'core/button', 'core/buttons' ],
		template: TEMPLATE,
		templateInsertUpdatesSelection: true,
	} );

	let rel = links?.rel;
	const target = links?.target ? '_blank' : undefined;

	if ( target && ! rel.includes( 'noreferrer' ) ) {
		rel = rel ? `noreferrer noopener ${ rel }` : 'noreferrer noopener';
	}

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

			<div { ...useBlockProps( { className: classnames( 'gridflow-icon-box', uniqueId ) } ) }>
				<div className={ classnames( 'gridflow-icon-box_inner', 'gridflow-block-inner' ) }>
					<div className={ classnames(
						'gridflow-icon-box__wrapper',
						`gridflow-icon-box__wrapper--icon--${ iconPosition }`,
						{ [`gridflow-icon-box__wrapper--icon--hover--${ hoverEffect}`]: hoverEffect }
						) }>
							{ links?.url ? (
								<div className={ 'gridflow-icon-box__icon' }>
									<a
										className={ classnames( 'gridflow-icon-box__link' ) }
										href={ links.url }
										target={ target }
										rel={ rel }
										onClick={ ( e ) => e.preventDefault() }
									>
										{ icon?.icon && (
											<i className={ classnames( 'gridflow-icon-box__i', icon.icon ) }></i>
										) }
										{ icon?.url && (
											<img className={ 'gridflow-icon-box__img' } src={ icon.url } alt={ icon?.alt || '' } />
										) }
									</a>
								</div>
							) : (
								<div className={ classnames( 'gridflow-icon-box__icon' ) }>
									{ icon?.icon && (
										<i className={ classnames( 'gridflow-icon-box__i', icon.icon ) }></i>
									) }
									{ icon?.url && (
										<img  className={ 'gridflow-icon-box__img' } src={ icon.url } alt={ icon?.alt || '' } />
									) }
								</div>
							) }

						<div { ...innerBlocksContent } />
					</div>
				</div>
			</div>
		</>
	);
}
export default compose( [
	withInlineStyle,
] )( Edit );
