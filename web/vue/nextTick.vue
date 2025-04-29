nextTick()是Vue.js中的一个核心工具方法，用于在下一次DOM更新周期后执行回调函数。
它的主要作用是确保数据变化后，DOM已经更新完成，从而可以安全地操作最新的DOM或访问更新后的数据。

为什么需要nextTick()?,Vue的响应式系统在数据变化时,并不会立即更新DOM，
而是会将组件的更新推入一个队列，并在同一时间循环中缓冲所有数据变化，等到当前事件循环结束时，Vue才会批量执行DOM更新（称为异步更新队列）。
这种设计避免了重复渲染，提升了性能。
但这也导致一个问题：如果在数据变化后立即操作 DOM，此时 DOM 可能还未更新。此时，nextTick 就能确保回调函数在 DOM 更新完成后执行。

在数据变化后操作 DOM
例如：修改数据后立即获取 DOM 元素的属性（如宽度、高度）。

this.message = 'Updated';
this.$nextTick(() => {
  console.log(this.$el.textContent); // 输出 'Updated'
});
在 created 生命周期中操作 DOM
created 阶段 DOM 尚未渲染，此时操作 DOM 需要通过 nextTick 等待挂载完成。

created() {
  this.$nextTick(() => {
    // 此时可以安全操作 DOM
  });
}