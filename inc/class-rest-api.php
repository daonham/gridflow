<?php
namespace GridHub;

class Styles {

	protected $folder_name = 'gridhub';

	protected static $instance = null;

	public function init() {
		add_action( 'rest_api_init', array( $this, 'register_endpoints' ) );
		add_action( 'gridhub/enqueue/style/uploads', array( $this, 'enqueue_style' ) );
		add_action( 'wp_head', array( $this, 'enqueue_google_fonts' ) );
	}

	public function register_endpoints() {
		register_rest_route(
			'gridhub/v1/style',
			'/save/',
			array(
				'methods'             => \WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'save_css' ),
				'permission_callback' => function() {
					return current_user_can( 'edit_posts' );
				},
			)
		);
	}

	public function enqueue_google_fonts() {
		$post_id = get_the_ID();

		if ( ! $post_id ) {
			return false;
		}

		$fonts = get_post_meta( $post_id, 'gridhub_google_fonts', true );

		if ( empty( $fonts ) || ! is_array( $fonts ) ) {
			return;
		}

		$output = array();

		$base_url = '//fonts.googleapis.com/css';

		foreach ( $fonts as $name => $weight ) {
			$item = trim( $name );

			if ( ! empty( $weight ) ) {
				if ( is_array( $weight ) ) {
					$item .= ':' . implode( ',', $weight );
				}
			}

			array_push( $output, $item );
		}

		$query_args = array(
			'family'  => implode( '|', $output ),
			'display' => 'swap',
		);

		$subsets = array(
			'ru_RU' => 'cyrillic',
			'bg_BG' => 'cyrillic',
			'he_IL' => 'hebrew',
			'el'    => 'greek',
			'vi'    => 'vietnamese',
			'uk'    => 'cyrillic',
			'cs_CZ' => 'latin-ext',
			'ro_RO' => 'latin-ext',
			'pl_PL' => 'latin-ext',
		);
		$locale  = get_locale();

		if ( isset( $subsets[ $locale ] ) ) {
			$query_args['subset'] = rawurlencode( $subsets[ $locale ] );
		}

		$url = add_query_arg( $query_args, $base_url );

		echo '<link rel="stylesheet" href="' . esc_url( $url ) . '" media="all">';
	}

	public function enqueue_style( $version ) {
		$post_id = get_the_ID();

		if ( ! $post_id ) {
			return false;
		}

		$wp_upload_dir = wp_upload_dir( null, false );

		$upload_dir = trailingslashit( $wp_upload_dir['basedir'] ) . $this->folder_name . '/';
		$file_path  = $upload_dir . 'post-' . $post_id . '.css';

		$upload_url = trailingslashit( $wp_upload_dir['baseurl'] ) . $this->folder_name . '/';
		$file_url   = $upload_url . 'post-' . $post_id . '.css';

		if ( isset( $_GET['preview'] ) && $_GET['preview'] == true ) {
			if ( file_exists( $upload_dir . 'post-preview-' . $post_id . '.css' ) ) {
				$file_url = $upload_url . 'post-preview-' . $post_id . '.css';
				wp_enqueue_style( "gridhub-post-preview-style-{$post_id}", $file_url, false, $version );
			}
		} elseif ( file_exists( $file_path ) ) {
			wp_enqueue_style( "gridhub-post-style-{$post_id}", $file_url, false, $version );
		}
	}

	public function save_css( $request ) {
		try {
			global $wp_filesystem;

			if ( empty( $wp_filesystem ) ) {
				require_once ABSPATH . '/wp-admin/includes/file.php';
				\WP_Filesystem();
			}

			$params     = $request->get_params();
			$post_id    = absint( wp_unslash( $params['postId'] ) );
			$post_css   = isset( $params['css'] ) ? wp_unslash( $params['css'] ) : '';
			$is_preview = isset( $params['isPreview'] ) ? wp_unslash( $params['isPreview'] ) : false;

			if ( ! empty( $params['fonts'] ) && ! empty( $post_id ) ) {
				$save_fonts = array();

				foreach ( $params['fonts'] as $font ) {
					if ( isset( $save_fonts[ $font['font'] ] ) && ! empty( $font['weights'] ) ) {
						$save_fonts[ $font['font'] ] = array_merge( $save_fonts[ $font['font'] ], $font['weights'] );
					} else {
						$save_fonts[ $font['font'] ] = $font['weights'];
					}
				}

				update_post_meta( $post_id, 'gridhub_google_fonts', $save_fonts );
			}

			if ( empty( $post_css ) ) {
				throw new \Exception( esc_html__( 'Gridhub no content for save!', 'gridhub' ) );
			}

			$file_name = 'post-' . $post_id . '.css';

			if ( $is_preview ) {
				$file_name = 'post-preview-' . $post_id . '.css';
			}

			$wp_upload_dir = wp_upload_dir( null, false );
			$upload_dir    = trailingslashit( $wp_upload_dir['basedir'] ) . $this->folder_name . '/';
			$target_dir    = $wp_filesystem->is_dir( $upload_dir );
			$file_path     = $upload_dir . $file_name;

			if ( ! $wp_filesystem->is_writable( $wp_upload_dir['basedir'] ) ) {
				throw new \Exception( esc_html__( 'Gridhub can\'t write in upload folder!', 'gridhub' ) );
			}

			if ( ! $target_dir ) {
				wp_mkdir_p( $upload_dir );
			}

			$put_content = $wp_filesystem->put_contents( $file_path, $post_css, FS_CHMOD_FILE );

			if ( ! $put_content ) {
				throw new \Exception( esc_html__( 'Gridhub can\'t put content style!', 'gridhub' ) );
			}

			return rest_ensure_response(
				array(
					'status'  => 'success',
					'message' => esc_html__( 'Gridhub save style successfully!', 'gridhub' ),
				)
			);
		} catch ( \Exception $e ) {
			return rest_ensure_response(
				array(
					'status'  => 'fail',
					'message' => $e->getMessage(),
				)
			);
		}
	}

	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new Styles();
			self::$instance->init();
		}

		return self::$instance;
	}
}
Styles::instance();