import eslint from 'vite-plugin-eslint'

const viteEslintPlugin = () => {
  const plugin = eslint({
    cache: false,
    include: ['src/**/*.ts', 'src/**/*.tsx'],
    exclude: ['node_modules']
  })

  return plugin
}

export default viteEslintPlugin
