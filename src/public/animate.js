const gridhubAnimate = () => {
	const animates = [ ...document.querySelectorAll( '[data-gridhub-animated]' ) ];

	if ( animates.length > 0 ) {
		if ( 'IntersectionObserver' in window ) {
			const animateObserver = new IntersectionObserver( function( entries, observer ) {
				entries.forEach( function( entry ) {
					if ( entry.isIntersecting ) {
						const animate = entry.target,
							data = animate.dataset.gridhubAnimated;

						let	timeout = 0;

						const { type, delay, speed } = JSON.parse( data );

						if ( type ) {
							if ( delay ) {
								animate.classList.add( `gridhub_animated__delay-${ delay }` );
								timeout += parseInt( delay ) * 1000;
							}

							if ( speed ) {
								animate.classList.add( `gridhub_animated__${ speed }` );

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
								animate.classList.add( 'gridhub__animated', `gridhub-animate__${ desktop }` );
							}

							if ( tablet && width <= 1024 ) {
								animate.classList.remove( 'gridhub__animated', `gridhub-animate__${ desktop }` );
								animate.classList.add( 'gridhub__animated', `gridhub-animate__${ tablet }` );
							}

							if ( mobile && width <= 767 ) {
								animate.classList.remove( 'gridhub__animated', `gridhub-animate__${ desktop }` );
								animate.classList.remove( 'gridhub__animated', `gridhub-animate__${ tablet }` );
								animate.classList.add( 'gridhub__animated', `gridhub-animate__${ mobile }` );
							}

							setTimeout( function() {
								animate.classList.remove( 'gridhub__animated', `gridhub-animate__${ desktop }`, `gridhub-animate__${ tablet }`, `gridhub-animate__${ mobile }`, `gridhub_animated__delay-${ delay }`, `gridhub_animated__${ speed }` );
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
export default gridhubAnimate;
