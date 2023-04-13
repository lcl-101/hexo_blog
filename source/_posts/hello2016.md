---
layout:     post
title:      "Hello 2016"
subtitle:   " \"Hello World, Hello Blog\""
date:       2016-07-12 9:00:00
author:     "lcl"
header-img: "post-bg-2015.jpg"
catalog: true
weather: sunny # 天气
tags:
    - 生活
---

> “It's my style. ”


## 前言

研究了好一会，终于把博客开通了，在这里很感谢hux提供的模版，供我们参考。

[跳过废话，直接看技术实现 ](#build)



2016 年，Lcl的博客终于开通了。

从开始工作，就一想做一些的东西，但在大众博客上感觉没有大多意思，就像自己做一些东西，研究研究，正好github提供了这个平台，github page，对于程序员来说，这个着实有趣，自己用了两天的时间把它弄了清楚，下面就介绍是如何实现的。

<!--more-->

---

## 正文

接下来说说搭建这个博客的技术细节。  

正好之前就有关注过 [GitHub Pages](https://pages.github.com/) + [Jekyll](http://jekyllrb.com/) 快速 Building Blog 的技术方案，非常轻松时尚。

其优点非常明显：

* **Markdown** 带来的优雅写作体验，我自己用的的mac本，所以提供一个免费的编写软件（MWeb Lite），用这个来写，确实很方便，可以一边编辑，一边看到自己写的内容，已经排版好的，重点是这款软件是完全免费的。
* 非常熟悉的 Git workflow ，**Git Commit 即 Blog Post**
* 利用 GitHub Pages 的域名和免费无限空间，不用自己折腾主机
	* 如果需要自定义域名，也只需要简单改改 DNS 加个 CNAME 就好了
* Jekyll 的自定制非常容易，基本就是个模版引擎


在这里提供hux提供的模版，对于新手来说，可是很快的上手[镜像](http://huxpro.coding.me)，网上还有很多jekll的模版，可以选一个自己喜欢的下载使用。

---

配置的过程中也没遇到什么坑，基本就是 Git 的流程，相当顺手

大的 Jekyll 主题上直接 fork 了 Clean Blog（这个主题也相当有名，就不多赘述了。唯一的缺点大概就是没有标签支持，于是我给它补上了。）

本地调试环境需要 `gem install jekyll`，但在这里有个坑，ruby被墙了，不过有万能的网友提供了解决办法，`sudo gem install jekll --user--install`,换成这句话后，很顺利的就安装成功了。


## 后记

希望你们能喜欢我的博客

—— lcl 后记于 2016.7
