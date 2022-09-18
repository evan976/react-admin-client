import { mergeConfig } from 'vite'
import viteEslintPlugin from './plugins/eslint'
import baseConfig from './vite.config.base'

export default mergeConfig(
  {
    mode: 'development',
    server: {
      open: true,
      port: 4000,
      fs: {
        strict: true
      }
    },
    plugins: [viteEslintPlugin()]
  },
  baseConfig
)
