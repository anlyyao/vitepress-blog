# vitepress

## 参考文档
官网： https://vitejs.cn/vitepress/

## 起源
它的前身就是 `vuePress` ，但相比 `vuePress` ， `vitePress `的速度会快很多。主要因为 `vuePress` 是基于 `Webpack` 的，而 `vitePress` 是基于 Vite 的。

## 项目安装 + 配置
1. 创建并进入一个目录

```bash
$ mkdir vitepress-starter && cd vitepress-starter
```
2. 初始化
```bash
$ yarn init
```
3. 本地安装 VitePress
```bash
$ yarn add --dev vitepress
```
4. 创建你第一篇文档
```bash
$ mkdir docs && echo '# Hello VitePress' > docs/index.md
```

5. 在 package.json.添加一些script
```bash
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  }
}
```

6. 在本地服务器上启动文档站点
```bash
$ yarn docs:dev
```

VitePress 会在 http://localhost:3000启动一个热重载的开发服务器。



## 目录结构
Notes: docs下的目录结构即路由

```json
├── docs
│   ├── public (可选的)
│   ├── .vitepress (可选的)
│   │   ├── theme (可选的)
│   │   │   ├── custom.styl
│   │   │   └── index.ts
│   │   ├── config.js (可选的)
│   ├── about (可选的)
│   │   └── index.md
│   ├── life (可选的)
│   │   └── index.md
│   ├── technology (可选的)
│   │   └── components
│   │   └── css
│   │   └── html
│   │   └── ···
└── package.json
└── vite.config.ts
```

## 使用主题 `vitepress-theme-demoblock`
1. 安装主题插件
```bash
yarn add -D vitepress-theme-demoblock
```
2. css预处理器。
markdown 中的 vue 代码包含的 style 内容，会被组合成一个 style 统一处理，如果需要使用 css 预处理器，需要提前指定并且手动安装使用的 css 预处理器。
```bash
yarn add less
```

```js
markdown: {
  config: (md) => {
    const { demoBlockPlugin } = require('vitepress-theme-demoblock')
    md.use(demoBlockPlugin, {
      cssPreprocessor: 'less',
    })
  }
}
```
3. 使用主题
.vitepress/theme/index.js 中使用 vitepress-theme-demoblock 主题，并注册组件(包含主题中默认的组件)。
```js
import theme from 'vitepress/dist/client/theme-default'
import 'vitepress-theme-demoblock/theme/styles/index.css'

import { registerComponents } from './register-components'

export default {
  ...theme,
  enhanceApp({ app, router, siteData }) {
    registerComponents(app)
  },
}
```
4. vitepress-rc
package.json 配置命令 scripts，vitepress-rc 用来注册组件(--docsDir 指定 docs 目录，--componentsDir 指定组件注册目录)

```js
"scripts": {
  "register:components": "vitepress-rc"
}
```

## 自定义样式
1. 安装插件。

```bash
npm i -D stylus stylus-loader
```
2. `.vitepress` 文件夹下新建 `custom.styl` 文件
3. 在 `index.ts` 引入`custom.styl`
```js
import './custom.styl'
```
4. 接下来，在 `custom.styl` 中编写你想要的 `css` 代码。

## 在 `.md` 中使用 `vue`
参考：https://vitejs.cn/vitepress/guide/using-vue.html#escaping
1. 安装
```bash
yarn add --dev @vitejs/plugin-vue
yarn add vue
```
2. 在文件中编写 `vue` 文件
```md
# demo
:::demo vue使用

<template>
  <div class="demo"></div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  setup() {
  },
}
</script>
:::
```

## 在 `.md` 中使用 `TSX/JSX`
1. 安装
```bash
yarn add --dev @vitejs/plugin-vue-jsx
```
2. 在项目根目录下配置`vite.config.ts`
```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vueJsx()]
})


```

## 集成组件库
待补充


## 部署到Github Pages
参考文档： https://vitejs.cn/vitepress/guide/deploy.html
Notes: 站点会部署在 `config.js` 文件中的 `base URL`, base 默认为 `/` , 要格外注意该路径，如果路径不正确会应该部署。如果你计划将站点部署到子路径（例如GitHub页面），则需要设置这个选项。比如，你计划将站点部署到 `https://foo.github.io/<REPO>/` ,那么你需要设置base为 `/<REPO>/` 。注意，base需要以/开始并以/结尾。

```js
module.exports = {
  base: '/<REPO>/'
}
```

1. 创建shell脚本， 把打包好的文件，即dist文件夹下的所有文件，push到gh-pages分支
```bash
#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# 把上面的 <USERNAME> 换成你自己的 Github 用户名，<REPO> 换成仓库名，比如我这里就是：
git push -f git@github.com:anlyyao/vitepress-blog.git master:gh-pages

cd -
```

2. git仓库配置（该步骤均在Git仓库完成）
> a. 进入仓库
> b. 打开setting
> c. 进入 `Pages`,  `Source` 中的 `Branch` 设置为 `gh-pages`
> d. 最后部署的站点为： `https://anlyyao.github.io/vitepress-blog/`
> e. 如果要使用自己的域名，在 `Custom domain` 部分设置


3. 借助 `github action`提交自动发布到gh-pages分支
```bash
name: Build and Deploy
on:
  push:
    branches: main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3

      - name: Install and Build 🔧 # This example project is built using npm and outputs the result to the 'build' folder. Replace with the commands required to build your project, or remove this step entirely if your site is pre-built.
        run: |
          yarn install
          yarn run build
      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4.3.3
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BRANCH: gh-pages # The branch the action should deploy to.
          FOLDER: docs/.vitepress/dist # The folder the action should deploy.
```