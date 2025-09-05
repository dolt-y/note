# 设计模式七大原则 (Java示例)

## 1. 单一职责原则 (Single Responsibility Principle, SRP)
**定义**：一个类只负责一个职责，变化的原因只有一个。

### 示例
```java
// ❌ 错误示例：一个类既负责存储数据，又负责打印
class User {
    String name;
    void saveToDB() { /* 保存数据库 */ }
    void printUser() { /* 打印用户信息 */ }
}

// ✅ 正确示例：分离职责
class User {
    String name;
}

class UserRepository {
    void saveToDB(User user) { /* 保存数据库 */ }
}

class UserPrinter {
    void printUser(User user) { /* 打印用户信息 */ }
}
```

---

## 2. 开闭原则 (Open-Closed Principle, OCP)
**定义**：对扩展开放，对修改关闭。

### 示例
```java
// 抽象形状
interface Shape {
    void draw();
}

// ✅ 新增扩展时不修改旧代码
class Circle implements Shape {
    public void draw() { System.out.println("画圆"); }
}

class Rectangle implements Shape {
    public void draw() { System.out.println("画矩形"); }
}
```

---

## 3. 里氏替换原则 (Liskov Substitution Principle, LSP)
**定义**：子类必须能替换父类，保证功能不变。

### 示例
```java
class Bird {
    void fly() { System.out.println("鸟会飞"); }
}

// ❌ 错误：企鹅不会飞
class Penguin extends Bird {
    void fly() { throw new UnsupportedOperationException("企鹅不会飞"); }
}

// ✅ 正确：重新设计
class Bird {}
class FlyingBird extends Bird {
    void fly() {}
}
class Sparrow extends FlyingBird {}
class Penguin extends Bird {}
```

---

## 4. 依赖倒置原则 (Dependency Inversion Principle, DIP)
**定义**：高层模块不依赖低层模块，二者都依赖抽象。

### 示例
```java
// 抽象
interface MessageSender {
    void send(String message);
}

// 实现
class EmailSender implements MessageSender {
    public void send(String message) { System.out.println("发送邮件: " + message); }
}
class SmsSender implements MessageSender {
    public void send(String message) { System.out.println("发送短信: " + message); }
}

// 高层依赖抽象
class Notification {
    private MessageSender sender;
    Notification(MessageSender sender) {
        this.sender = sender;
    }
    void notifyUser(String msg) { sender.send(msg); }
}

public class Main {
    public static void main(String[] args) {
        Notification n1 = new Notification(new EmailSender());
        n1.notifyUser("你好 Email");

        Notification n2 = new Notification(new SmsSender());
        n2.notifyUser("你好 SMS");
    }
}
```

---

## 5. 接口隔离原则 (Interface Segregation Principle, ISP)
**定义**：接口要小而专，不要设计“胖接口”。

### 示例
```java
// ❌ 错误：接口过大
interface Worker {
    void work();
    void eat();
}

// ✅ 正确：分离接口
interface Workable {
    void work();
}
interface Eatable {
    void eat();
}

class Robot implements Workable {
    public void work() { System.out.println("机器人工作"); }
}

class Human implements Workable, Eatable {
    public void work() { System.out.println("人类工作"); }
    public void eat() { System.out.println("人类吃饭"); }
}
```

---

## 6. 迪米特法则 (Law of Demeter, LoD)
**定义**：最少知道原则。一个类应尽量少了解其他类。

### 示例
```java
// ❌ 错误：直接操作内部类
class Engine {
    void start() { System.out.println("引擎启动"); }
}

class Car {
    Engine engine = new Engine();
    Engine getEngine() { return engine; }
}

class Driver {
    void drive(Car car) {
        car.getEngine().start(); // 知道太多
    }
}

// ✅ 正确：只暴露必要方法
class CarBetter {
    private Engine engine = new Engine();
    void start() { engine.start(); }
}

class DriverBetter {
    void drive(CarBetter car) {
        car.start(); // 只知道 Car
    }
}
```

---

## 7. 合成复用原则 (Composite Reuse Principle, CRP)
**定义**：优先使用对象组合而不是类继承。

### 示例
```java
// ❌ 错误：继承导致紧耦合
class DatabaseConnection {}
class UserService extends DatabaseConnection {}

// ✅ 正确：组合更灵活
class UserServiceBetter {
    private DatabaseConnection dbConn;
    UserServiceBetter(DatabaseConnection dbConn) {
        this.dbConn = dbConn;
    }
}
```

---

# 总结
- **单一职责原则**：一个类只做一件事
- **开闭原则**：对扩展开放，对修改关闭
- **里氏替换原则**：子类能替代父类
- **依赖倒置原则**：依赖抽象而不是具体实现
- **接口隔离原则**：接口要小而专
- **迪米特法则**：最少知道原则
- **合成复用原则**：优先组合而非继承
