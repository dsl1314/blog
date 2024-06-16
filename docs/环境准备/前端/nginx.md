---
title: nginx
author: 张三
createTime: 2024/06/16 14:56:25
permalink: /article/6xzgejqf/
---
### nginx

1. 环境安装

   ```bash
   yum install gcc-c++
   yum install pcre
   yum install pcre-devel
   yum install zlib 
   yum install zlib-devel
   yum install openssl
   yum install openssl-devel
   ```

2. 下载

   ```bash
   wget http://nginx.org/download/nginx-1.20.1.tar.gz
   ```

3. 解压并进入，nginx目录

4. 编译和安装

   ```bash
   ./configure --with-stream
   make&make install # 安装
   ```

5. 配置开机启动的配置文件

   ```bash
   vim  /lib/systemd/system/nginx.service
   # 内容如下：
   [Unit]
   
   Description=nginx 
   
   After=network.target 
   
   [Service] 
   
   Type=forking 
   
   ExecStart=/usr/local/nginx/sbin/nginx
   
   ExecReload=/usr/local/nginx/sbin/nginx reload
   
   ExecStop=/usr/local/nginx/sbin/nginx quit
   
   PrivateTmp=true 
   
      
   
   [Install] 
   
   WantedBy=multi-user.target
   ```

   

6. 配置开机启动

   ```bash
   systemctl enable nginx.service # 设置开机启动
   systemctl start nginx.service    启动nginx
   
   systemctl stop nginx.service    结束nginx
   
   systemctl restart nginx.service    重启nginx
   ```

   

