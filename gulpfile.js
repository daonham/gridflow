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
const replace = require( 'gulp-replace' );
const deleteEmpty = require( 'delete-empty' );
const readFile = require( 'read-file' );

const getCurrentVer = function() {
	const current = readFile.sync( 'gridflow.php', { encoding: 'utf8' } ).match( /Version:\s*(.*)/ );
	return current ? current[ 1 ] : null;
};

const getTestedUpTo = function() {
	const current = readFile.sync( 'gridflow.php', { encoding: 'utf8' } ).match( /Tested up to:\s*(.*)/ );
	return current ? current[ 1 ] : null;
};

gulp.task( 'clearCache', function() {
	return cache.clearAll();
} );

gulp.task( 'clean', function() {
	return del( './release/**' );
} );

gulp.task( 'replaceReadme', function() {
	return gulp.src( [ 'readme.txt' ] )
		.pipe( replace( /Stable tag: (.*)/g, 'Stable tag: ' + getCurrentVer() ) )
		.pipe( replace( /Tested up to: (.*)/g, 'Tested up to: ' + getTestedUpTo() ) )
		.pipe( gulp.dest( './', { overwrite: true } ) );
} );

gulp.task( 'replaceDefine', function() {
	return gulp.src( [ 'gridflow.php' ] )
		.pipe( replace( /define\(\s*'GRIDFLOW_VERSION',\s*'(.*)'\s*\);/, 'define( \'GRIDFLOW_VERSION\', \'' + getCurrentVer() + '\' );' ) )
		.pipe( gulp.dest( './', { overwrite: true } ) );
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
		'replaceReadme',
		'replaceDefine',
		'copy',
		'cleanSrc',
		'deleteEmptyDirectories',
		'zip',
		function( done ) {
			done();
		}
	)
);
