import { useState } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
import classnames from 'classnames';

import { allDevice } from './utils';

const ResponsiveControl = ( { device, setDevice } ) => {
	const [ visible, setVisible ] = useState( false );
	const [ option, setOption ] = useState( 0 );

	const { __experimentalSetPreviewDeviceType: setPreviewDeviceType } = useDispatch( 'core/edit-post' );

	return (
		<div className="gridhub-reponsive-component">
			<div
				className={ classnames( 'gridhub-reponsive-component__inner', { 'gridhub-reponsive-component__show': visible } ) }
				style={ { '--gridhub-reponsive-top': option } }
			>
				{ allDevice.map( ( val, i ) => {
					return (
						<button
							key={ i }
							className={ classnames(
								`gridhub-reponsive-component__${ val.name }`,
								{ 'is-active': device === val.name },
								{ 'is-hidden': visible === false && ( device !== val.name ) },
							) }
							onClick={ () => {
								if ( device === val.name ) {
									if ( visible ) {
										setVisible( false );
									} else {
										setVisible( true );
									}
								} else {
									setVisible( false );
									setDevice( val.name );
									setOption( i );
									setPreviewDeviceType( val.name.replace( /\b\w/g, ( l ) => l.toUpperCase() ) );
								}
							} }
							dangerouslySetInnerHTML={ { __html: val.icon } }
						/>
					);
				} ) }
			</div>
		</div>
	);
};
export default ResponsiveControl;
