# GitHub Action 实现持续集成——gh-pages的自动部署。

### 持续集成由很多操作组成，比如拉取代码、执行测试用例、登录远程服务器，发布到第三方服务等等。GitHub 把这些操作就称为 actions。

### 相关术语：

- workflow（工作流程）：持续集成一次运行的过程，就是一个 workflow。
- job（任务）：一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务。
- step（步骤）：每个 job 由多个 step 构成，一步步完成。
- action（动作）：每个 step 可以依次执行一个或多个命令（action）。


### `workflow` 文件
`GitHub Actions` 的配置文件叫做 `workflow` 文件，存放在代码仓库的 `.github/workflows` 目录,后缀名统一为 `.yml`，比如 `deploy.yml`。一个库可以有多个 `workflow` 文件。`GitHub` 只要发现 `.github/workflows` 目录里面有 `.yml` 文件，就会自动运行该文件。

#### `workflow` 文件的配置字段非常多，这里列举一些基本字段。

> `name`: `name` 字段是 `workflow `的名称。如果省略该字段，默认为当前 workflow 的文件名。

```bash
name: build and deploy
```

> `on`: `on`字段指定触发 `workflow` 的条件，通常是 `push、pull_request`。指定触发事件时，可以限定分支或标签。

```bash
on:
  push:
    branches:
      - mian
```
上面代码指定，只有 `main` 分支发生 `push` 事件时，才会触发 `workflow`。

> `jobs`: `jobs` 字段，表示要执行的一项或多项任务。其中的 runs-on 字段指定运行所需要的虚拟机环境。

```bash
runs-on: ubuntu-latest
```

> `steps`: `steps `字段指定每个 `job` 的运行步骤，可以包含一个或多个步骤。每个步骤都可以指定以下三个字段。

```bash
jobs.<job_id>.steps.name：步骤名称。
jobs.<job_id>.steps.run：该步骤运行的命令或者 action。
jobs.<job_id>.steps.env：该步骤所需的环境变量。
```
参考：[官方 Actions](https://github.com/marketplace?type=actions) 找到所需的 Actions:

```bash
Checkout: 从 Github 拉取仓库代码到 Github 服务器的 $GITHUB_WORKSPACE 目录下
cache: 缓存 npm
setup-node: 安装 Node 和 Npm 环境
actions-gh-pages: 在 Github 上发布静态资源
可用的 Action 很多，这里只是设置了一个简单的流程
```
`workflow` 配置示例
下面放一下项目中的 `.github/workflows/gh-pages-build-deployment.yaml` 文件：
```bash
# 当前 workflow 的名称
name:  gh-pages-build-deployment

# 指定 workflow 触发的 event
on:
  push:
    branches:
      - main

# 一个 workflow 由一个或多个 job 组成
jobs:
  # job id: 是 job 的唯一标识
  build_and_deploy:
  	# 在 Github 中显示的 job 名称
    name: Build and Deploy
    # job 运行的环境配置
    runs-on: ubuntu-latest
    # 一个 job 由多个 step 组成
    steps:
      # 当前 step 的名字
      - name: Checkout
        # checkout action 主要用于向 github 仓库拉取源代码
        # https://github.com/actions/checkout
        uses: actions/checkout@v2
        with:
          ref: main
      - name: Cache
        # cache 在这里主要用于缓存 npm，提升构建速率
        # https://github.com/actions/cache
        uses: actions/cache@v2
        # npm 缓存的路径可查看 https://docs.npmjs.com/cli/cache#cache
        # 由于这里 runs-on 是 ubuntu-latest，因此配置 ~/.npm
        # 这里我用的yarn，所以是yarn-lock.json，也可以是package-lock.json
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/yarn-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-
      - name: Use Node.js
      	# 配置 Node 执行环境（当前构建的服务器默认没有 Node 环境，可以通过 Action 安装 Node）
      	# https://github.com/actions/setup-node
        uses: actions/setup-node@v1
        with:
          node-version: 14
      - name: Install and Build
      	# 安装 Node 之后就可以执行构建脚本
        run: |
          yarn install
          yarn run build
      - name: Deploy
      	# 将构建产物 commit 到一个分支上，用于发布静态站点资源
      	# https://github.com/peaceiris/actions-gh-pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          # Github 会在 workflow 中自动生成 GIHUBT_TOKEN，用于认证 workflow 的运行
          github_token: ${{ secrets.GITHUB_TOKEN }}
          # 默认发布到 gh-pages 分支上，可以指定特定的发布分支（不能选拉取代码的分支）
          BRANCH: gh-pages
          # 静态资源目录设置
          FOLDER: docs/.vitepress/dist
```