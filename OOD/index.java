// 类修饰符

public class index {
    public static void main(String[] args) {
        // public 共有的
        // private 私有的
        // protected 受保护的
        // default 默认的(不写修饰符)

        // 类的成员变量
        // 成员变量的修饰符
        // static 静态的
        // final 最终的(常量)
        // transient 瞬态的(序列化时忽略该属性)
        // volatile 易变的(多线程编程中使用)

        // 方法的修饰符
        // abstract 抽象的(只能用在类和方法上)
        // synchronized 同步的(多线程编程中使用)
        // native 本地的(与平台相关联的方法)

    }
}

// 继承
abstract class Animal {
    // 抽象类
    abstract void eat(); // 抽象方法
}

// 接口
interface Flyable {
    void fly();
}