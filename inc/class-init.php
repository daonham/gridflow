<?php
namespace GridFlow;

class Init {
	use SingletonTrait;

	public function init() {
		add_action( 'block_categories_all', array( $this, 'block_categories' ), 10, 2 );
		add_filter( 'body_class', array( $this, 'body_class' ) );
	}

	public function block_categories( array $categories, \WP_Block_Editor_Context $block_editor_context = null ) : array {
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

	public function body_class( array $classes ) : array {
		$classes[] = 'gridflow-styles';

		return $classes;
	}
}

Init::instance();
