export const treeToList = (tree: any[]) => {
  const list = []
  const queue = [...tree]
  while (queue.length) {
    const node = queue.shift()
    const children = node.replys
    if (children) {
      queue.push(...children)
    }
    list.push(node)
  }
  return list
}
