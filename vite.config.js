const { build } = require('vite')
;(async () => {
  const result = await build({
    rollupInputOptions: {
      input: 'index.js',
    },
    rollupOutputOptions: {
      file: 'dist/index.es.js',
      format: 'es',
    },
    cssCodeSplit: false,
    assetsDir: '.',
    minify: false,
  })
})()