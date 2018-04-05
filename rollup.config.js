const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const replace = require('rollup-plugin-replace');
// const uglify = require('rollup-plugin-uglify');
const path = require('path');

export default {
  input: path.resolve(__dirname, 'src/index.js'),
  output: {
    'format': 'iife',
    file: path.resolve(__dirname, 'dist/app.js')
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    nodeResolve({
      jsnext: true
    }),
    commonjs({
      namedExports: {
        'react': [
          'Component',
          'Fragment',
          'Children',
          'createElement'
        ],
        'react-dom': [
          'render'
        ]
      }
    }),
    babel({
      'babelrc': false,
      'presets': [
        'es2015-rollup',
        'react'
      ]
    })
    // uglify()
  ]
};
