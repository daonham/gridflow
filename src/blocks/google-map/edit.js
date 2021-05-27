import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';
import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import {
	Placeholder,
	Button,
	ResizableBox,
	TextControl,
} from '@wordpress/components';

import icon from './icon';
import Controls from './controls';
import Inspector from './inspector';

const { withInlineStyle, GridFlowInspectorControls } = wp.gridflowCompose;

function Edit( { name, isSelected, attributes, setAttributes } ) {
	const { uniqueId, location, height, zoom } = attributes;

	const [ address, setAddress ] = useState( location );

	const getPreviewDeviceType = useSelect( ( select ) => {
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' );

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : false;
	}, [] );

	const getDevice = getPreviewDeviceType ? getPreviewDeviceType.toLowerCase() : 'desktop';

	const getHeight = height?.[ getDevice ] || height?.desktop || '300px';

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

			<div { ...useBlockProps( { className: classnames( 'gridflow-google-map', uniqueId ) } ) }>
				<div className={ classnames( 'gridflow-google-map__inner', 'gridflow-block-inner' ) }>
					<div className={ 'gridflow-google-map__wrapper' }>
						{ location ? (
							<ResizableBox
								size={ { height: getHeight, width: '100%' } }
								minHeight="200"
								enable={ {
									bottom: true,
									left: false,
									right: false,
									top: false,
								} }
								onResizeStop={ ( _event, _direction, _elt, delta ) => {
									const unit = getHeight && getHeight.replace( /[0-9]/g, '' );
									const newHeight = getHeight && parseInt( parseInt( getHeight ) + delta.height, 10 );
									const nextHeight = { ...height };
									nextHeight[ getDevice ] = `${ newHeight || '' }${ unit || '' }`;

									setAttributes( { height: nextHeight } );
								} }
								showHandle={ isSelected }
							>
								<div style={ { width: '100%', height: getHeight, position: 'absolute' } } />
								<div className="gridflow-google-map__iframe-wrapper">
									<iframe
										title={ __( 'Google Map', 'gridflow' ) }
										style={ { height: getHeight } }
										src={ `https://www.google.com/maps?output=embed&q=${ encodeURIComponent( location ) }&z=${ zoom }` }
									/>
								</div>
							</ResizableBox>
						) : (
							<Placeholder
								icon={ icon }
								label={ __( 'Google map', 'gridflow' ) }
								instructions={ __( 'Enter a location or address on a Google map.', 'gridflow' ) }
							>
								<form
									onSubmit={ ( e ) => {
										e.preventDefault();
										setAttributes( { location: address } );
									} }
								>
									<TextControl
										value={ address || '' }
										placeholder={ __( 'Enter for a location or address...', 'gridflow' ) }
										onChange={ ( value ) => setAddress( value ) }
										style={ { height: 36, minWidth: 260 } }
									/>
									<Button
										isPrimary
										onClick={ () => setAttributes( { location: address } ) }
										style={ { height: 36, marginLeft: 10 } }
									>
										{ __( 'Apply', 'gridflow' ) }
									</Button>
								</form>
							</Placeholder>
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
