const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { terser } = require('rollup-plugin-terser');

module.exports = [
  // browser-friendly UMD build
  {
    input: 'build/typoist.js',
    output: {
      name: 'Typoist',
      file: 'dist/typoist.js',
      format: 'umd'
    },
    plugins: [
      nodeResolve(),
      commonjs()
    ]
  },
  // Minified Build
  {
    input: 'build/typoist.js',
    output: {
      name: 'Typoist',
      file: 'dist/typoist.min.js',
      format: 'umd'
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      terser()
    ]
  }
]
