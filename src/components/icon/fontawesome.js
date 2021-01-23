import { __ } from '@wordpress/i18n';
import { TabPanel, Spinner } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';

import regular from './lib/font-awesome/regular.json';
import solid from './lib/font-awesome/solid.json';
import brands from './lib/font-awesome/brands.json';

const FontAwesome = ( { search, onChange, closeModal } ) => {
	const [ renderRegular, setRenderRegular ] = useState( null );
	const [ renderSolid, setRenderSolid ] = useState( null );
	const [ renderBrands, setRenderBrands ] = useState( null );

	const [ loading, setLoading ] = useState( true );

	useEffect( () => {
		if ( search ) {
			setLoading( true );
		}

		const timer = setTimeout( () => {
			setRenderRegular(
				regular.icons.map( ( icon ) => {
					if ( ! search || icon.toLowerCase().includes( search.toLowerCase() ) ) {
						return (
							<div className="gridhub-icon-component__icon" key={ icon }>
								<button onClick={ () => {
									onChange( `far fa-${ icon }` );
									closeModal();
								} }>
									<i className={ `far fa-${ icon }` } />
									<span>{ icon }</span>
								</button>
							</div>
						);
					}

					return null;
				} )
			);

			setRenderSolid(
				solid.icons.map( ( icon ) => {
					if ( ! search || icon.toLowerCase().includes( search.toLowerCase() ) ) {
						return (
							<div className="gridhub-icon-component__icon" key={ icon }>
								<button onClick={ () => {
									onChange( `fas fa-${ icon }` );
									closeModal();
								} }>
									<i className={ `fas fa-${ icon }` } />
									<span>{ icon }</span>
								</button>
							</div>
						);
					}

					return null;
				} )
			);

			setRenderBrands(
				brands.icons.map( ( icon ) => {
					if ( ! search || icon.toLowerCase().includes( search.toLowerCase() ) ) {
						return (
							<div className="gridhub-icon-component__icon" key={ icon }>
								<button onClick={ () => {
									onChange( `fab fa-${ icon }` );
									closeModal();
								} }>
									<i className={ `fab fa-${ icon }` } />
									<span>{ icon }</span>
								</button>
							</div>
						);
					}

					return null;
				} )
			);

			setLoading( false );
		}, 1000 );

		return () => clearTimeout( timer );
	}, [ search ] );

	const tabs = [
		{
			name: 'all',
			title: __( 'All', 'gridhub' ),
		},
		{
			name: 'regular',
			title: __( 'Regular', 'gridhub' ),
		},
		{
			name: 'solid',
			title: __( 'Solid', 'gridhub' ),
		},
		{
			name: 'brands',
			title: __( 'Brands', 'gridhub' ),
		},
	];

	return (
		<TabPanel className="gridhub-icon-tab-panel"
			activeClass="is-active"
			orientation="horizontal"
			tabs={ tabs }
		>

			{ ( tab ) => {
				return (
					<>
						{ loading ? (
							<Spinner />
						) : (
							<>
								<div className="gridhub-icon-component__icons" style={ { display: ( tab.name === 'all' || tab.name === 'regular' ) || 'none' } }>
									{ renderRegular }
								</div>

								<div className="gridhub-icon-component__icons" style={ { display: ( tab.name === 'all' || tab.name === 'solid' ) || 'none' } }>
									{ renderSolid }
								</div>

								<div className="gridhub-icon-component__icons" style={ { display: ( tab.name === 'all' || tab.name === 'brands' ) || 'none' } }>
									{ renderBrands }
								</div>
							</>
						) }
					</>
				);
			} }
		</TabPanel>
	);
};
export default FontAwesome;
