/**
 * External dependencies
 */
import classnames from 'classnames';
import { noop } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useInstanceId } from '@wordpress/compose';
import { useState } from '@wordpress/element';
import { MediaUpload } from '@wordpress/block-editor';
import {
	Button,
	Flex,
	FlexItem,
	FlexBlock,
	Modal,
	TextControl,
} from '@wordpress/components';

import { useControlledState } from '../../utils/use-controlled-state';

import FontAwesome from './fontawesome';

function useUniqueId( idProp ) {
	const instanceId = useInstanceId( GridHubIconSelect, 'inspector-gridhub-icon-control' );

	return idProp || instanceId;
}

const DEFAULT_VALUES = {
	icon: null,
	url: null,
	id: null,
	alt: null,
};

const GridHubIconSelect = ( {
	id: idProp,
	label = __( 'Icon' ),
	value: valuesProp,
	onChange = noop,
} ) => {
	const id = useUniqueId( idProp );
	const headingId = `${ id }-heading`;

	const [ values, setValues ] = useControlledState( valuesProp, {
		fallback: DEFAULT_VALUES,
	} );

	const inputValues = values || DEFAULT_VALUES;

	const [ isOpen, setOpen ] = useState( false );
	const openModal = () => setOpen( true );
	const closeModal = () => setOpen( false );

	const handleOnChange = ( nextValues ) => {
		onChange( nextValues );
		setValues( nextValues );
	};

	const onSelectImage = ( media ) => {
		const nextValues = { ...DEFAULT_VALUES };

		nextValues.icon = null;
		nextValues.url = media.url || null;
		nextValues.id = media.id || null;
		nextValues.alt = media.alt || null;

		handleOnChange( nextValues );
	};

	const onChangeIcon = ( nextIcon ) => {
		const nextValues = { ...DEFAULT_VALUES };

		nextValues.icon = nextIcon;

		handleOnChange( nextValues );
	};

	const handleOnReset = () => {
		const initialValues = DEFAULT_VALUES;

		onChange( initialValues );
		setValues( initialValues );
	};

	const [ search, setSearch ] = useState( '' );
	const [ tab, setTab ] = useState( 'fontawesome' );

	const allTabs = [
		{ label: __( 'Font Awesome' ), value: 'fontawesome' },
	];

	return (
		<>
			<div id={ id } className="gridhub-icon-component">
				<p
					id={ headingId }
					style={ { paddingBottom: 8 } }
					className="gridhub-control__label gridhub-icon-component__label"
				>
					{ label }
				</p>

				<div className="gridhub-icon-component__preview">
					{ ( inputValues.url || inputValues.icon ) && (
						<div className="gridhub-icon-component__preview__inner">
							{ inputValues.url && (
								<img src={ values.url } alt="" />

							) }

							{ inputValues.icon && (
								<i className={ inputValues.icon } />
							) }
						</div>
					) }

					<div>
						<Flex align={ 'flex-start' }>
							<FlexBlock>
								<TextControl
									value={ inputValues.icon || '' }
									onChange={ ( e ) => onChangeIcon( e ) }
								/>
							</FlexBlock>

							<FlexItem>
								<Button
									className="gridhub-icon-component__reset"
									isSecondary
									label={ 'Reset' }
									onClick={ () => handleOnReset() }
									style={ { height: 30, minHeight: 30 } }
								>
									{ 'Reset' }
								</Button>
							</FlexItem>
						</Flex>
					</div>
				</div>

				<Flex
					className="gridhub-icon-component__content"
					align="flex-start"
					justify="flex-start"
					gap={ 2 }
				>
					<FlexItem>
						<Button
							isSecondary
							label={ __( 'Icon Library', 'gridhub' ) }
							onClick={ openModal }
						>
							{ __( 'Icon Library', 'gridhub' ) }
						</Button>
					</FlexItem>

					<FlexItem>
						<MediaUpload
							value={ inputValues.id }
							onSelect={ ( media ) => onSelectImage( media ) }
							allowedTypes={ [ 'image' ] }
							render={ ( { open } ) => (
								<Button
									label={ __( 'Upload SVG, PNG, JPG', 'gridhub' ) }
									isSecondary
									onClick={ open }
								>
									{ __( 'Upload', 'gridhub' ) }
								</Button>
							) }
						/>
					</FlexItem>
				</Flex>

				{ isOpen && (
					<Modal
						title={ __( 'Icon Library', 'gridhub' ) }
						onRequestClose={ closeModal }
					>
						<div className="gridhub-icon-component__modal">
							<div className="gridhub-icon-component__modal__inner">

								<div className="gridhub-icon-component__modal__sidebar">
									<div className="gridhub-icon-component__modal__sidebar-inner">
										<div className="gridhub-icon-component__modal__sidebar-link">
											<h3>{ __( 'Select Icons', 'gridhub' ) }</h3>
										</div>

										{ allTabs.map( ( alltab ) => {
											return (
												<div className="gridhub-icon-component__modal__sidebar-link" key={ alltab.value }>
													<button
														className={ classnames( { 'gridhub-tab-active': alltab.value === tab } ) }
														label={ alltab.label }
														onClick={ () => setTab( alltab.value ) }
													>
														{ alltab.label }
													</button>
												</div>
											);
										} ) }
									</div>
								</div>

								<div className="gridhub-icon-component__modal__content">
									<div className="gridhub-icon-component__modal__search">
										<TextControl
											placeholder={ __( 'Search for icon...', 'gridhub' ) }
											value={ search }
											onChange={ ( e ) => setSearch( e ) }
											style={ { fontSize: 14 } }
										/>
									</div>

									<div>
										{ tab === 'fontawesome' && <FontAwesome search={ search } onChange={ onChangeIcon } closeModal={ closeModal } /> }
									</div>
								</div>
							</div>
						</div>
					</Modal>
				) }
			</div>
		</>
	);
};

export default GridHubIconSelect;
