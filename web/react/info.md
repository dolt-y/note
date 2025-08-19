# react 基础

## 介绍

React 是一个用于构建用户界面（UI）的 JavaScript 库，用户界面由按钮、文本和图像等小单元内容构建而成。React 是一个声明式的、组件化的、可组合的 JavaScript 库。目前，React18是一次重大更新，带来了许多新特性。

## 写法

class 组件：

```jsx
class Hello extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

ReactDOM.render(<Hello name="World" />, document.getElementById("root"));
```

函数组件：

```jsx
function Hello(props) {
  return <h1>Hello, {props.name}!</h1>;
}

ReactDOM.render(<Hello name="World" />, document.getElementById("root"));
```

## JSX

JSX 是一种 JavaScript 的语法扩展，它可以用来描述 UI 组件的结构和属性。JSX 代码可以直接嵌入到 JavaScript 代码中，也可以单独作为一个文件使用。

```jsx
const element = <h1>Hello, World!</h1>;
```

## 元素

React 元素是 React 应用的最小单位，它可以是 HTML 标签、组件、或者是自定义的元素。

## 虚拟 DOM

React 使用虚拟 DOM 来描述真实的 DOM 节点，并通过对比两棵虚拟 DOM 树的差异来计算出最小的操作集合，从而有效地更新真实的 DOM 节点。

## 组件

React 组件是 React 应用的基本单元，它可以包含 JSX、JavaScript 代码和样式。组件可以嵌套、复用和扩展。

## 生命周期

React 组件的生命周期可以分为三个阶段：挂载、渲染和卸载。

- 挂载：组件被创建并插入到 DOM 中。
- 渲染：组件的 JSX 代码被转换成真实的 DOM 节点，并插入到页面中。
- 卸载：组件从 DOM 中移除。

## 状态和属性

React 组件的状态和属性可以用来管理组件的逻辑和数据。

状态是组件内的变量，它可以用来存储组件的内部数据，并随着用户交互而发生变化。

属性是组件的外部接口，它可以用来传递数据给组件。

## 事件处理

React 组件可以响应用户的事件，比如点击、输入等。

## 路由

React 可以通过路由来实现不同页面之间的切换。

## 参考

- [React 官方文档](https://zh-hans.reactjs.org/)