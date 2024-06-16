---
title: node
author: 张三
createTime: 2024/06/16 14:56:25
permalink: /article/2b5cy0hu/
---
### node

1. 下载地址

   > http://nodejs.cn/download/

2. 进入node解压目录，安装node所需环境

   ```bash
   dnf install gcc-c++ make python3
   ```

3. 配置环境变量

   ```bash
   export NODE_HOME=/usr/local/install/node
   export PATH=$NODE_HOME/bin:$PATH
   ```

4. 测试

   ```
   node -v
   npm -v
   ```

### 安装步骤

* 下载安装包

  ```sh
  wget https://nodejs.org/dist/v14.15.4/node-v14.15.4-linux-x64.tar.xz
  ```

  

* 解压到指定目录

  ```sh
  tar -xvf node-v14.15.4-linux-x64.tar.xz
  mkdir -p /usr/local/nodejs
  mv node-v14.15.4-linux-x64/* /usr/local/nodejs/
  ```

* 建立软连接

  ```sh
  # 建立node软链接
  ln -s /usr/local/nodejs/bin/node /usr/local/bin
  # 建立npm 软链接
  ln -s /usr/local/nodejs/bin/npm /usr/local/bin
  ```

  

* 更换镜像

  ```sh
  # 设置国内淘宝镜像源
  npm config set registry https://registry.npm.taobao.org
  # 查看设置信息
  npm config list
  ```

  

* 测试

  ```sh
  node -v
  npm -v
  ```

  
