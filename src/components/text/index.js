import classnames from 'classnames';

import { useInstanceId } from '@wordpress/compose';
import { useState, forwardRef } from '@wordpress/element';

const TextInput = ( { label, type = 'text', className, style, value, onChange, ...props }, ref ) => {
	const instanceId = useInstanceId( TextInput );

	const [ device, setDevice ] = useState( 'desktop' );

	const id = `gridhub-text-input-component-${ instanceId }`;

	const allDevice = [
		{ name: 'desktop', icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z" /></svg>' },
		{ name: 'tablet', icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M18.5 0h-14C3.12 0 2 1.12 2 2.5v19C2 22.88 3.12 24 4.5 24h14c1.38 0 2.5-1.12 2.5-2.5v-19C21 1.12 19.88 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z" /></svg>' },
		{ name: 'mobile', icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" /></svg>' },
	];

	return (
		<>
			<div className={ classnames( className, 'gridhub-text-input-component', 'gridhub-button-component', 'gridhub-enable-reponsive-component' ) }>
				{ allDevice.map( ( val, i ) => {
					if ( val.name === device ) {
						return (
							<label key={ i } htmlFor={ id + `-${ val.name }` } className="gridhub-text-input-component__label">{ label }</label>
						);
					}

					return null;
				} ) }

				<div className="gridhub-reponsive-component">
					<div className="gridhub-reponsive-component__inner">
						{ allDevice.map( ( val, i ) => {
							return (
								<button
									key={ i }
									className={ classnames( `gridhub-reponsive-component__${ val.name }`, { 'is-active': device === val.name } ) }
									onClick={ () => {
										setDevice( val.name );
									} }
									dangerouslySetInnerHTML={ { __html: val.icon } }
								/>
							);
						} ) }
					</div>
				</div>

				{ allDevice.map( ( val, i ) => {
					if ( val.name === device ) {
						return (
							<div className="gridhub-text-input-component__content" key={ i }>
								<input
									id={ id + `-${ val.name }` }
									type={ type }
									className="gridhub-text-input-component__input gridhub-button-component__inner"
									value={ value[ val.name ] || '' }
									onChange={ ( event ) => onChange(
										{
											desktop: device === 'desktop' ? event.target.value : value.desktop,
											tablet: device === 'tablet' ? event.target.value : value.tablet,
											mobile: device === 'mobile' ? event.target.value : value.mobile,
										}
									) }
									style={ style }
									ref={ ref }
									{ ...props }
								/>
							</div>
						);
					}

					return null;
				} ) }

			</div>
		</>
	);
};
export default forwardRef( TextInput );
