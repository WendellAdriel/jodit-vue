import pkg from './package.json'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import { terser } from 'rollup-plugin-terser'

/** @type {import('rollup').RollupOptions} */
const baseConfig = {
  external: Object.keys(pkg.dependencies),
  input: 'src/wrapper.js',
  output: {
    name: 'JoditVue',
    exports: 'named',
    sourceMap: 'inline',
    globals: {
      jodit: 'Jodit'
    }
  },
  plugins: [
    commonjs(),
    vue({
      css: true,
      compileTemplate: true
    }),
    buble({
      objectAssign: 'Object.assign'
    }),
    terser()
  ]
}

/** @type {Array<import('rollup').RollupOptions>} */
const config = [{
  ...baseConfig,
  output: {
    ...baseConfig.output,
    format: 'esm',
    file: pkg.module
  }
}, {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    format: 'umd',
    file: pkg.main
  }
}, {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    format: 'iife',
    file: pkg.unpkg
  }
}]

export default config
