import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import babel from 'rollup-plugin-babel'

export default {
  input: 'outback/src/app.js',
  output: {
    file: 'outback/static/outback/app.js',
    format: 'iife',
    name: 'outback'
  },
  plugins: [
    postcss({
      extract: true
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve()
  ]
}
