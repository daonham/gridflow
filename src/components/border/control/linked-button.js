/**
 * WordPress dependencies
 */
import { link, linkOff } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { Button, Tooltip } from '@wordpress/components';

export default function LinkedButton( { isLinked, ...props } ) {
	const linkedTooltipText = isLinked
		? __( 'Unlink Sides', 'gridflow' )
		: __( 'Link Sides', 'gridflow' );

	return (
		<Tooltip text={ linkedTooltipText }>
			<span>
				<Button
					{ ...props }
					className="component-box-control__linked-button"
					isPrimary={ isLinked }
					isSecondary={ ! isLinked }
					isSmall
					icon={ isLinked ? link : linkOff }
					iconSize={ 16 }
				/>
			</span>
		</Tooltip>
	);
}
