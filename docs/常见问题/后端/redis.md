---
title: redis
author: 张三
createTime: 2024/06/16 14:36:28
permalink: /article/5xewgbmw/
---
### redis启动
* 报错：Linux bash: redis-server: 未找到命令

* 原因：产生这个的原因是因为我们输入的命令系统都会去/usr/bin目录下寻找，如果这个目录下找不到命令，他就会提示未找到命令。

* 解决：将redis-server命令设置为全局命令，找到我们安装redis路径下的redis-server命令将它定义为全局命令

  ```shell
   ln -s /usr/local/redis/bin/redis-server /usr/bin/redis-server
  ```

  