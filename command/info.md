| 命令           | 功能         | 常用参数 / 操作                                                  | 示例                          |
| ------------ | ---------- | ---------------------------------------------------------- | --------------------------- |
| **ls**       | 列出目录内容     | `-l` 详细信息 <br> `-a` 显示隐藏文件 <br> `-h` 人类可读大小 <br> `-R` 递归显示 | `ls -alh`                   |
| **cd**       | 切换目录       | `..` 上一级 <br> `~` 主目录 <br> `-` 上一次目录                       | `cd ~/Documents`            |
| **pwd**      | 显示当前路径     | 无参数                                                        | `pwd`                       |
| **mkdir**    | 创建目录       | `-p` 递归创建                                                  | `mkdir -p a/b/c`            |
| **touch**    | 创建文件/更新时间戳 | 可同时操作多个文件                                                  | `touch file1 file2`         |
| **rm**       | 删除文件/目录    | `-r` 递归 <br> `-f` 强制 <br> ⚠️危险：`rm -rf /`                  | `rm -rf dir/`               |
| **mv**       | 移动/重命名     | 文件或目录均可                                                    | `mv old.txt new.txt`        |
| **cp**       | 复制文件/目录    | `-r` 递归 <br> `-i` 覆盖前确认                                    | `cp -r dir1 dir2`           |
| **cat**      | 显示文件内容     | `> file` 覆盖写 <br> `>> file` 追加写                            | `cat file.txt`              |
| **grep**     | 搜索内容       | `-i` 忽略大小写 <br> `-n` 显示行号 <br> `-r` 递归                     | `grep -n "hello" file.txt`  |
| **man**      | 查看命令手册     | `q` 退出                                                     | `man ls`                    |
| **chmod**    | 修改权限       | 数字法：`755` <br> 符号法：`u+x, g-w, o=r`                         | `chmod 755 file.sh`         |
| **chown**    | 修改所有者/组    | `user:group` <br> `-R` 递归修改                                | `chown user:group file.txt` |
| **vi / vim** | 编辑文件       | `i` 插入 <br> `Esc` 退出编辑 <br> `:wq` 保存退出 <br> `:q!` 强制退出     | `vi file.txt`               |
