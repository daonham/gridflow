const gridflowCounter = () => {
	const counter = document.querySelectorAll( '.gridflow-counter' );

	if ( counter.length > 0 ) {
		if ( 'IntersectionObserver' in window ) {
			const counterObserver = new IntersectionObserver( function( entries, observer ) {
				entries.forEach( function( entry ) {
					if ( entry.isIntersecting ) {
						const element = entry.target,
							ele = element.querySelector( '.gridflow-counter__number__number' ),
							duration = parseInt( ele.dataset.duration ),
							step = parseInt( ele.dataset.step ),
							from = parseInt( ele.dataset.from ),
							to = parseInt( ele.dataset.to );

						const second = duration * step / ( to - from );

						let fromEle = from;
						const id = setInterval( counterFrame, second || '20' );

						function counterFrame() {
							if ( fromEle >= to ) {
								clearInterval( id );
							} else {
								fromEle = fromEle + step;

								if ( fromEle >= to ) {
									ele.textContent = to;
								} else {
									ele.textContent = fromEle;
								}
							}
						}

						counterObserver.unobserve( element );
					}
				} );
			} );

			[ ...counter ].map( ( element ) => {
				return counterObserver.observe( element );
			} );
		}
	}
};
export default gridflowCounter;
