<?php
/**
 * Plugin Name: GridFlow
 * Plugin URI: http://alura-studio.com
 * Description: It is page builder for the WordPress Gutenberg block editor.
 * Author: GridFlow
 * Version: 1.0.0
 * Author URI: http://alura-studio.com
 * Requires at least: 3.8
 * Tested up to: 5.7
 * Text Domain: gridflow
 * Domain Path: /languages/
 *
 * @package GridFlow.
 */

defined( 'ABSPATH' ) || exit;

define( 'GRIDFLOW_VERSION', '1.0.0' );
define( 'GRIDFLOW_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
define( 'GRIDFLOW_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'GRIDFLOW_PLUGIN_FILE', __FILE__ );
define( 'GRIDFLOW_PLUGIN_BASE', plugin_basename( __FILE__ ) );
define( 'GRIDFLOW_BLOCKS_DEV', true );

if ( ! class_exists( 'GridFlow' ) ) {
	final class GridFlow {
		protected static $instance = null;

		protected function init() {
			add_action( 'plugins_loaded', array( $this, 'load_textdomain' ), 99 );
			add_action( 'enqueue_block_editor_assets', array( $this, 'block_localization' ) );

			$this->includes();
		}

		protected function includes() {
			require_once GRIDFLOW_PLUGIN_PATH . 'inc/utilities/singleton-trait.php';

			// Include Classes Module.
			require_once GRIDFLOW_PLUGIN_PATH . 'inc/class-init.php';
			require_once GRIDFLOW_PLUGIN_PATH . 'inc/class-assets.php';
			require_once GRIDFLOW_PLUGIN_PATH . 'inc/class-rest-api.php';
		}

		public function load_textdomain() {
			load_plugin_textdomain( 'gridflow', false, basename( GRIDFLOW_PLUGIN_PATH ) . '/languages' );
		}

		public function block_localization() {
			if ( function_exists( 'wp_set_script_translations' ) ) {
				wp_set_script_translations( 'gridflow-editor', 'gridflow', GRIDFLOW_PLUGIN_PATH . '/languages' );
			}
		}

		public static function instance() {
			if ( is_null( self::$instance ) ) {
				self::$instance = new self();
				self::$instance->init();
			}

			return self::$instance;
		}

		public function __clone() {
			_doing_it_wrong( __FUNCTION__, esc_html__( 'Something went wrong.', 'gridflow' ), '1.0' );
		}

		public function __wakeup() {
			_doing_it_wrong( __FUNCTION__, esc_html__( 'Something went wrong.', 'gridflow' ), '1.0' );
		}
	}
}

function gridflow() {
	return GridFlow::instance();
}

// If Multilsite.
if ( function_exists( 'is_multisite' ) && is_multisite() ) {
	add_action( 'plugins_loaded', 'gridflow', 90 );
} else {
	gridflow();
}
