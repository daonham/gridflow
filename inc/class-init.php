<?php
namespace GridHub;

class Init {
	protected static $instance = null;

	public function init() {
		add_action( 'block_categories', array( $this, 'block_categories' ) );
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

	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new Init();
			self::$instance->init();
		}

		return self::$instance;
	}
}

Init::instance();
