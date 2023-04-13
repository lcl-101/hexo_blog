---
layout:     post
title:      "ruby,rvm,jekyll的安装"
date:       2016-08-01 9:30:00
subtitle:   "Rome is not built in a day"
author:     "lcl"
header-img: "home-bg-art.jpg"
catalog: true
tags:
    - git page
    - 前端
---

> “It's my style. ”

在搭建博客环境中遇到的种种坑,以及各种解决办法,由于本人用的是`mac`本,`windows`紧作为参考.

rvm是什么？为什么要安装rvm呢，因为rvm可以让你拥有多个版本的Ruby，并且可以在多个版本之间自由切换。

<!--more-->

### 第一步：安装rvm

```c
$ curl -L get.rvm.io | bash -s stable
$ source ~/.rvm/scripts/rvm
```

* 等待终端加载完毕,后输入：

```c
rvm -v
```

如果能显示版本好则安装成功了。

### 第二步：安装ruby

* 列出ruby可安装的版本信息

```c
rvm list known
```

* 安装一个ruby版本

```c
rvm install 2.1.4
```

如果想设置为默认版本，可以用这条命令来完成

```c
rvm use 2.1.4 --default
```

* 查看已安装的ruby

```c
rvm list
```

* 卸载一个已安装ruby版本

```c
rvm remove 2.1.4
```

### 第三步：更换源

* 查看已有的源

```c
gem source
```

显示会如下：

```c
CURRENT SOURCES
http://rubygems.org/
```

到这里我想说名一下,下面是重点,因为国内被墙,资源文件会下载不了,很多网站的解决办法是吧资源文件改成淘宝的

例如:

```c
$ gem update --system
$ gem uninstall rubygems-update
$ gem sources -r http://rubygems.org/
$ gem sources -a http://ruby.taobao.org
```

但这里本人建议还是使用原版的资源文件最好,所欲在danw之前最好,自己先翻墙了.到这里为止rvm和ruby已安装完成.

一切就绪,下面就是安装`jekyll`

### 最后一步：安装jekyll

```c
$ gem install jekyll
$ jekyll new my-awesome-site
$ cd my-awesome-site ~/my-awesome-site
$ jekyll serve
# => Now browse to http://localhost:4000
```

### 结束语

到这里为止,所有操作已经完成,下面就可以开始自己写博客页面了.
