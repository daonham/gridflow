const gridflowAccordion = () => {
	[ ...document.getElementsByClassName( 'gridflow-accordion__item' ) ].forEach( ( ele ) => {
		const title = ele.querySelector( '.gridflow-accordion__item__title' );
		const content = ele.querySelector( '.gridflow-accordion__item__content' );

		title.addEventListener( 'click', ( e ) => {
			e.preventDefault();

			ele.classList.toggle( 'active' );

			if ( ele.classList.contains( 'active' ) ) {
				content.style.display = 'block';
			} else {
				content.style.display = 'none';
			}
		} );
	} );
};
export default gridflowAccordion;
