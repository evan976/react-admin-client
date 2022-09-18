import { mergeConfig } from 'vite'
import viteCompressPlugin from './plugins/compress'
import viteImageminPlugin from './plugins/imagemin'
import viteStyleImportPlugin from './plugins/style'
import baseConfig from './vite.config.base'

export default mergeConfig(
  {
    mode: 'production',
    plugins: [viteStyleImportPlugin(), viteImageminPlugin(), viteCompressPlugin('gzip')],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            antd: ['antd'],
            markdown: [
              'bytemd',
              '@bytemd/react',
              '@bytemd/plugin-gemoji',
              '@bytemd/plugin-gfm',
              '@bytemd/plugin-highlight-ssr',
              'remark-gemoji'
            ],
            react: ['react', 'react-dom', 'react-router-dom'],
            redux: ['react-redux', '@reduxjs/toolkit', 'redux-persist'],
            hooks: ['ahooks']
          }
        }
      },
      chunkSizeWarningLimit: 2000
    }
  },
  baseConfig
)
