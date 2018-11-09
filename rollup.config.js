import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';

import postcss from 'rollup-plugin-postcss'
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';

import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
  input: 'src/index.js',
  plugins: [
    postcss({
      extensions: ['.css'],
      plugins: [
        simplevars(),
        nested(),
        postcssPresetEnv({
          autoprefixer: true
        }),
        cssnano()
      ]
    }),
    resolve({
      jsnext: true,
      browser: true
    }),
    commonjs({
      sourceMap: false
    }),
    eslint({
      exclude: [
        'src/assets/**',
      ]
    }),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    }),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    (process.env.NODE_ENV === 'production' && uglify()),
    serve({
      open: true,
      contentBase: './dist/',
      historyApiFallback: true,
      host: 'localhost',
      port: 10001,
    }),
    livereload()
  ],
  output: {
    file: 'dist/demo.min.js',
    format: 'iife',
    name: 'Demo',
    sourcemap: true,
    globals: {
      jsonp: 'jsonp'
    }
  }
}