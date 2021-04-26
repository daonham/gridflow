const gridflowCounter = () => {
	const counter = document.querySelectorAll( '.gridflow-counter' );

	if ( counter.length > 0 ) {
		if ( 'IntersectionObserver' in window ) {
			const counterObserver = new IntersectionObserver( function( entries, observer ) {
				entries.forEach( function( entry ) {
					if ( entry.isIntersecting ) {
						const element = entry.target,
							ele = element.querySelector( '.gridflow-counter__number__number' ),
							data = JSON.parse( ele.dataset.counter ),
							duration = parseInt( data?.duration ),
							step = parseInt( data?.step ),
							from = parseInt( data?.from ),
							to = parseInt( data?.to ),
							delimiter = data?.delimiter;

						const second = duration * step / ( to - from );

						let fromEle = from;
						const id = setInterval( counterFrame, second || '20' );

						function counterFrame() {
							if ( fromEle >= to ) {
								clearInterval( id );
							} else {
								fromEle = fromEle + step;

								if ( fromEle >= to ) {
									ele.textContent = format( to );
								} else {
									ele.textContent = format( fromEle );
								}
							}
						}

						const format = ( value ) => {
							if ( delimiter ) {
								return value.toString().replace( /\B(?=(\d{3})+(?!\d))/g, delimiter );
							}
							return value;
						};

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
