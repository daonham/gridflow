import { __ } from '@wordpress/i18n';
import { TabPanel } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';

import regular from './lib/font-awesome/regular.json';
import solid from './lib/font-awesome/solid.json';
import brands from './lib/font-awesome/brands.json';

const FontAwesome = ( { search, onChange, closeModal } ) => {
	const [ renderRegular, setRenderRegular ] = useState( null );
	const [ renderSolid, setRenderSolid ] = useState( null );
	const [ renderBrands, setRenderBrands ] = useState( null );

	useEffect( () => {
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
					<div className="gridhub-icon-component__icons">
						{ tab.name === 'all' && (
							<>
								{ renderRegular }
								{ renderSolid }
								{ renderBrands }
							</>
						) }
						{ tab.name === 'regular' && renderRegular }
						{ tab.name === 'solid' && renderSolid }
						{ tab.name === 'brands' && renderBrands }
					</div>
				);
			} }
		</TabPanel>
	);
};
export default FontAwesome;
