---
layout:     post
title:      "如何优雅的使用ipv6穿透内网"
date:       2023-02-27 18:24:00
author:     "lcl"
catalog: true
tags:
    - wireguard
---

## 背景
随着ipv6的普及，家庭宽带已经全面支持ipv6，通过简单的设置就可以让自己的内网设备获取到ipv6地址。不过这里的ipv6地址也不是固定，会定期的变化，不过通过DDNS可以解决这个问题。但是这样会暴露一个问题，就是处理你自己，其他人也可以通过你的ip地址来访问到你的设备，这样及其的不安全，那么如何做到只让自己访问，别人看不到的了？接下来，我会慢慢介绍。

## ufw

这里加单引入一个防火墙管理工具`ufw`。为后边做准备

<!--more-->

### ufw简介

`ufw`（ *简单防火墙(Uncomplicated FireWall)* ）真正地简化了 [iptables](https://link.zhihu.com/?target=https%3A//www.networkworld.com/article/2716098/working-with-iptables.html)，它从出现的这几年，已经成为 Ubuntu 和 Debian 等系统上的默认防火墙。而且 `ufw` 出乎意料的简单，这对新管理员来说是一个福音，否则他们可能需要投入大量时间来学习防火墙管理。

### 安装

Ubuntu & Debian
```
apt-get install ufw -y
```

### 常用命令

```
# 启用
sudo ufw enable
# 开启了防火墙并随系统启动同时关闭所有外部对本机的访问（本机访问外部正常）
sudo ufw default deny
# 关闭
sudo ufw disable
# 查看防火墙状态
sudo ufw status
#开启/禁用相应端口或服务举例
sudo ufw allow 80 允许外部访问80端口
sudo ufw delete allow 80 禁止外部访问80 端口
sudo ufw allow from 192.168.1.1 允许此IP访问所有的本机端口
sudo ufw deny smtp 禁止外部访问smtp服务
sudo ufw delete allow smtp 删除上面建立的某条规则
```
>接下来介绍如何安全的访问自己的内网环境

### ufw设置

首先开启ufw，并且关闭所有外部对本机的访问，然后只开启一个`UDP`端口。设置命令：
```
sudo ufw enable
sudo ufw default deny
sudo ufw delete allow 9000
# 关闭ipv4的9000端口
sudo ufw deny from 0.0.0.0/0 to any port 9000
```
这样我们就只放了一个udp为9000的端口。

### 使用`wireguard`来访问自己的内网环境

关于如何使用`wireguard`，可以参考我的另一个文章， [wireguard组建一个内网环境!][1]

由于`wireguard`时使用upd端口开组网的，所以我们上边只开放了一个9000的`UDP`端口。接下来，我们只需要将每一个设备，通过`wireguard`组网后，就可以直接访问到我们的内网环境。如果需要和在内网环境一样访问，需要在将访问的ip地址加入到**AllowedIPs**中即可


  [1]: https://lcl101.cn/archives/16/