const gridflowAccordion = () => {
	[ ...document.querySelectorAll( '.gridflow-accordion' ) ].forEach( ( element ) => {
		const items = [ ...element.querySelectorAll( '.gridflow-accordion__item' ) ],
			wrapper = element.querySelector( '.gridflow-accordion__wrapper' );

		if ( ! wrapper || items.length === 0 ) {
			return;
		}

		if ( ! wrapper.classList.contains( 'gridflow-accordion__wrapper--close' ) ) {
			items[ 0 ].classList.add( 'active' );
			items[ 0 ].querySelector( '.gridflow-accordion__item__content' ).style.display = 'block';
		}

		items.forEach( ( ele ) => {
			const title = ele.querySelector( '.gridflow-accordion__item__title' );
			const content = ele.querySelector( '.gridflow-accordion__item__content' );

			title.addEventListener( 'click', ( e ) => {
				e.preventDefault();

				if ( ! wrapper.classList.contains( 'gridflow-accordion__wrapper--collapse' ) ) {
					items.forEach( ( item ) => {
						item.classList.remove( 'active' );
						item.querySelector( '.gridflow-accordion__item__content' ).style.display = 'none';
					} );
				}

				ele.classList.toggle( 'active' );

				if ( ele.classList.contains( 'active' ) ) {
					content.style.display = 'block';
				} else {
					content.style.display = 'none';
				}
			} );
		} );
	} );
};
export default gridflowAccordion;
