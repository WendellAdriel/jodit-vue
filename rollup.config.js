import path from 'path'
import pkg from './package.json'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import { terser } from 'rollup-plugin-terser'

const formats = {
  cjs: pkg.main,
  esm: pkg.module,
  umd: pkg.unpkg
}

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
    })
  ]
}

const config = Object.entries(formats).reduce((acc, [format, filename]) => {
  /** @type {import('rollup').RollupOptions} */
  const config = {
    ...baseConfig,
    output: {
      ...baseConfig.output,
      format,
      file: getFilename(filename)
    }
  }
  /** @type {import('rollup').RollupOptions} */
  const minifiedConfig = {
    ...baseConfig,
    output: {
      ...baseConfig.output,
      format,
      file: getFilename(filename, /* minify */ true)
    },
    plugins: baseConfig.plugins.concat(terser())
  }
  acc.push(config, minifiedConfig)
  return acc
}, [])

export default config

function getFilename (filename, minify = false) {
  const dirname = path.dirname(filename)
  const extname = path.extname(filename)
  const basename = path.basename(filename, extname)
  filename = [basename, minify && '.min', extname].filter(Boolean).join('')
  return path.join(dirname, filename)
}
