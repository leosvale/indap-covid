const { mix } = require('laravel-mix');

mix.disableNotifications();

mix.webpackConfig({
    resolve: {
        alias: {
            jquery: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.js')
        }
    }
});


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles(
	[
    	'node_modules/bootstrap-fileinput/css/fileinput.min.css',
    	'node_modules/summernote/dist/summernote.css',
	],
	'public/css/vendor.css'
);


mix.copyDirectory('node_modules/summernote/dist/font', 'public/css/font');


mix.stylus('resources/assets/stylus/app.styl', 'public/css', { use: [ require('nib')() ] });

mix.stylus('resources/assets/stylus/site.styl', 'public/css', { use: [ require('nib')() ] });

mix.stylus('resources/assets/stylus/acessibilidade.styl', 'public/css', { use: [ require('nib')() ] });


mix.js('resources/assets/js/app.js', 'public/js')
	.extract([
		'jquery',
		'jquery-mask-plugin',
		'bootstrap-sass',
		'bootstrap-fileinput',
        'summernote',
		'moment',
		'es6-promise',
		'axios',
		'vue',
		'vue-tables-2',
	])
	.autoload({
        jquery: ['$', 'window.jQuery', 'jQuery', 'jquery'],
    });


mix.scripts(
    [
        'node_modules/jquery-mask-plugin/dist/jquery.mask.min.js',
        'resources/assets/js/site.js',
    ],
    'public/js/site.js'
);

mix.scripts(
    [
        'node_modules/js-cookie/src/js.cookie.js',
        'resources/assets/js/acessibilidade.js'
    ],
    'public/js/acessibilidade.js'
);

mix.scripts(
    [
        'node_modules/js-cookie/src/js.cookie.js',
        'resources/assets/js/contraste.js'
    ],
    'public/js/contraste.js'
);   

if (mix.inProduction()) {
    mix.version();
}
