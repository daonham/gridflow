<?php
namespace GridFlow;

class Init {
	use SingletonTrait;

	public function init() {
		add_action( 'block_categories', array( $this, 'block_categories' ) );
		add_filter( 'body_class', array( $this, 'body_class' ) );
	}

	public function block_categories( $categories ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'gridflow',
					'title' => 'GridFlow',
				),
			)
		);
	}

	public function body_class( $classes ) {
		$classes[] = 'gridflow-styles';

		return $classes;
	}
}

Init::instance();
