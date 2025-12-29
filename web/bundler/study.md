# 性能优化点

* 代码切割 
  - 第三方库切割 venders
  - 公用代码 切割 commons

* worker-loader 转化为 blob URL挂载到bundle中,页面无需再请求js资源
