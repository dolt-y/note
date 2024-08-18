# CSS笔记

## 1.css渲染的优先级
> 选择器都有一个权值，权值越高，优先级越高，越先渲染。
> 1.内联样式表的权值1000最高
> 2.类选择器、属性选择器、伪类选择器权值100
> 3.标签选择器、伪元素选择器权值为10
> 4.html标签选择器的权值为1

## 2.css的继承性
1. 文字样式的属性都有继承性，这些属性包括：color,text-xxx,line-xxx,font-xxx
2. 关于盒子，定位，布局的属性都不可以继承
   
## 3.css的层叠性(计算权重)
![alt text](image.png)

## 4.水平居中的方法，垂直居中的方法
> -行内元素水平居中：text-align:center;
>  垂直居中line-height:height;

> -块级元素水平居中：margin:0 auto;
>  垂直居中：1.position:absolute;top:50%;transform:translateY(-50%);
>  2.flex justify-content:center;align-items:center;

## 5.元素消失的方法
1.display：none;隐藏元素，会改变布局，不会触发该元素事件
2.visibility：hidden;隐藏元素，不会改变布局，不会触发该元素事件
3.opacity：0;隐藏元素，不会改变布局，占据原有空间，触发该元素事件
4.position：absolute;top:-1000px,left:-1000px:移除屏幕外面