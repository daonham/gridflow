import apiFetch from '@wordpress/api-fetch';

const gridflowApi = async ( { path, data, method } ) => {
	const response = await apiFetch( {
		path,
		method: method || 'POST',
		data,
	} );

	const { status, message } = response;

	if ( status === 'fail' ) {
		// eslint-disable-next-line no-console
		console.log( message );
	}
};
export default gridflowApi;
