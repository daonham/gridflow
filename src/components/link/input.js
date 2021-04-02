import { noop, isEmpty } from 'lodash';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { FlexItem, Flex, FlexBlock, TextControl, ToggleControl } from '@wordpress/components';

import LinkedButton from './linked-button';

const TextInputControl = ( {
	id,
	headingId,
	label,
	values,
	onChange = noop,
	...props
} ) => {
	const handleOnChange = ( nextValues ) => {
		onChange( nextValues );
	};

	const createHandleOnChange = ( side ) => ( next ) => {
		const nextValues = { ...values };

		if ( side === 'target' ) {
			nextValues[ side ] = ! values.target;

			if ( nextValues.target ) {
				nextValues.rel = 'noreferrer noopener';
			}
		} else {
			nextValues[ side ] = next;
		}

		handleOnChange( nextValues );
	};

	const defaultLinked = () => {
		if ( isEmpty( Object.values( values.rel ).filter( Boolean ) ) ) {
			return true;
		}

		return false;
	};

	const [ isLinked, setIsLinked ] = useState( defaultLinked );

	const toggleLinked = () => {
		setIsLinked( ! isLinked );
	};

	return (
		<>
			<div id={ id } className="gridflow-control gridflow-link-control" role="region" aria-labelledby={ headingId }>

				<p
					id={ headingId }
					className="gridflow-control__label gridflow-link-control__label"
					style={ { marginBottom: 8 } }
				>
					{ label || __( 'Link', 'gridflow' ) }
				</p>

				<Flex className="gridflow-control__header gridflow-link-control__content" align="flex-start">
					<FlexBlock>
						<TextControl
							value={ values.url }
							onChange={ createHandleOnChange( 'url' ) }
							placeholder={ __( 'Enter for URL', 'gridflow' ) }
							style={ { height: 31 } }
							{ ...props }
						/>
					</FlexBlock>

					<FlexItem>
						<LinkedButton
							onClick={ toggleLinked }
							isLinked={ isLinked }
							style={ { height: 31 } }
						/>
					</FlexItem>
				</Flex>

				{ ! isLinked && (
					<>
						<ToggleControl
							label={ __( 'Open in new tab', 'gridflow' ) }
							checked={ values.target }
							onChange={ createHandleOnChange( 'target' ) }
						/>
						<TextControl
							label={ __( 'Link rel', 'gridflow' ) }
							value={ values.rel }
							onChange={ createHandleOnChange( 'rel' ) }
							placeholder={ __( 'noreferrer noopener', 'gridflow' ) }
						/>
					</>
				) }
			</div>
		</>
	);
};
export default TextInputControl;
