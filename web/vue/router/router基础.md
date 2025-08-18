# Vue Router 是 Vue 官方的客户端路由解决方案。

客户端路由的作用是在单页应用 (SPA) 中将浏览器的 URL 和用户看到的内容绑定起来。当用户在应用中浏览不同页面时，URL 会随之更新，但页面不需要从服务器重新加载。

Vue Router 基于 Vue 的组件系统构建，你可以通过配置路由来告诉 Vue Router 为每个 URL 路径显示哪些组件。

在这个 template 中使用了两个由 Vue Router 提供的组件: RouterLink 和 RouterView。

不同于常规的 a 标签，我们使用组件 RouterLink 来创建链接。这使得 Vue Router 能够在不重新加载页面的情况下改变 URL，处理 URL 的生成、编码和其他功能。我们将会在之后的部分深入了解 RouterLink 组件。

RouterView 组件可以使 Vue Router 知道你想要在哪里渲染当前 URL 路径对应的路由组件。它不一定要在 App.vue 中，你可以把它放在任何地方，但它需要在某处被导入，否则 Vue Router 就不会渲染任何东西。

router 和 route 属性区别

1. router: 一个 Vue Router 实例，包含了路由的配置和方法。
2. route: 当前激活的路由对象，包含了当前路由的路径、参数、匹配的路由组件等信息。
   
- 实例方法-router
  - router.push(location, onComplete?, onAbort?): 导航到一个新 URL，同时向 history 栈添加一个记录。 
  - router.replace(location, onComplete?, onAbort?):替换当前的 history 记录，而不会向 history 栈添加新记录。
  - router.go(n):前进或后退多少步，类似 window.history.go(n)。
  - router.forward():前进一步。
  - router.back():后退一步。
  - router.beforeEach(guard, replace?):注册一个全局前置守卫， beforeEach 钩子会在导航被触发时调用。guard 是一个函数，会接收 to 与 from 路由对象，next 函数必须调用以确认导航。replace 参数是一个布尔值，用来确定是 push 还是 replace。
  - router.afterEach(callback):注册一个全局后置钩子， afterEach 钩子会在每一次导航完成时调用。callback 是一个函数，会接收 to 与 from 路由对象。

- route 属性
  - route.path: 当前路由的路径
  - route.name: 当前路由的名称
  - route.params: 一个对象，包含了动态片段和全匹配片段
  - route.query: 一个对象，包含了查询参数
  - route.hash: 当前路由的 hash 值
  - route.fullPath: 当前路由的完整路径，包括查询参数和 hash 值
  - route.matched: 一个数组，包含了当前路由的所有路径匹配记录
  - route.meta: 一个对象，包含了当前路由的元信息，如标题、图标等
## 动态路由
动态路由是指 URL 中包含参数，这些参数可以在路由中用参数的形式捕获，并在组件中使用。

例如，在 URL 中有一个参数 id，我们可以在路由中定义一个动态路径：

```javascript
const routes = [
  {
    path: '/user/:id',
    name: 'user',
    component: UserComponent
  }
]
```
## 路由懒加载
路由懒加载是指在路由被访问时才加载对应组件，而不是一开始就加载所有路由对应的组件。

在 Vue Router 2.6.0+ 中，你可以通过动态导入的方式实现路由懒加载：

```javascript
const routes = [
  {
    path: '/foo',
    name: 'foo',
    component: () => import('./Foo.vue')
  },
  {
    path: '/bar',
    name: 'bar',
    component: () => import('./Bar.vue')
  }
]
```
## 缓存路由

在某些情况下，你可能需要缓存路由，以便在用户刷新页面后仍然可以访问之前的路由。

在 Vue Router 2.2.0+ 中，你可以通过配置 `scrollBehavior` 函数来实现缓存路由：

```javascript
const router = new VueRouter({
  routes: [...],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
```

