const pkg = require( './package.json' );
const project = pkg.name;

const releaseFiles = [
	'./**',
	'!release',
	'!release/**',
	'!node_modules/**',
	'!*.json',
	'!*.map',
	'!*.xml',
	'!gulpfile.js',
	'!*.log',
	'!*.DS_Store',
	'!*.gitignore',
	'!TODO',
	'!*.git',
	'!*.ftppass',
	'!sftp.json',
	'!yarn.lock',
	'!*.md',
	'!package.lock',
	'!vendor/**',
	'!.dev',
	'!.tool',
	'!.tool/**',
	'!.dev/**',
	'!composer.lock',
	'!composer.json',
];

const releaseDestination = './release/' + project + '/';

// Release
const cleanSrcFiles = [
	'./release/' + project + '/src/blocks.js',
	'./release/' + project + '/src/blocks/**/*.js',
	'./release/' + project + '/src/blocks/**/*.json',
	'./release/' + project + '/src/components/**/*.js',
	'./release/' + project + '/src/components/**/*.json',
	'./release/' + project + '/src/inspector/**/*.js',
	'./release/' + project + '/src/hooks/**/*.js',
	'./release/' + project + '/src/public/**/*.js',
	'./release/' + project + '/src/utils/**/*.js',
	'./release/' + project + '/src/**/*.scss',
	'./release/' + project + '/dist/**/*.map',
	'!release/' + project + '/src/blocks/**/*.php',
];

const gulp = require( 'gulp' );
const del = require( 'del' );
const zip = require( 'gulp-vinyl-zip' );
const copy = require( 'gulp-copy' );
const cache = require( 'gulp-cache' );
const deleteEmpty = require( 'delete-empty' );

gulp.task( 'clearCache', function() {
	return cache.clearAll();
} );

gulp.task( 'clean', function() {
	return del( './release/**' );
} );

gulp.task( 'copy', function() {
	return gulp.src( releaseFiles ).pipe( copy( releaseDestination ) );
} );

gulp.task( 'cleanSrc', function() {
	return del( cleanSrcFiles );
} );

gulp.task( 'deleteEmptyDirectories', function() {
	return deleteEmpty( './release/' + project + '/src/' );
} );

gulp.task( 'zip', function() {
	return gulp
		.src( releaseDestination + '/**', { base: './release/' } )
		.pipe( zip.dest( './release/' + project + '.zip' ) );
} );

gulp.task(
	'release',
	gulp.series(
		'clearCache',
		'clean',
		'copy',
		'cleanSrc',
		'deleteEmptyDirectories',
		'zip',
		function( done ) {
			done();
		}
	)
);
