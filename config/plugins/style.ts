import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import'

const viteStyleImportPlugin = () => {
  const plugin = createStyleImportPlugin({
    resolves: [AntdResolve()]
  })

  return plugin
}

export default viteStyleImportPlugin
