# Git 常用术语 WIP PTAL CC LGTM 解释

```bash
WIP   Work in progress, do not merge yet. // 开发中，还没有合并。
LGTM  Looks good to me. // 看起来不错。
PTAL  Please take a look. // 帮我看下，一般都是请别人 review 自己的 PR
CC    Carbon copy // 副本抄送别人。
RFC   request for comments. // 征求意见。
IIRC  if I recall correctly. // 如果我没记错的话。
ACK   acknowledgement. // 我确认了或者我接受了
NACK/NAK — negative acknowledgement. // 我不同意

```

# Git 子分支与主分支保持一致
```bash
~/git-test>git branch # 查看当前分支
* feature-some
master
~/git-test>git add . # 添加所有变动文件到暂存区
~/git-test>git stash # 贮藏暂存区的所有文件
~/git-test>git checkout master # 切换到 master 分支
~/git-test>git pull # 拉取最新的远端主分支代码
~/git-test>git checkout feature-some # 切换到 feature-some 分支
~/git-test>git rebase master # 对 feature-some 分支以 master 分支为目标变基，此时可能需要解决冲突

~/git-test>git stash pop # 应用贮藏
~/git-test>npm run commit # commit 提交
~/git-test>git checkout master # 切换到 master 分支
~/git-test>git merge feature-some # 合并功能分支
~/git-test>git push # 推送分支，此时如果又有人更新代码的话，需要重新拉取解决冲突后才能推送
```

# Git 修改commit信息
1.只修改最近一条「commit」信息
```bash
git commit --amend // 直接用 vi 的方式修改「commit」信息，然后用:wq命令保存退出
```
2.需要「commit」的文件少了：
```bash
# 这种情况和上面是类似的，但是在执行“git commit --amend”前先用"git add ."把文件添加到暂存区
```
3.合并多个「commit」记录：
```bash
# 使用“git rebase -i”命令来进行多个提交的修改，这时候可以看到三个提交信息以「从旧到新，从上往下」的方式进行分行显示
git rebase -i HEAD~3 # 修改最后三个「commit」记录
```


