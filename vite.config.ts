import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import fg from 'fast-glob'

/** Defines an array of entry points to be used to search for files. */
const entryPoints = ['./src/core/index.ts', './src/form/index.ts']

/**
 * Task: Searches for files that match the patterns defined in the array of input points.
 * Result: Returns an array of absolute file paths.
 */
const files = fg.sync(entryPoints, { absolute: true })

/** Maps the file paths in the "files" array to an array of key-value pair. **/
const entities = files.map((file) => {
  /** Extract the part of the file path after the "src" folder and before the file extension.  **/
  const [key] = file.match(/(?<=src\/).*$/) || []
  /** Remove the file extension from the key.  **/
  const keyWithoutExt = key?.replace(/\.[^.]*$/, '')

  return [keyWithoutExt, file]
})

/**
 * Task: Convert the array of key-value pairs to an object using the Object.fromEntries() method.
 * Returns an object where each key is the file name without the extension and the value is the absolute file path.
 */
const entries = Object.fromEntries(entities)

export default defineConfig({
  build: {
    emptyOutDir: true /** Clears the output directory before building. **/,
    lib: {
      entry: entries,
      formats: ['es', 'cjs'] /** Specifies the output formats (CommonJS and ES modules). */,
    },
  },
  plugins: [dts()] /** Plugin for generating TypeScript declaration files (d.ts). */,
})
