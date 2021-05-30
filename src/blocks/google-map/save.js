/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { uniqueId, location, zoom } = attributes;

	return (
		<div { ...useBlockProps.save( { className: classnames( 'gridflow-google-map', uniqueId ) } ) }>
			<div className={ classnames( 'gridflow-google-map__inner', 'gridflow-block-inner' ) }>
				<div className={ 'gridflow-google-map__wrapper' }>
					<div className="gridflow-google-map__iframe-wrapper">
						<iframe
							title={ __( 'Google Map', 'gridflow' ) }
							allowFullScreen=""
							loading="lazy"
							src={ `https://maps.google.com/maps?output=embed&q=${ encodeURIComponent( location ) }&z=${ zoom }` }
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
