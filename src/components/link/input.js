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
		} else {
			nextValues[ side ] = next;
		}

		handleOnChange( nextValues );
	};

	const defaultLinked = () => {
		if ( isEmpty( Object.values( values.attr ).filter( Boolean ) ) ) {
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
			<div id={ id } className="gridhub-control gridhub-link-control" role="region" aria-labelledby={ headingId }>

				<p
					id={ headingId }
					className="gridhub-control__label gridhub-link-control__label"
					style={ { marginBottom: 8 } }
				>
					{ label || __( 'Link', 'gridhub' ) }
				</p>

				<Flex className="gridhub-control__header gridhub-link-control__content" align="flex-start">
					<FlexBlock>
						<TextControl
							value={ values.url }
							onChange={ createHandleOnChange( 'url' ) }
							placeholder={ __( 'Enter for URL', 'gridhub' ) }
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
							label={ __( 'Open in new tab', 'gridhub' ) }
							checked={ values.target }
							onChange={ createHandleOnChange( 'target' ) }
						/>
						<TextControl
							label={ __( 'Custom Attributes', 'gridhub' ) }
							value={ values.attr }
							onChange={ createHandleOnChange( 'attr' ) }
							placeholder={ __( 'rel="noreferrer noopener", data="id"', 'gridhub' ) }
						/>
					</>
				) }
			</div>
		</>
	);
};
export default TextInputControl;
