---
layout:     post
title:      "小程序问题搜集"
subtitle:   " "
date:       2018-07-12 9:00:00
author:     "lcl"
header-img: "post-bg-ios9-web.jpg"
catalog: true
tags:
    - 小程序
---

# 开发过程中收录的小程序问题

1. 强制要求请求全部为https
2. 小程序有自己定义的标签，且不支持HTML标签
3. web-view
	1. 打开的域名没有在小程序管理后台设置业务域名（注意是业务域名，不是服务器域名）
	2. web-view空白问题，请升级微信客户端到 6.5.16
	3. 打开的页面必须为https服务
	4. 页面可以包含iframe，但是iframe的地址必须为业务域名
	5. 兼容
		1. 基础库 1.6.4 开始支持，低版本需做兼容处理，个人类型与海外类型的小程序暂不支持使用。
		2. 官方截止2017-12-01提供的数据也说明88%的用户支持web-view
		3. 注：配置域名时，并不是随便一个备案过的https就可以的，需要从配置后台下载校验文件放在域名根目录下，验证通过后才能配置成功。
4. image
	1. image设置图片src不能有空格
	2. height:auto; 失效，必须指定 image 的高度为具体数值,不然高度为0
	3. 小程序中的图片要用绝对路径，否则无法显示
5. 快速创建项目文件夹的方式：在app.json文件中直接配置路径即可
6. 小程序的长度单位为rpx，按照iphone6的来计算，1rpx=0.5px=1物理像素
7. 在页面中引入模板的wxss文件，采用@import引入，且需要以;结尾，否则会出错
8. 遇到 this.data 给变量赋值没有效果，改用this.setData({})
9. [小程序设置最低基础库版本](https://kf.qq.com/faq/171128zqiENn171128uyyEZz.html?scene_id=kf4595)
