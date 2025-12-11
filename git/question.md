# Git 操作问题汇总（最全前端研发实践版）

---

# 1. Git 基础结构（必须分清）

Git 总共 4 个关键区域：

- 工作区（Working Directory）  
- 暂存区（Stage / Index）  
- 本地仓库（Local Repository / HEAD）  
- 远程仓库（Remote Repository）

流程：

工作区 → git add → 暂存区 → git commit → 本地仓库 → git push → 远程仓库

---

# 2. 仓库状态与日志

查看状态  
git status

查看日志  
git log --oneline --graph --decorate --all  
git log  
git log -- <file>  
git show <commitId>

---

# 3. 撤销工作区与暂存区（本地操作）

取消工作区修改（未 add）  
git checkout -- <file>

取消 add  
git reset <file>

取消全部暂存区  
git reset

丢弃所有工作区修改  
git checkout .

---

# 4. 撤销本地提交（commit 回退）

软回退（保留暂存区）  
git reset --soft HEAD~1

混合回退（默认）  
git reset --mixed HEAD~1

硬回退（删除代码）  
git reset --hard HEAD~1

回退到指定 commit  
git reset --hard <commitId>

强制推送到远程  
git push -f

---

# 5. 已 push 的远程撤销（线上）

安全撤销（生成反向 commit）  
git revert <commitId>  
git push

回滚多个 commit  
git revert <oldCommitId>..HEAD

强制改写远程历史（危险）  
git reset --hard <commitId>  
git push -f

---

# 6. 合并（merge）与冲突

取消正在进行的合并  
git merge --abort

取消正在进行的 rebase  
git rebase --abort

撤销已完成 merge  
git revert -m 1 <mergeCommitId>  
git push

冲突标记  
<<<<<<< HEAD  
=======  
>>>>>>> branch

---

# 7. push / pull / fetch

推送  
git push  
git push origin main  
git push --set-upstream origin feature/login

拉取  
git pull  
git fetch  
git merge origin/main

强制用远程覆盖本地  
git fetch --all  
git reset --hard origin/main

---

# 8. 分支管理

查看  
git branch  
git branch -r  
git branch -a

创建/切换  
git branch feature/login  
git checkout feature/login  
git checkout -b feature/login

删除  
git branch -d xxx  
git branch -D xxx  
git push origin --delete xxx

重命名  
git branch -m old new

---

# 9. stash（暂存工作区）

保存修改  
git stash

查看  
git stash list

恢复  
git stash pop  
git stash apply

删除  
git stash drop stash@{2}  
git stash clear

---

# 10. rebase（整理历史）

变基到 main  
git rebase main

交互式 rebase  
git rebase -i HEAD~5

继续  
git rebase --continue

中断  
git rebase --abort

---

# 11. tag 标签

创建  
git tag v1.0.0  
git tag -a v1.0.0 -m "release v1.0.0"

查看  
git tag

删除  
git tag -d v1.0.0  
git push origin :refs/tags/v1.0.0

推送  
git push origin v1.0.0  
git push origin --tags

---

# 12. 修改最近一次提交

修改 message  
git commit --amend -m "new message"

合并修改到上一次 commit  
git add .  
git commit --amend

---

# 13. 清理仓库

删除未追踪文件（危险）  
git clean -fd  
git clean -n

重新让 .gitignore 生效  
git rm -r --cached .  
git add .  
git commit -m "clear git cache"

查看大小  
git count-objects -v

---

# 14. diff 对比

工作区 vs 暂存区  
git diff

暂存区 vs 本地  
git diff --cached

两个 commit 差异  
git diff <commit1> <commit2>

本地 vs 远程  
git diff origin/main

---

# 15. 常见问题解决

push 被拒绝（non-fast-forward）  
git pull --rebase  
git push

错误提交到 main，迁移到新分支  
git branch fix  
git reset --hard origin/main  
git checkout fix

---

# 16. 合并机制补充

快速前进（Fast-Forward Merge）  
- master 无新提交  
- 直接移动指针，无 merge commit  
- 工作区自动同步，无需 git add

三向合并（Three-Way Merge）  
- master 有新提交  
- 会产生新 merge commit  
- 自动把合并结果放入暂存区

禁止 FF 合并  
git merge --no-ff <branch>

---

# 17. 回退场景补充

本地回退  
git reset --hard <commit_id>  
git reset --soft <commit_id>  
git reset --mixed <commit_id>

远程回退（危险）  
git push origin <branch> --force  
git push origin +<branch>

本地强制同步到远程  
git reset --hard origin/<branch>

线上回退：  
1. 本地回退 → push  
2. 远程 revert → 本地 pull

---
