## 关于 函数写法和类写法区别：目前随着Hooks的出现，函数组件和类组件的写法已经逐渐趋于统一，主流的写法是函数组件。

函数组件：

```jsx
import React from'react';

function HelloWorld() {
  return <h1>Hello World</h1>;
}

export default HelloWorld;
```

类组件：

```jsx
import React from'react';

class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

export default HelloWorld;
```

## 组件的导出方式

组件的导出方式有两种：

- 默认导出：`export default HelloWorld;`
- 命名导出：`export const HelloWorld = () => <h1>Hello World</h1>;`

一个组件里面只能有一个默认导出。

## 组件的命名规范

组件的命名规范一般是驼峰命名法，即将多个单词的首字母大写，而不使用下划线。

## 组件的标签

注意：组件的标签必须是大写字母开头，例如：`<HelloWorld />`。

## 组件里面的大括号 {}

1. 组件里面的大括号代表属性的变量，可以接收外部传入的属性。
例：

```jsx
import React from'react';

function HelloWorld({ name }) {
  return <h1>Hello {name}</h1>;
}

export default HelloWorld;
```

2. 组件里面的大括号里面的内容是 JSX 语法，可以写任何 JSX 代码。
例：

```jsx
import React from'react';

function HelloWorld() {
  return (
    { xxx &&(<div>
      <h1>Hello World</h1> // JSX 语法 控制某个元素是否渲染
      <p>This is a paragraph</p>
    </div>
  )})
}

export default HelloWorld;
```


3. 组件里面的大括号里面的内容可以是函数，也可以是 JSX 语法。

例：
```jsx
import React from'react';

function HelloWorld() {
  const handleClick = () => {
    console.log('Clicked');
  };

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default HelloWorld;
```

## props

父子组件通信的主要方式是 props。

父组件通过 props 向子组件传递数据，子组件通过 props 获取数据。

1. 父组件通过 props 向子组件传递数据：

```jsx
export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}
```

2. 子组件通过 props 获取数据：

```jsx
import React from'react';

function Avatar({ person, size }) {
  return (
    <img
      src={`https://cdn.example.com/images/${person.imageId}.jpg`}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default Avatar;
```