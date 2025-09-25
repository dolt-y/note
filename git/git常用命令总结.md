# Git 常用命令速查手册

## 目录
- [Git 常用命令速查手册](#git-常用命令速查手册)
  - [目录](#目录)
  - [压缩 .git](#压缩-git)
  - [仓库操作](#仓库操作)
  - [基础操作](#基础操作)
  - [分支管理](#分支管理)
  - [远程操作](#远程操作)
  - [撤销操作](#撤销操作)
  - [日志查看](#日志查看)
  - [标签管理](#标签管理)
  - [配置相关](#配置相关)
  - [高级操作](#高级操作)
  - [使用建议](#使用建议)

---

## 压缩 .git

 git gc --prune=now


## 仓库操作
| 命令 | 说明 |
|------|------|
| `git init` | 初始化新仓库 |
| `git clone <url>` | 克隆远程仓库 |
| `git remote -v` | 查看远程仓库地址 |

---

## 基础操作
| 命令 | 说明 |
|------|------|
| `git add <file>` | 添加文件到暂存区 |
| `git add .` | 添加所有修改到暂存区 |
| `git commit -m "message"` | 提交更改 |
| `git status` | 查看仓库状态 |
| `git diff` | 查看未暂存的修改 |
| `git diff --staged` | 查看已暂存的修改 |

---

## 分支管理
| 命令 | 说明 |
|------|------|
| `git branch` | 查看本地分支 |
| `git branch <name>` | 创建新分支 |
| `git checkout <branch>` | 切换分支 |
| `git checkout -b <new-branch>` | 创建并切换分支 |
| `git merge <branch>` | 合并指定分支到当前分支 |
| `git branch -d <branch>` | 删除本地分支 |
| `git rebase <branch>` | 变基操作 |

---

## 远程操作
| 命令 | 说明 |
|------|------|
| `git fetch` | 下载远程更新 |
| `git pull` | 拉取并合并远程更新 |
| `git push` | 推送本地提交到远程 |
| `git push -u origin <branch>` | 首次推送并建立追踪 |
| `git remote show origin` | 查看远程仓库信息 |

---

## 撤销操作
| 命令 | 说明 |
|------|------|
| `git restore <file>` | 丢弃工作区修改 |
| `git restore --staged <file>` | 取消暂存 |
| `git reset HEAD~1` | 撤销最近一次提交（保留修改）|
| `git reset --hard HEAD~1` | 彻底撤销最近提交（慎用）|
| `git commit --amend` | 修改最后一次提交信息 |

---

## 日志查看
| 命令 | 说明 |
|------|------|
| `git log` | 查看提交历史 |
| `git log --oneline` | 简洁版历史 |
| `git log --graph` | 图形化显示分支结构 |
| `git blame <file>` | 查看文件修改历史 |

---

## 标签管理
| 命令 | 说明 |
|------|------|
| `git tag` | 查看所有标签 |
| `git tag v1.0` | 创建轻量标签 |
| `git tag -a v1.0 -m "message"` | 创建附注标签 |
| `git push origin --tags` | 推送所有标签到远程 |

---

## 配置相关
| 命令 | 说明 |
|------|------|
| `git config --global user.name "name"` | 设置全局用户名 |
| `git config --global user.email "email"` | 设置全局邮箱 |
| `git config --list` | 查看所有配置 |

---

## 高级操作
| 命令 | 说明 |
|------|------|
| `git stash` | 暂存当前修改 |
| `git stash pop` | 恢复暂存内容 |
| `git cherry-pick <commit>` | 选择应用某个提交 |
| `git bisect start` | 二分查找问题提交 |

---

## 使用建议
1. 提交信息规范：使用 [Conventional Commits](https://www.conventionalcommits.org/) 格式
2. 分支命名建议：
   - 功能分支：`feature/xxx`
   - 修复分支：`fix/xxx`
   - 发布分支：`release/xxx`
3. 推荐工作流：
   - [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
   - [GitHub Flow](https://guides.github.com/introduction/flow/)

---

> 小贴士：使用 `git <command> -h` 查看命令帮助，如 `git commit -h`