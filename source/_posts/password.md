---
layout:     post
title:      "浏览器自动填充表单问题"
subtitle:   " "
date:       2017-3-22 11:59:00
author:     "lcl"
header-img: "post-bg-os-metro.jpg"
catalog: true
weather: sunny # 天气
tags:
    - html
    - javascript
---

# 浏览器记住密码的机制
---
首先理解浏览器保存密码和自动填充是两个机制，记住密码机制需要遵循[同源策略](http://baike.baidu.com/link?url=1UygF57OpBrK733OtVWZhrX7H-i9PmWdoLOnl4BkNdatA3OqOB4VHwLTxDshFkUz3mnhmTvRacF7YHjCT8gEeg4ZXaLacjW1ri6VFm1yhfUUuTyVbyp0NV9NzxAQ4FdL)
## 测试浏览器（mac）
---
| 浏览器 | 版本 |
| :--: | :--: | :--: |
| google | 56.0.2924.87  (64-bit) |
| firefox | 51.0.1 (64 位) |
| safari | 10.0 (12602.1.50.0.10) |
| ie(win) | 7-8 |
## 首先要分析浏览器是如何记住这个表单的，和唯一性？
---
     经过查资料实验得到的几个关键值
     1. 为了遵循同源策略，需要域名：lichenglong.pw
     2. 需要一个<form>标签
     3. 需要id或name为username的用户名<input>表单项
     4. 需要id或name为password的密码<input>表单项

例如：
```html
<form id="register5">
      <div class="form-group">
           <label>user name</label>
           <input type="text" name="username" class="form-control" placeholder="Enter text">
           <div class="tipinfo"></div>
      </div>
      <div class="form-group">
           <label>password</label>
           <input type="password" name="password" class="form-control" placeholder="Enter text">
           <div class="tipinfo"></div>
       </div>
       <button type="submit" class="btn btn-default">Submit Button</button>
</form>
```
各个浏览器提示保存密码截图
1.google
![Paste_Image.png](http://upload-images.jianshu.io/upload_images/4450341-5df21d026404e17d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
2.firefox

![Paste_Image.png](http://upload-images.jianshu.io/upload_images/4450341-ff7525ecb9e78db3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
3.safari

![Paste_Image.png](http://upload-images.jianshu.io/upload_images/4450341-8f93151cccbf1d67.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

4.ie

![Paste_Image.png](http://upload-images.jianshu.io/upload_images/4450341-7d174e15f948b206.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 各浏览器的差异
---
1. Safari浏览器
只有Safari默认是关闭这个机制的。如果开启后，效果和chrome一样，非常好用！[Safari不能自动填充表单](https://support.apple.com/kb/PH19270?viewlocale=zh_CN&locale=zh_CN)
2. Opera浏览器
Opera好像很安全，记住密码后，浏览器并不会自动填充密码，而是要用户自己点击地址栏左边的钥匙图标，才会开始填充并登录。
3. IE8/9浏览器
IE8/9及部分这个内核的浏览器（比如遨游的IE模式）很聪明，将每个登录表单绑定到所在的页面上（下面简称这个页面为绑定页面），由于绑定页面地址是唯一的，同域内其他页面就无法通过生成一个一模一样的表单来获取密码了。
如果就这样还是不安全:P，因为XSS(获取浏览器记住的明文密码)可以动态iframe进这个绑定页面，然后注入JS进行任意DOM操作，同样非常容易获取到密码表单项的值，IE估计是考虑到了这个，通过iframe调用绑定页面也无效。而且IE的机制还远没这样简单，即使在绑定页面内我也没成功得到密码，因为IE默认并不填充密码，只有输入正确用户名后，并触发类似onblur事件，这个密码表单项才会填充进对应用户名的密码。这个过程我本想通过DOM来模拟进行的，但是没有成功。感兴趣的同学可以试试。
4. 其他浏览器
其他浏览器（除了搜狗浏览器）都和Chrome差不多了，大多是因为webkit内核。
5. IE8/IE9无法自动完成表单及记住密码的解决方法
ie浏览器比较特殊点，有时候我们使用某些优化软件对系统进行优化以后，可能会出IE浏览器即便开启了自动完成功能也无法记住账号和密码的问题您也可以先检查IE浏览器的 Internet 选项里面是否启用了该功能，依次打开Internet 选项 —— 切换至“内容”选项卡 —— 自动完成设置，看是否勾选了“表单上的用户名和密码”。 出现这种情况是因为IE浏览器的相应配置被禁用了，我们只要执行下面操作即可恢复。
1、按下 Win + R 键打开运行，在输入框中输入 gpedit.msc，单击确认打开本地组策略编辑器

![Paste_Image.png](http://upload-images.jianshu.io/upload_images/4450341-3a78c12beaec76e3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
2、依次展开用户配置 → 管理模板 → Windows 组件 → Internet Explorer
![Paste_Image.png](http://upload-images.jianshu.io/upload_images/4450341-a4dd52cb968eca23.png)

3、在右侧列表中找到“禁用表单的自动完成功能”选项，双击对该选项进行编辑，设置为已禁用，在单击确认

![Paste_Image.png](http://upload-images.jianshu.io/upload_images/4450341-634ddc804a024849.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![Paste_Image.png](http://upload-images.jianshu.io/upload_images/4450341-54b77e039ce564d3.png)

4、再找到“表单上的用户名和密码启用自动完成”选项，双击对该选项进行编辑，设置为已启用，在单击确认

![Paste_Image.png](http://upload-images.jianshu.io/upload_images/4450341-91dcc64ec9a4d92e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

设置完成以后，可以关闭本地组策略编辑器，然后再重启IE即可。
