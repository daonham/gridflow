const gridflowAlert = () => {
	const dismiss = document.querySelectorAll( '.gridflow-alert__dismiss' );

	if ( dismiss.length > 0 ) {
		dismiss.forEach( ( ele ) => {
			ele.addEventListener( 'click', ( e ) => {
				e.preventDefault();

				const alert = ele?.parentNode?.parentNode?.parentNode?.parentNode;

				if ( alert && alert.classList.contains( 'gridflow-alert' ) ) {
					alert.style.display = 'none';
				}
			} );
		} );
	}
};
export default gridflowAlert;
