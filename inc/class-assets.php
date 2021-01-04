<?php
namespace GridHub;

class Assets {
	protected static $instance = null;

	public static $version = null;

	public function init() {
		if ( ! defined( 'GRIDHUB_VERSION' ) ) {
			define( 'GRIDHUB_VERSION', '1.0.0' );
			define( 'GRIDHUB_BLOCKS_DEV', false );
		}

		if ( GRIDHUB_BLOCKS_DEV ) {
			self::$version = time();
		} else {
			self::$version = GRIDHUB_VERSION;
		}

		add_action( 'enqueue_block_assets', array( $this, 'frontend' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'vendor' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'vendor' ) );
	}

	public function frontend() {
		$url    = $this->url();
		$name   = 'gridhub-style';
		$is_rtl = is_rtl() ? '-rtl' : '';

		wp_enqueue_style( 'gridhub-frontend', $url . $name . $is_rtl . '.css', array(), self::$version );
	}

	public function vendor() {
		$url        = $this->url();
		$url_vendor = $this->url( true );

		wp_enqueue_script( 'gridhub-flickity', $url_vendor . 'flickity.js', array(), GRIDHUB_VERSION, true );
	}

	public function editor() {
		$url    = $this->url();
		$url_js = $url . 'gridhub';
		$is_rtl = is_rtl() ? '-rtl' : '';
		$js_file = $this->get_asset_info( $url_js );

		// Styles.
		wp_enqueue_style( 'gridhub-editor', $url . 'gridhub-editor' . $is_rtl . '.css', array(), GRIDHUB_VERSION );

		// Scripts.
		wp_enqueue_script( 'gridhub-editor', $url_js . '.js', array_merge( $js_file['dependencies'], array( 'wp-api' ) ), GRIDHUB_VERSION, true );

		// Localize.
		wp_localize_script( 'gridhub-editor', 'gridHubEditorData', apply_filters( 'gridhub_localize_editor', array() ) );
	}

	public function get_asset_info( $url ) {
		$path = GRIDHUB_PLUGIN_DIR . $url . '.asset.php';

		if ( file_exists( $path ) ) {
			include $path;
		} else {
			return array(
				'dependencies' => array(),
				'version' => self::$version
			);
		}
	}

	public function url( $vendor = false ) {
		if ( $vendor ) {
			$url = GRIDHUB_PLUGIN_URL . 'dist/js/vendors/';
		} else {
			$url = GRIDHUB_PLUGIN_URL . 'dist/';
		}

		return $url;
	}

	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new Assets();
			self::$instance->init();
		}

		return self::$instance;
	}
}

Assets::instance();
