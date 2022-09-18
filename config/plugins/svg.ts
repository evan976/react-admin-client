import path from 'node:path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const viteSvgIconsPlugin = () => {
  const plugin = createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/assets/svgs')],
    symbolId: 'icon-[dir]-[name]'
  })

  return plugin
}

export default viteSvgIconsPlugin
