import classnames from 'classnames';

import { compose } from '@wordpress/compose';
import { useBlockProps } from '@wordpress/block-editor';

import Controls from './controls';
import Inspector from './inspector';

const { withInlineStyle, GridFlowInspectorControls } = wp.gridflowCompose;

function Edit( {
	name,
	isSelected,
	attributes,
	setAttributes,
} ) {
	const { uniqueId, icon, links } = attributes;

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
				<GridFlowInspectorControls name={ name } attributes={ attributes } setAttributes={ setAttributes }>
					<Inspector
						attributes={ attributes }
						setAttributes={ setAttributes }
					/>
				</GridFlowInspectorControls>
			) }

			<div { ...useBlockProps( { className: classnames( 'gridflow-icon', uniqueId ) } ) }>
				<div className={ classnames( 'gridflow-icon__inner', 'gridflow-block-inner' ) }>
					<div className={ 'gridflow-icon__wrapper' }>
						{ links?.url ? (
							<a className="gridflow-icon__icon" href={ links?.url } target={ target } rel={ rel } onClick={ ( e ) => e.preventDefault() }>
								{ icon?.icon && (
									<i className={ icon.icon }></i>
								) }
								{ icon?.url && (
									<img src={ icon.url } alt={ icon?.alt ? icon.alt : '' } />
								) }
							</a>
						) : (
							<span className="gridflow-icon__icon">
								{ icon?.icon && (
									<i className={ icon.icon }></i>
								) }
								{ icon?.url && (
									<img src={ icon.url } alt={ icon?.alt ? icon.alt : '' } />
								) }
							</span>
						) }
					</div>
				</div>
			</div>
		</>
	);
}
export default compose( [
	withInlineStyle,
] )( Edit );
