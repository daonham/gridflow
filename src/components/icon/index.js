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
	const instanceId = useInstanceId(
		GridFlowIconSelect,
		'inspector-gridflow-icon-control'
	);

	return idProp || instanceId;
}

const DEFAULT_VALUES = {
	icon: null,
	url: null,
	id: null,
	alt: null,
};

const GridFlowIconSelect = ( {
	id: idProp,
	label = __( 'Icon' ),
	values: valuesProp,
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

	const allTabs = [ { label: __( 'Font Awesome' ), value: 'fontawesome' } ];

	return (
		<>
			<div id={ id } className="gridflow-icon-component">
				<p id={ headingId } style={ { paddingBottom: 8 } } className="gridflow-control__label gridflow-icon-component__label" >
					{ label }
				</p>

				<div className="gridflow-icon-component__preview">
					{ ( inputValues.url || inputValues.icon ) && (
						<div className="gridflow-icon-component__preview__inner">
							{ inputValues.url && <img src={ values.url } alt="" /> }

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
									label={ __( 'Icon Library', 'gridflow' ) }
									icon={ <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" > <g> <rect fill="none" height="24" width="24" /> </g> <g> <path d="M14,10H3v2h11V10z M14,6H3v2h11V6z M18,14v-4h-2v4h-4v2h4v4h2v-4h4v-2H18z M3,16h7v-2H3V16z" /> </g> </svg> }
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
											label={ __( 'Upload SVG, PNG, JPG', 'gridflow' ) }
											isSecondary
											onClick={ open }
											icon={ <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z" /></g></svg> }
											style={ { height: 30, minHeight: 30 } }
										/>
									) }
								/>
							</FlexItem>

							<FlexItem>
								<Button
									className="gridflow-icon-component__reset"
									isSecondary
									label={ 'Reset' }
									onClick={ () => handleOnReset() }
									icon={ <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" > <path d="M0 0h24v24H0z" fill="none" /> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z" /> </svg> }
									style={ { height: 30, minHeight: 30 } }
								/>
							</FlexItem>
						</Flex>
					</div>
				</div>

				{ isOpen && (
					<Modal
						title={ __( 'Icon Library', 'gridflow' ) }
						onRequestClose={ closeModal }
					>
						<div className="gridflow-icon-component__modal">
							<div className="gridflow-icon-component__modal__inner">
								<div className="gridflow-icon-component__modal__sidebar">
									<div className="gridflow-icon-component__modal__sidebar-inner">
										<div className="gridflow-icon-component__modal__sidebar-link">
											<h3>{ __( 'Select Icons', 'gridflow' ) }</h3>
										</div>

										{ allTabs.map( ( alltab ) => {
											return (
												<div className="gridflow-icon-component__modal__sidebar-link" key={ alltab.value } >
													<button
														className={ classnames( { 'gridflow-tab-active': alltab.value === tab } ) }
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

								<div className="gridflow-icon-component__modal__content">
									<div className="gridflow-icon-component__modal__search">
										<TextControl
											placeholder={ __( 'Search for icon...', 'gridflow' ) }
											value={ search }
											onChange={ ( e ) => setSearch( e ) }
											style={ { fontSize: 14 } }
										/>
									</div>

									<div>
										{ tab === 'fontawesome' && (
											<FontAwesome
												search={ search }
												onChange={ onChangeIcon }
												closeModal={ closeModal }
											/>
										) }
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

export default GridFlowIconSelect;
