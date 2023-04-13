---
layout:     post
title:      "js 节流函数"
subtitle:   " "
date:       2019-01-08 9:00:00
author:     "lcl"
header-img: "post-bg-kuaidi.jpg"
catalog: true
weather: sunny # 天气
tags:
    - js
---

> 在浏览器中,会经常频繁的超控DOM,导致渲染变慢,甚至浏览器奔溃.
# 测试场景
window对象的resize、scroll事件

在《JavaScript高级程序设计》中有专门应对此问题的函数节流

```js
function throttle(method,context){
      clearTimeout(method.tId);
      method.tId=setTimeout(function(){
          method.call(context);
      },500);
    }
```

<!--more-->

网页[demo](https://github.com/lcl-101/example/tree/master/%E8%8A%82%E6%B5%81%E5%87%BD%E6%95%B0)

小程序测试 demo (用例> 节流函数)
![image.png](https://raw.githubusercontent.com/lcl-101/example/master/%E8%8A%82%E6%B5%81%E5%87%BD%E6%95%B0/code.JPG
)
