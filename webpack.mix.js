const mix = require('laravel-mix')
const LiveReloadPlugin = require('@kooneko/livereload-webpack-plugin')

mix.webpackConfig({
  plugins: [new LiveReloadPlugin()],
})

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .ts('resources/frontend/index.tsx', 'public/js')
  .react()
  .browserSync('http://laravel-react-sound.test/')

mix.disableNotifications()
