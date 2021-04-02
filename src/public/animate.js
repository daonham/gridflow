const gridflowAnimate = () => {
	const animates = [ ...document.querySelectorAll( '[data-gridflow-animated]' ) ];

	if ( animates.length > 0 ) {
		if ( 'IntersectionObserver' in window ) {
			const animateObserver = new IntersectionObserver( function( entries, observer ) {
				entries.forEach( function( entry ) {
					if ( entry.isIntersecting ) {
						const animate = entry.target,
							data = animate.dataset.gridflowAnimated;

						let	timeout = 0;

						const { type, delay, speed } = JSON.parse( data );

						if ( type ) {
							if ( delay ) {
								animate.classList.add( `gridflow_animated__delay-${ delay }` );
								timeout += parseInt( delay ) * 1000;
							}

							if ( speed ) {
								animate.classList.add( `gridflow_animated__${ speed }` );

								if ( speed === 'slower' ) {
									timeout += 3000;
								} else if ( speed === 'slow' ) {
									timeout += 2000;
								} else if ( speed === 'fast' ) {
									timeout += 1800;
								} else if ( speed === 'faster' ) {
									timeout += 500;
								}
							} else {
								timeout += 2000;
							}

							const { desktop, tablet, mobile } = type;

							const width = window.innerWidth;

							if ( desktop ) {
								animate.classList.add( 'gridflow__animated', `gridflow-animate__${ desktop }` );
							}

							if ( tablet && width <= 1024 ) {
								animate.classList.remove( 'gridflow__animated', `gridflow-animate__${ desktop }` );
								animate.classList.add( 'gridflow__animated', `gridflow-animate__${ tablet }` );
							}

							if ( mobile && width <= 767 ) {
								animate.classList.remove( 'gridflow__animated', `gridflow-animate__${ desktop }` );
								animate.classList.remove( 'gridflow__animated', `gridflow-animate__${ tablet }` );
								animate.classList.add( 'gridflow__animated', `gridflow-animate__${ mobile }` );
							}

							setTimeout( function() {
								animate.classList.remove( 'gridflow__animated', `gridflow-animate__${ desktop }`, `gridflow-animate__${ tablet }`, `gridflow-animate__${ mobile }`, `gridflow_animated__delay-${ delay }`, `gridflow_animated__${ speed }` );
							}, timeout );
						}

						animateObserver.unobserve( animate );
					}
				} );
			} );

			animates.map( ( ele ) => {
				return animateObserver.observe( ele );
			} );
		}
	}
};
export default gridflowAnimate;
