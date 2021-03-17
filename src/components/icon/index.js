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
		nextValues.url = null;

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
									placeholder={ 'far fa-star' }
								/>
							</FlexBlock>
							<FlexItem>
								<Button
									isSecondary
									label={ __( 'Icon Library', 'gridhub' ) }
									icon={ <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20"><g><rect fill="none" height="24" width="24" /></g><g><path d="M14,10H3v2h11V10z M14,6H3v2h11V6z M18,14v-4h-2v4h-4v2h4v4h2v-4h4v-2H18z M3,16h7v-2H3V16z" /></g></svg> }
									onClick={ openModal }
									style={ { height: 30, minHeight: 30 } }
								/>
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
											icon={ <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none" /><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" /></svg> }
											style={ { height: 30, minHeight: 30 } }
										/>
									) }
								/>
							</FlexItem>

							<FlexItem>
								<Button
									className="gridhub-icon-component__reset"
									isSecondary
									label={ 'Reset' }
									onClick={ () => handleOnReset() }
									icon={ <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z" /></svg> }
									style={ { height: 30, minHeight: 30 } }
								/>
							</FlexItem>
						</Flex>
					</div>
				</div>

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
