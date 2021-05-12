/* eslint-disable no-console */
import apiFetch from '@wordpress/api-fetch';

const gridflowApi = async ( { path, data, method } ) => {
	try {
		const response = await apiFetch( {
			path,
			method: method || 'POST',
			data,
		} );

		const { status, message } = response;

		if ( status === 'fail' ) {
			console.log( message || 'GridFlow: Call API Request Fail!' );
		}
	} catch ( error ) {
		console.log( error.message );
	}
};
export default gridflowApi;
