const { build } = require('vite')

;(async () => {
  // All options are optional.
  // check out `src/node/build/index.js` for full options interface.
  const result = await build({
    rollupInputOptions: {
      input: 'index.js'
    },
    rollupOutputOptions: {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
      // entryFileNames: `[name].js`,
      // chunkFileNames: `[name].js`,
    },
    cssCodeSplit: false,
    assetsDir: '.',
    minify: false,

  })
})()