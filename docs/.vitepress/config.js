module.exports = {
  title: '你个二傻子',
  description: 'Anlyyao Blog, A VitePress Site',
  lang: 'en-US',
  base: '/vitepress-blog/',
  // 打包目录
  dest: './dist',
  head: [
    // 添加图标
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
  ],

  themeConfig: {
    // 导航栏配置
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '技术',
        link: '/technology/',
      },
      {
        text: '关于',
        link: '/about/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/anlyyao/vitepress-blog',
      },
    ],
    sidebar: {
      '/': getSidebar(),
    },
    //启动页面丝滑滚动
    smoothScroll: true,
    // 启用时间线
    editLinks: true,
    //在git上编辑提示文字
    editLinkText: '在 GitHub 上编辑此页',
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdated: 'Last Updated', // string | boolean
  },
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock');
      md.use(demoBlockPlugin);
    },
    lineNumbers: true,
  },
  // 使用插件
  //   plugins: [
  //     '@vuepress/active-header-links',   // 页面滚动时自动激活侧边栏链接的插件
  //     '@vuepress/back-to-top',          // 返回顶部插件
  //     '@vuepress/medium-zoom',          // 图片预览插件
  //     '@vuepress/nprogress',        //页面顶部进度条
  //     [
  //       '@vuepress/plugin-search',
  //       {
  //         locales: {
  //           '/': {
  //             placeholder: 'Search',
  //           },
  //           '/zh/': {
  //             placeholder: '搜索',
  //           },
  //         },
  //       },
  //     ],
  //   ],
};

function getSidebar() {
  return [
    {
      text: 'vue',
      link: '/technology/vue/',
      children: [
        {
          text: '基本使用',
          link: '/technology/vue/',
        },
        {
          text: '其他',
          link: '/technology/vue/model',
        },
      ],
    },
    {
      text: 'react',
      link: '/technology/react/',
      children: [
        {
          text: '基本使用',
          link: '/technology/react/',
        },
      ],
    },
    {
      text: 'typescript',
      link: '/technology/typescript/',
      children: [
        {
          text: '基本使用',
          link: '/technology/typescript/',
        },
      ],
    },
    {
      text: 'git',
      link: '/technology/git/',
      children: [
        {
          text: '常用命令',
          link: '/technology/git/',
        },
        {
          text: 'Github Action',
          link: '/technology/git/github-action-workflow',
        },
      ],
    },
    {
      text: 'vitepress',
      link: '/technology/vitepress/',
      children: [
        {
          text: '基本使用',
          link: '/technology/vitepress/',
        },
      ],
    },
    {
      text: 'eslint',
      link: '/technology/eslint/',
      children: [
        {
          text: '基本使用',
          link: '/technology/eslint/',
        },
      ],
    },
    {
      text: '组件(miniprogram)',
      link: '/technology/components/miniprogram/',
      children: [
        {
          text: 'Waterfall',
          link: '/technology/components/miniprogram/waterfall',
        },
      ],
    },
    {
      text: '组件(vue3)',
    },
  ];
}
