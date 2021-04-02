import { useState } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
import classnames from 'classnames';
import { startCase, toLower } from 'lodash';

import { allDevice } from './utils';

const ResponsiveControl = ( { device, setDevice } ) => {
	const [ visible, setVisible ] = useState( false );
	const [ option, setOption ] = useState( 0 );

	const { __experimentalSetPreviewDeviceType: setPreviewDeviceType } = useDispatch( 'core/edit-post' );

	return (
		<div className="gridflow-reponsive-component">
			<div
				className={ classnames( 'gridflow-reponsive-component__inner', { 'gridflow-reponsive-component__show': visible } ) }
				style={ { '--gridflow-reponsive-top': option } }
			>
				{ allDevice.map( ( val, i ) => {
					return (
						<button
							key={ i }
							className={ classnames(
								`gridflow-reponsive-component__${ val.name }`,
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
									setPreviewDeviceType( startCase( toLower( val.name ) ) );
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
