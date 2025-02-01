## vue-router的hash和history模式的区别

### hash模式

> import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    //...
  ],
})

在hash模式下，路由的路径是以#开头，如http://localhost:8080/#/home，#后面的内容就是路由的路径。

1. 优点：hash模式的URL地址栏不发生变化，不会重新加载页面，可以利用浏览器的前进、后退按钮，以及Ctrl+click快速打开新页面，不会出现404空白。兼容大部分浏览器
2. 缺点：hash模式的URL地址栏没有真正意义上的路径(没有发送网络请求)，不利于SEO。

### history模式
>import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //...
  ],
})

当使用这种历史模式时，URL 会看起来很 "正常"，例如 https://example.com/user/id。漂亮!
1. 优点：没有#字符，美观，利于SEO。
2. 缺点：需要后端配置支持，需要服务器支持，兼容性不如hash模式