<?php
namespace GridHub;

class Init {
	protected static $instance = null;

	public function init() {
		add_action( 'block_categories', array( $this, 'block_categories' ) );
		add_filter( 'body_class', array( $this, 'body_class' ) );
	}

	public function block_categories( $categories ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'gridhub',
					'title' => 'GridHub',
				),
			)
		);
	}

	public function body_class( $classes ) {
		$classes[] = 'gridhub-styles';

		return $classes;
	}

	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new Init();
			self::$instance->init();
		}

		return self::$instance;
	}
}

Init::instance();
