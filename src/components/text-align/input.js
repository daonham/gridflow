import { noop } from 'lodash';

import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { FlexItem, Flex, FlexBlock, ButtonGroup, Button } from '@wordpress/components';

import ResponsiveControl from '../../utils/responsive';

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

	const createHandleOnChange = ( side, next ) => {
		const nextValues = { ...values };

		if ( nextValues[ side ] === next ) {
			nextValues[ side ] = null;
		} else {
			nextValues[ side ] = next;
		}

		handleOnChange( nextValues );
	};

	const getPreviewDeviceType = useSelect( ( select ) => {
		const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' );

		return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : false;
	}, [] );

	const [ device, setDevice ] = useState( 'desktop' );

	const getDevice = getPreviewDeviceType ? getPreviewDeviceType.toLowerCase() : device;

	return (
		<>
			<div id={ id } className="gridhub-control gridhub-text-align-control" role="region" aria-labelledby={ headingId }>
				<Flex
					className="gridhub-control__header gridhub-text-align-control__header"
					justify="flex-start"
				>
					<FlexItem>
						<p id={ headingId } className="gridhub-control__label gridhub-text-align-control__label">{ label || __( 'Text Align', 'gridhub' ) }</p>
					</FlexItem>

					<FlexItem>
						<ResponsiveControl
							device={ getDevice }
							setDevice={ setDevice }
						/>
					</FlexItem>

					<FlexBlock style={ { textAlign: 'right' } }>
						<ButtonGroup>
							<Button
								{ ...props }
								label={ __( 'Left', 'gridhub' ) }
								className="gridhub-text-align-control__button"
								isPrimary={ values[ getDevice ] === 'left' || undefined }
								onClick={ () => createHandleOnChange( [ getDevice ], 'left' ) }
								icon={ 'editor-alignleft' }
							/>
							<Button
								{ ...props }
								label={ __( 'Center', 'gridhub' ) }
								className="gridhub-text-align-control__button"
								isPrimary={ values[ getDevice ] === 'center' || undefined }
								onClick={ () => createHandleOnChange( [ getDevice ], 'center' ) }
								icon={ 'editor-aligncenter' }
							/>
							<Button
								{ ...props }
								label={ __( 'Right', 'gridhub' ) }
								className="gridhub-text-align-control__button"
								isPrimary={ values[ getDevice ] === 'right' || undefined }
								onClick={ () => createHandleOnChange( [ getDevice ], 'right' ) }
								icon={ 'editor-alignright' }
							/>
							<Button
								{ ...props }
								label={ __( 'Justified', 'gridhub' ) }
								className="gridhub-text-align-control__button"
								isPrimary={ values[ getDevice ] === 'justify' || undefined }
								onClick={ () => createHandleOnChange( [ getDevice ], 'justify' ) }
								icon={ 'editor-justify' }
							/>
						</ButtonGroup>
					</FlexBlock>
				</Flex>
			</div>
		</>
	);
};
export default TextInputControl;
