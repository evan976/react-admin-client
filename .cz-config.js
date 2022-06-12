module.exports = {
  types: [
    {
      value: 'feat',
      name: '✨ feat（新功能）'
    },
    {
      value: 'fix',
      name: '🐛 fix（Bug 修复）'
    },
    {
      value: 'docs',
      name: '📝 docs（文档更新）'
    },
    {
      value: 'style',
      name: '💄 style（代码样式更改，例如空格、格式、缺少分号等）'
    },
    {
      value: 'refactor',
      name: '💡 refactor（重构代码）'
    },
    {
      value: 'perf',
      name: '⚡️ perf（性能优化）'
    },
    {
      value: 'test',
      name: '✅ test（添加缺失或修正测试代码）'
    },
    {
      value: 'chore',
      name: '🔨 chore（构建相关的代码或工具库，如文档生成等）'
    }
  ],
  messages: {
    type: '请选择提交类型：（必填）',
    customScope: '请输入影响范围：（可选）',
    subject: '请输入简要描述：（必填）',
    body: '请输入详细描述，使用 "|" 分行：（可选）',
    breaking: '请列出所有的破坏性变更，例如：描述、理由或迁移方式等：（可选）',
    footer: '请列出需关闭的 issue，例如：#31, #34：（可选）',
    confirmCommit: '请确认此提交信息？'
  },
  subjectLimit: 100,
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['scope', 'footer']
}
