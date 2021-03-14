import { noop } from 'lodash';
import { __ } from '@wordpress/i18n';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import {
	ButtonGroup,
	Button,
	TextControl,
	FlexItem,
	Flex,
} from '@wordpress/components';

import { useControlledState } from '../../utils/use-controlled-state';
import GridHubSelect from '../select';
import GridHubColorPicker from '../color';
import GridHubFocusPointPicker from '../focus-point';

const DEFAULT_VALUES = {
	type: 'classic',
	color: undefined,
	image: null,
	position: undefined,
	attachment: undefined,
	repeat: null,
	size: null,
	gradient: undefined,
};

const GridHubBackground = ( {
	values: valuesProp,
	onChange = noop,
} ) => {
	const [ values, setValues ] = useControlledState( valuesProp, {
		fallback: DEFAULT_VALUES,
	} );

	const inputValues = values || DEFAULT_VALUES;

	const handleOnChange = ( nextValues ) => {
		onChange( nextValues );
		setValues( nextValues );
	};

	const createHandleOnChange = ( side ) => ( next ) => {
		const nextValues = { ...inputValues };

		nextValues[ side ] = next;

		handleOnChange( nextValues );
	};

	const onChangeType = ( side, next ) => {
		const nextValues = { ...inputValues };

		nextValues[ side ] = next;

		handleOnChange( nextValues );
	};

	console.log( inputValues );

	return (
		<>
			<ButtonGroup>
				<Button
					isSmall
					isPrimary={ inputValues.type === 'classic' }
					onClick={ () => onChangeType( 'type', 'classic' ) }
				>
					{ 'Classic' }
				</Button>
				<Button
					isSmall
					isPrimary={ inputValues.type === 'gradient' }
					onClick={ () => onChangeType( 'type', 'gradient' ) }
				>
					{ 'Gradient' }
				</Button>
			</ButtonGroup>

			{ inputValues.type === 'classic' && (
				<>
					<GridHubColorPicker
						label={ __( 'Color', 'gridhub' ) }
						value={ inputValues.color }
						alpha={ true }
						onChange={ createHandleOnChange( 'color' ) }
					/>

					<p className="gridhub-control__label">{ __( 'Image', 'gridhub' ) }</p>
					<Flex style={ { marginBottom: 10 } } align="flex-start">
						<FlexItem>
							<TextControl
								label={ null }
								value={ inputValues.image }
								onChange={ createHandleOnChange( 'image' ) }
								placeholder="https://"
								style={ { marginBottom: 0 } }
							/>
						</FlexItem>
						<FlexItem>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ ( media ) => onChangeType( 'image', media.url ) }
									allowedTypes={ [ 'image' ] }
									value={ inputValues.image }
									render={ ( { open } ) => (
										<Button onClick={ open } isSecondary style={ { height: 31 } }>
											{ ! inputValues.image ? __( 'Upload', 'gridhub' ) : __( 'Replace', 'gridhub' ) }
										</Button>
									) }
								/>
							</MediaUploadCheck>
						</FlexItem>
					</Flex>

					{ inputValues.image && (
						<>
							<GridHubFocusPointPicker
								label={ __( 'Position', 'gridhub' ) }
								url={ inputValues.image }
								value={ inputValues.position }
								onChange={ createHandleOnChange( 'position' ) }
							/>
							<Flex gap={ 8 } justify={ 'flex-start' } align={ 'flex-start' }>
								<FlexItem>
									<GridHubSelect
										label={ __( 'Attachment', 'gridhub' ) }
										values={ inputValues.attachment }
										options={ [
											{ label: 'Default', value: '' },
											{ label: 'Scroll', value: 'scroll' },
											{ label: 'Fixed', value: 'fixed' },
										] }
										onChange={ createHandleOnChange( 'attachment' ) }
									/>
								</FlexItem>
								<FlexItem>
									<GridHubSelect
										label={ __( 'Repeat', 'gridhub' ) }
										values={ inputValues.repeat }
										options={ [
											{ label: 'Default', value: '' },
											{ label: 'No Repeat', value: 'no-repeat' },
											{ label: 'Repeat', value: 'repeat' },
											{ label: 'Repeat', value: 'repeat' },
											{ label: 'Repeat X', value: 'repeat-x' },
											{ label: 'Repeat Y', value: 'repeat-y' },
										] }
										onChange={ createHandleOnChange( 'repeat' ) }
									/>
								</FlexItem>
							</Flex>

							<GridHubSelect
								label={ __( 'Size', 'gridhub' ) }
								values={ inputValues.size }
								options={ [
									{ label: 'Default', value: '' },
									{ label: 'Auto', value: 'auto' },
									{ label: 'Cover', value: 'cover' },
									{ label: 'Contain', value: 'contain' },
								] }
								onChange={ createHandleOnChange( 'size' ) }
							/>
						</>
					) }
				</>
			) }
		</>
	);
};
export default GridHubBackground;
