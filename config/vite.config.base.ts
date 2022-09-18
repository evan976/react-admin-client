import path from 'node:path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import viteSvgIconsPlugin from './plugins/svg'

export default defineConfig({
  plugins: [reactRefresh(), viteSvgIconsPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
