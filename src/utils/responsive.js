import { useState } from '@wordpress/element';
import classnames from 'classnames';

import { allDevice } from './ultils';

const ResponsiveControl = ( { device, setDevice } ) => {
	const [ visible, setVisible ] = useState( false );
	const [ option, setOption ] = useState( 0 );

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
