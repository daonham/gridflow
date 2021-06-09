<?php
namespace GridFlow;

class Assets {
	use SingletonTrait;

	public static $version = null;

	public function init() {
		if ( GRIDFLOW_BLOCKS_DEV ) {
			self::$version = time();
		} else {
			self::$version = GRIDFLOW_VERSION;
		}

		add_action( 'wp_enqueue_scripts', array( $this, 'frontend' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'vendor' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'vendor' ) );
	}

	public function frontend() {
		$url    = $this->url();
		$name   = 'gridflow-style';
		$is_rtl = is_rtl() ? '-rtl' : '';

		// Style.
		wp_enqueue_style( 'gridflow-frontend', $url . $name . $is_rtl . '.css', array(), $this->get_asset_info( 'dist/gridflow-style' )['version'] );

		// Script.
		wp_enqueue_script( 'gridflow', $url . 'js/gridflow.js', array(), $this->get_asset_info( 'dist/js/gridflow' )['version'], true );

		// Enqueue style in uploads.
		do_action( 'gridflow_enqueue_assets_frontend', self::$version );
	}

	public function vendor() {
		// Style.
		wp_enqueue_style( 'gridflow-font-awesome', GRIDFLOW_PLUGIN_URL . 'public/icon/font-awesome/css/all.css', array(), '5.12.0' );

		do_action( 'gridflow_enqueue_assets_vendor' );
	}

	public function editor() {
		$url     = $this->url();
		$url_js  = $url . 'gridflow';
		$is_rtl  = is_rtl() ? '-rtl' : '';
		$js_file = $this->get_asset_info( 'dist/gridflow' );

		// Styles.
		wp_enqueue_style( 'gridflow-editor', $url . 'gridflow-editor' . $is_rtl . '.css', array(), $this->get_asset_info( 'dist/gridflow-editor' )['version'] );

		// Scripts.
		wp_enqueue_script( 'gridflow-editor', $url_js . '.js', $js_file['dependencies'], $js_file['version'], true );

		// Localize.
		wp_localize_script(
			'gridflow-editor',
			'gridFlowEditorData',
			apply_filters(
				'gridflow_localize_editor',
				array(
					'systemFont' => array( 'Arial', 'Tahoma', 'Verdana', 'Helvetica', 'Time New Roman', 'Georgia' ),
				)
			)
		);
	}

	public function get_asset_info( string $url ) : array {
		$path = GRIDFLOW_PLUGIN_PATH . $url . '.asset.php';

		if ( file_exists( $path ) ) {
			return include( $path );
		} else {
			return array(
				'dependencies' => array(),
				'version'      => self::$version,
			);
		}
	}

	public function url( bool $vendor = false ) : string {
		if ( $vendor ) {
			$url = GRIDFLOW_PLUGIN_URL . 'dist/js/vendors/';
		} else {
			$url = GRIDFLOW_PLUGIN_URL . 'dist/';
		}

		return $url;
	}
}

Assets::instance();
