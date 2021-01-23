<?php
/**
 * Plugin Name: GridHub
 * Plugin URI: http://alura-studio.com
 * Description: It is page builder for the WordPress Gutenberg block editor.
 * Author: GridHub
 * Version: 1.0.0
 * Author URI: http://alura-studio.com
 * Requires at least: 3.8
 * Tested up to: 5.6
 * Text Domain: gridhub
 * Domain Path: /languages/
 *
 * @package GridHub.
 */

defined( 'ABSPATH' ) || exit;

define( 'GRIDHUB_VERSION', '1.0.0' );
define( 'GRIDHUB_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'GRIDHUB_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'GRIDHUB_PLUGIN_FILE', __FILE__ );
define( 'GRIDHUB_PLUGIN_BASE', plugin_basename( __FILE__ ) );
define( 'GRIDHUB_BLOCKS_DEV', true );

if ( ! class_exists( 'GridHub' ) ) {
	final class GridHub {
		protected static $instance;

		protected function init() {
			add_action( 'plugins_loaded', array( $this, 'load_textdomain' ), 99 );
			add_action( 'enqueue_block_editor_assets', array( $this, 'block_localization' ) );

			$this->includes();
		}

		protected function includes() {
			require_once GRIDHUB_PLUGIN_DIR . 'inc/class-init.php';
			require_once GRIDHUB_PLUGIN_DIR . 'inc/class-assets.php';
			require_once GRIDHUB_PLUGIN_DIR . 'inc/class-styles.php';
		}

		public function load_textdomain() {
			load_plugin_textdomain( 'gridhub', false, basename( GRIDHUB_PLUGIN_DIR ) . '/languages' );
		}

		public function block_localization() {
			if ( function_exists( 'wp_set_script_translations' ) ) {
				wp_set_script_translations( 'gridhub-editor', 'gridhub', GRIDHUB_PLUGIN_DIR . '/languages' );
			}
		}

		public static function instance() {
			if ( ! isset( self::$instance ) && ! ( self::$instance instanceof GridHub ) ) {
				self::$instance = new GridHub();
				self::$instance->init();
			}

			return self::$instance;
		}

		public function __clone() {
			_doing_it_wrong( __FUNCTION__, esc_html__( 'Something went wrong.', 'gridhub' ), '1.0' );
		}

		public function __wakeup() {
			_doing_it_wrong( __FUNCTION__, esc_html__( 'Something went wrong.', 'gridhub' ), '1.0' );
		}
	}
}

function gridhub() {
	return GridHub::instance();
}

// If Multilsite.
if ( function_exists( 'is_multisite' ) && is_multisite() ) {
	add_action( 'plugins_loaded', 'gridhub', 90 );
} else {
	gridhub();
}
