import { noop } from 'lodash';
import { __ } from '@wordpress/i18n';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import {
	ButtonGroup,
	Button,
	TextControl,
	FlexItem,
	Flex,
	GradientPicker,
} from '@wordpress/components';

import { useControlledState } from '../../utils/use-controlled-state';
import GridFlowSelect from '../select';
import GridFlowColorPicker from '../color';
import GridFlowFocusPointPicker from '../focus-point';

const DEFAULT_VALUES = {
	type: 'classic',
	color: undefined,
	image: undefined,
	position: undefined,
	attachment: undefined,
	repeat: undefined,
	size: undefined,
	gradient: undefined,
};

const GridFlowBackground = ( { label, values: valuesProp, onChange = noop } ) => {
	const [ values, setValues ] = useControlledState( valuesProp, {
		fallback: DEFAULT_VALUES,
	} );

	const inputValues = values || DEFAULT_VALUES;

	const colorGradientSettings = useSelect( ( select ) => {
		const settings = select( 'core/block-editor' ).getSettings();
		return settings;
	} );

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

	return (
		<>
			<div className="gridflow-background-control">
				<Flex style={ { marginBottom: 10 } }>
					<FlexItem>
						<p className="gridflow-control__label">
							{ label || __( 'Background type', 'gridflow' ) }
						</p>
					</FlexItem>
					<FlexItem>
						<ButtonGroup>
							<Button
								isSmall
								isPrimary={ inputValues.type === 'classic' }
								onClick={ () => onChangeType( 'type', 'classic' ) }
								style={ { fontSize: 12 } }
							>
								{ __( 'Classic', 'gridflow' ) }
							</Button>
							<Button
								isSmall
								isPrimary={ inputValues.type === 'gradient' }
								onClick={ () => onChangeType( 'type', 'gradient' ) }
								style={ { fontSize: 12 } }
							>
								{ __( 'Gradient', 'gridflow' ) }
							</Button>
						</ButtonGroup>
					</FlexItem>
				</Flex>

				{ inputValues.type === 'classic' && (
					<>
						<GridFlowColorPicker
							label={ __( 'Color', 'gridflow' ) }
							value={ inputValues.color }
							alpha={ true }
							onChange={ createHandleOnChange( 'color' ) }
						/>

						<p className="gridflow-control__label">
							{ __( 'Image', 'gridflow' ) }
						</p>

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
											<Button onClick={ open } isSecondary style={ { height: 31 } } >
												{ ! inputValues.image ? __( 'Upload', 'gridflow' ) : __( 'Replace', 'gridflow' ) }
											</Button>
										) }
									/>
								</MediaUploadCheck>
							</FlexItem>
						</Flex>

						{ inputValues.image && (
							<>
								<GridFlowFocusPointPicker
									label={ __( 'Position', 'gridflow' ) }
									url={ inputValues.image }
									values={ inputValues.position }
									onChange={ createHandleOnChange( 'position' ) }
								/>
								<Flex gap={ 8 } justify={ 'flex-start' } align={ 'flex-start' } >
									<FlexItem>
										<GridFlowSelect
											label={ __( 'Attachment', 'gridflow' ) }
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
										<GridFlowSelect
											label={ __( 'Repeat', 'gridflow' ) }
											values={ inputValues.repeat }
											options={ [
												{ label: 'Default', value: '' },
												{ label: 'No Repeat', value: 'no-repeat' },
												{ label: 'Repeat', value: 'repeat' },
												{ label: 'Repeat X', value: 'repeat-x' },
												{ label: 'Repeat Y', value: 'repeat-y' },
											] }
											onChange={ createHandleOnChange( 'repeat' ) }
										/>
									</FlexItem>
								</Flex>

								<GridFlowSelect
									label={ __( 'Size', 'gridflow' ) }
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

				{ inputValues.type === 'gradient' && (
					<GradientPicker
						value={ inputValues.gradient }
						onChange={ createHandleOnChange( 'gradient' ) }
						disableCustomGradients={ false }
						gradients={ colorGradientSettings?.gradients }
					/>
				) }
			</div>
		</>
	);
};
export default GridFlowBackground;
