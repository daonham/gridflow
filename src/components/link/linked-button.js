/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button, Tooltip } from '@wordpress/components';

export default function LinkedButton( { isLinked, ...props } ) {
	const linkedTooltipText = isLinked ? __( 'Show Settings', 'gridflow' ) : __( 'Hide Setting', 'gridflow' );

	return (
		<Tooltip text={ linkedTooltipText }>
			<span>
				<Button
					{ ...props }
					className="component-box-control__linked-button"
					isPrimary={ isLinked }
					isSecondary={ ! isLinked }
					isSmall
					icon={ isLinked ? <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="components-panel__arrow" role="img" aria-hidden="true" focusable="false"><path d="M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"></path></svg> : <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="components-panel__arrow" role="img" aria-hidden="true" focusable="false"><path d="M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"></path></svg> }
					iconSize={ 16 }
				/>
			</span>
		</Tooltip>
	);
}
