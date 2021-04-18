const gridflowProgressBar = () => {
	const progressBar = document.querySelectorAll( '.gridflow-progress-bar' );

	if ( progressBar.length > 0 ) {
		if ( 'IntersectionObserver' in window ) {
			const progressObserver = new IntersectionObserver( function( entries, observer ) {
				entries.forEach( function( entry ) {
					if ( entry.isIntersecting ) {
						const element = entry.target,
							ele = element.querySelector( '.gridflow-progress-bar__content__value' ),
							percentEle = element.querySelector( '.gridflow-progress-bar__content__label__inner' ),
							percent = ele.dataset.percent,
							suffix = ele.dataset.suffix;

						let width = 0;
						const id = setInterval( progressFrame, 0 );

						function progressFrame() {
							if ( width >= parseInt( percent ) ) {
								clearInterval( id );

								ele.style.willChange = 'auto';
								percentEle.style.willChange = 'auto';
							} else {
								width++;

								ele.style.width = width + '%';
								percentEle.style.opacity = width / parseInt( percent );

								percentEle.textContent = `${ width }${ suffix || '' }`;
							}
						}

						progressObserver.unobserve( element );
					}
				} );
			} );

			[ ...progressBar ].map( ( ele ) => {
				return progressObserver.observe( ele );
			} );
		}
	}
};
export default gridflowProgressBar;
