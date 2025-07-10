# TypeScript

## 什么是TypeScript？
TypeScript 是一种由微软开发的自由和开源的编程语言，它是 JavaScript 的超集，并添加了可选的静态类型和基于类的面向对象编程。TypeScript 编译成 JavaScript 代码，可以运行在任何浏览器、Node.js 或任何其他 JavaScript 环境中。TypeScript 与 JavaScript 之间有着紧密的联系，并且可以与 JavaScript 代码无缝集成。

# TypeScript 笔记

## 1. 基本类型

- **布尔类型** (`boolean`): 表示 `true` 或 `false`。
  ```typescript
  let isActive: boolean = true;
  ```

- **数字类型** (`number`): 表示整数和浮点数。
  ```typescript
  let age: number = 30;
  ```

- **字符串类型** (`string`): 表示文本。
  ```typescript
  let username: string = "Alice";
  ```

- **数组类型**: 可以使用 `类型[]` 或 `Array<类型>` 表示数组。
  ```typescript
  let hobbies: string[] = ["reading", "gaming"];
  let scores: Array<number> = [90, 85, 88];
  ```

- **元组类型**: 固定长度和类型的数组。
  ```typescript
  let user: [number, string] = [1, "Alice"];
  ```

- **枚举类型** (`enum`): 定义一组命名的常量。
  ```typescript
  enum Direction {
      Up,
      Down,
      Left,
      Right,
  }
  ```

## 2. 接口（Interfaces）

- 定义对象的结构，指定属性和方法。
  ```typescript
  interface User {
      id: number;
      name: string;
      email?: string; // 可选属性
  }

  const user: User = {
      id: 1,
      name: "Alice",
  };
  ```

## 3. 类型别名（Type Aliases）

- 为复杂类型创建简短的名称。
  ```typescript
  type StringOrNumber = string | number;

  let id: StringOrNumber;
  id = "123"; // 合法
  id = 456; // 合法
  ```

## 4. 泛型（Generics）

- 允许创建可以处理多种类型的函数和类。

### 泛型函数
```typescript
function identity<T>(arg: T): T {
    return arg;
}

const output = identity<string>("Hello, TypeScript!"); // output 的类型是 string
```

### 泛型类
```typescript
class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }
}

// 使用示例
const numberStack = new Stack<number>();
numberStack.push(1);
const num = numberStack.pop(); // num 的类型是 number | undefined
```

### 泛型约束
- 限制泛型的类型。
```typescript
function getKeys<T extends object>(obj: T): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[];
}
```

## 5. 枚举（Enums）

- 定义一组命名的常量，便于管理和使用。
```typescript
enum Color {
    Red,
    Green,
    Blue,
}

let c: Color = Color.Green; // c 的值是 1
```

## 6. 交叉类型（Intersection Types）

- 将多个类型合并为一个类型。
```typescript
interface Person {
    name: string;
}

interface Employee {
    id: number;
}

type EmployeePerson = Person & Employee;

const emp: EmployeePerson = {
    name: "Alice",
    id: 1,
};
```

## 7. 联合类型（Union Types）

- 允许一个变量可以是多种类型之一。
```typescript
let value: string | number;
value = "Hello"; // 合法
value = 42; // 合法
```

## 8. 类型推断

- TypeScript 可以根据变量的初始值自动推断类型。
```typescript
let message = "Hello, TypeScript!"; // TypeScript 推断 message 的类型为 string
```

```
