# 浏览器 Observer API 总结

浏览器中常用的 Observer API 用于监听各种变化，包括 DOM、元素尺寸、可视状态和性能指标。它们都是异步回调，性能较传统事件更优。

---

## 1. MutationObserver

- **监听对象**：DOM 节点变化（新增/删除/属性/文本）
- **典型用途**：动态内容监控、替代旧的 DOM 事件
- **示例**：

```javascript
const observer = new MutationObserver(mutations => {
  mutations.forEach(m => console.log(m));
});

observer.observe(targetNode, { 
  childList: true, 
  attributes: true, 
  subtree: true, 
  characterData: true 
});
// 停止监听
observer.disconnect();
```

- 备注：不监听样式或尺寸变化。

## 2. IntersectionObserver

- **监听对象**：元素可见性变化
- **典型用途**：懒加载、图片懒加载、滚动加载
- **示例**：

```javascript
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => console.log(entry.isIntersecting));
}, { threshold: [0, 0.5, 1] });

observer.observe(targetElement);

// 停止监听
observer.unobserve(targetElement);
```

- 备注：可以设置阈值，优化性能。

## 3. ResizeObserver

- **监听对象**：元素尺寸变化
- **典型用途**：响应式布局、元素大小变化时触发回调
- **示例**：

```javascript
const observer = new ResizeObserver(entries => {
  entries.forEach(entry => {
    console.log(entry.contentRect.width, entry.contentRect.height);
  });
});

observer.observe(targetElement);

// 停止监听
observer.unobserve(targetElement);
observer.disconnect();
```

- 备注：不监听位置变化，只关注尺寸。 

## 4. PerformanceObserver

- **监听对象**：浏览器性能指标变化
- **典型用途**：页面加载、页面渲染、页面交互
- **示例**：
  
```javascript
const observer = new PerformanceObserver(list => {
  list.getEntries().forEach(entry => console.log(entry));
});

observer.observe({ entryTypes: ['paint', 'measure', 'resource'] });
```