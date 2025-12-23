# Service Worker（SW）概览

- 定义：Service Worker 是浏览器独立线程中的 JS 脚本，位于页面和网络之间，可拦截、修改、缓存请求，实现离线功能和高效缓存策略。
- 特点：
   - 运行在独立线程（Worker Thread）
   - 可以拦截网络请求
   - 支持缓存、消息通信和后台同步
   - 生命周期独立于页面，支持长期运行

# SW 生命周期

1. 注册（register）

```js
navigator.serviceWorker.register('/sw.js')
  .then(reg => console.log('SW 注册成功', reg))
  .catch(err => console.log('SW 注册失败', err));

```

2. 安装（install）
   * 通常用于预缓存静态资源

3. 激活（activate）
   * 通常用于清理旧缓存

4. 运行（fetch）
   * 通常用于拦截请求并返回缓存的响应或自定义响应

5. 更新（update）
   * SW 会检测文件变化更新自身

# 常用缓存策略

| 策略                     | 说明             |
| ---------------------- | -------------- |
| Cache First            | 优先读取缓存，有则直接返回  |
| Network First          | 优先请求网络，失败才用缓存  |
| Stale While Revalidate | 先返回缓存，同时后台更新缓存 |
| Cache Only             | 仅使用缓存，网络不请求    |
| Network Only           | 仅使用网络，不使用缓存    |

# 实例

```js
// sw.js
const CACHE_NAME = 'app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/main.js',
  '/style.css'
];

// 安装阶段，缓存静态资源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// 激活阶段，清理旧缓存
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
    ))
  );
});

// 拦截请求，优先缓存
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(resp => resp || fetch(event.request))
  );
});

```