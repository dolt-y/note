## mpvue小程序是很老的框架，已经停止更新了，因此缺少了部分回调函数的支持，导致一些功能无法实现。例如分享朋友圈

## 解决方案(临时本地解决，无法推送远程同步，更好的解决办法  https://zhuanlan.zhihu.com/p/673688964)

1.在node-moule 依赖里面找到 mpvue目录，进入index.js，可以看到有
// 用户点击右上角分享
onShareAppMessage: rootVueVM.$options.onShareAppMessage

把
// 分享朋友圈
onShareTimeline: rootVueVM.$options.onShareTimeline
  ? function (options) { return callHook$1(rootVueVM, 'onShareTimeline', options); } : 
这部分加进去

然后在LIFECYCLE_HOOKS这个数组中把onShareTimeline这个添加进去

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated', 'onLaunch',
  'onLoad',
  'onShow',
  'onReady',
  'onHide',
  'onUnload',
  'onPullDownRefresh',
  'onReachBottom',
  'onShareAppMessage',
  'onShareTimeline',
  'onPageScroll',
  'onTabItemTap',
  'attached',
  'ready',
  'moved',
  'detached'
];

<!-- ============================== -->
