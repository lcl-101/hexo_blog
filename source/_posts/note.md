---
layout:     post
title:      "note(放一些有用的小技巧)"
date:       2016-07-21 1:50:00
subtitle:   "Soon learn, soon forgotten"
author:     "lcl"
header-img:   "post-bg-unix-linux.jpg"
catalog: true
tags:
    - javascript
    - html
    - css
---

> “在这里滑动下滑”


这里会放一些平时经常用的一些js,html,css等的方法,和动画.

<!--more-->

<div style='font-size:28px;color:#8a6d3b;font-weight: bold;'>js部分</div>


### 保存两位小数


```js
function changeTwoDecimal(x)
{
    var f_x = parseFloat(x);
    if (isNaN(f_x))
    {
        return false;
    }
    f_x = Math.round(f_x *100)/100;
    return f_x;
}
```


### placeholder兼容到ie8


```js
if( !('placeholder' in document.createElement('input')) ){
    $('input[placeholder],textarea[placeholder]').each(function(){
        var that = $(this),
        text= that.attr('placeholder');
        if(that.val()===""){
            that.val(text).addClass('placeholder');
        }
        that.focus(function(){
            if(that.val()===text){
                that.val("").removeClass('placeholder');
            }
        })
        .blur(function(){
            if(that.val()===""){
                that.val(text).addClass('placeholder');
            }
        })
        .closest('form').submit(function(){
            if(that.val() === text){
                that.val('');
            }
        });
    });
}
```

### 自由落体

```js
function bounce(t){
            var ts=t * t * 8.0;
            return ts;
        }
        function getInterpolation(t){
            var t = t*1.1226;
            if(t<0.3535){
                return bounce(t);
            }else if(t < 0.7408){
                return bounce(t - 0.54719) + 0.7;
            }else if(t < 0.9644){
                return bounce(t - 0.8526) + 0.9;
            }else {
                return bounce(t - 1.0435) + 0.95;
            }
        }
        var tt=0;
        setInterval(function(){
            tt++;
            if(tt>=1000){
                return;
            }
            var s=-50*getInterpolation(tt / 1000)+50;
            $('.qing-transform').show().css({transform: 'rotate('+-s+'deg)','-webkit-transform': 'rotate('+-s+'deg)','-moz-transform': 'rotate('+-s+'deg)','-o-transform': 'rotate('+-s+'deg)'})
        },1)
```


<div style='font-size:28px;color:#8a6d3b;font-weight: bold;'>css部分</div>

### 单词换行


```css
word-break:break-all;
word-wrap:break-word;
```


### 垂直剧中


```css
父元素中:

display:-moz-box;
display:-webkit-box;
display:box;
-moz-box-orient:vertical;
-webkit-box-orient:vertical;
box-orient:vertical;

display: -webkit-flex;
display: flex;

flex-direction: column;
-moz-flex-direction: column;
-webkit-flex-direction: column;
-ms-flex-direction: column;
-o-flex-direction: column;

子元素中:

-webkit-flex: 10;
-moz-flex: 10;
-ms-flex: 10;
-o-flex: 10;
flex: 10;

-webkit-box-flex:10;
-moz-box-flex:10;
box-flex:10;
/* Center slide text vertically */
display: -webkit-box;
display: -ms-flexbox;
display: -webkit-flex;
display: flex;
/*-webkit-box-pack: center;*/
/*-ms-flex-pack: center;*/
/*-webkit-justify-content: center;*/
/*justify-content: center;*/
-webkit-box-align: center;
-ms-flex-align: center;
-webkit-align-items: center;
align-items: center;   
```
