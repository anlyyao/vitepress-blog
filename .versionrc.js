module.exports = {
  skip: {
    // bump: true,
    // changelog: true,
    // 目前standard-version无法打tag，所以commit和tag暂时skip，这两部借助脚本实现
    commit: true,
    tag: true,
  },
  header: '# 更新历史 \n\n',
  types: [
    { type: 'chore', section: '  Chores | 其他更新', hidden: false },
    { type: 'revert', section: '⏪ Reverts | 回退', hidden: false },
    { type: 'feat', section: '✨ Features | 新功能"', hidden: false },
    { type: 'fix', section: ' Bug Fixes | Bug 修复', hidden: false },
    { type: 'improvement', section: 'Feature Improvements', hidden: false },
    { type: 'docs', section: '  Documentation | 文档', hidden: false },
    { type: 'style', section: '  Styles | 风格', hidden: false },
    { type: 'refactor', section: '♻ Code Refactoring | 代码重构', hidden: false },
    { type: 'perf', section: '⚡ Performance Improvements | 性能优化', hidden: false },
    { type: 'test', section: '✅ Tests | 测试', hidden: false },
    { type: 'build', section: '• Build System | 构建', hidden: false },
    { type: 'ci', section: 'Continuous Integration | CI 配置', hidden: false },
  ],
};
