const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const postcssConfig = require( './postcss.config' );

const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const RtlCssPlugin = require( 'rtlcss-webpack-plugin' );
const FixStyleOnlyEntriesPlugin = require( 'webpack-fix-style-only-entries' );
const nodeSassGlobImporter = require( 'node-sass-glob-importer' );

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	...defaultConfig,

	entry: {
		'gridhub': path.resolve( process.cwd(), 'src/blocks.js' ),
		'gridhub-editor': path.resolve( process.cwd(), 'src/styles/editor.scss' ),
		'gridhub-style': path.resolve( process.cwd(), 'src/styles/style.scss' ),

		// 'js/gridhub-animation': path.resolve( process.cwd(), 'src/js/gridhub-animation.js' ),
		// 'js/gridhub-accordion-polyfill': path.resolve( process.cwd(), 'src/js/gridhub-accordion-polyfill.js' ),
		// 'js/gridhub-accordion-carousel': path.resolve( process.cwd(), 'src/js/gridhub-accordion-carousel.js' ),
		// 'js/gridhub-checkbox-required': path.resolve( process.cwd(), 'src/js/gridhub-checkbox-required.js' ),
		// 'js/gridhub-datepicker': path.resolve( process.cwd(), 'src/js/gridhub-datepicker.js' ),
		// 'js/gridhub-events': path.resolve( process.cwd(), 'src/js/gridhub-events.js' ),
		// 'js/gridhub-fromEntries': path.resolve( process.cwd(), 'src/js/gridhub-fromEntries.js' ),
		// 'js/gridhub-google-maps': path.resolve( process.cwd(), 'src/js/gridhub-google-maps.js' ),
		// 'js/gridhub-google-recaptcha': path.resolve( process.cwd(), 'src/js/gridhub-google-recaptcha.js' ),
		// 'js/gridhub-lightbox': path.resolve( process.cwd(), 'src/js/gridhub-lightbox.js' ),
		// 'js/gridhub-masonry': path.resolve( process.cwd(), 'src/js/gridhub-masonry.js' ),
		// 'js/gridhub-slick-initializer': path.resolve( process.cwd(), 'src/js/gridhub-slick-initializer.js' ),
		// 'js/gridhub-slick-initializer-front': path.resolve( process.cwd(), 'src/js/gridhub-slick-initializer-front.js' ),

		'js/vendors/flickity': path.resolve( process.cwd(), 'node_modules/flickity/dist/flickity.pkgd.js' ),
	},

	output: {
		filename: '[name].js',
		path: path.resolve( process.cwd(), 'dist/' ),
	},

	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,

			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false,
							sourceMap: ! isProduction,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							...postcssConfig,
							sourceMap: ! isProduction,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: ! isProduction,
							sassOptions: {
								importer: nodeSassGlobImporter(),
							},
						},
					},
				],
			},
		],
	},

	stats: {
		...defaultConfig.stats,
		modules: false,
		warnings: false,
	},

	plugins: [
		...defaultConfig.plugins,

		new FixStyleOnlyEntriesPlugin(),
		new MiniCssExtractPlugin( {
			filename: '[name].css',
		} ),
		new RtlCssPlugin( {
			filename: '[name]-rtl.css',
		} ),
	],
};
