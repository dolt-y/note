/**
 * 抽象工厂模式:抽象工厂模式是一种创建型设计模式， 它能创建一系列相关的对象， 而无需指定其具体类。
   抽象工厂模式的关键点:

   抽象工厂：定义创建产品的接口，通常包括多个创建方法，每个方法负责创建一种产品。
   具体工厂：实现抽象工厂接口，负责实例化具体的产品。
   抽象产品：定义产品的接口，所有具体产品都实现这个接口。
   具体产品：实现抽象产品接口的具体类。
   
   优点:
   解耦：客户端代码不需要知道具体的产品类，只需依赖于抽象工厂接口。
   扩展性：如果需要添加新的产品，只需创建新的具体产品类和相应的工厂类，而不需要修改现有代码。
   灵活性：可以根据不同的条件返回不同的产品实例。
 */

// 抽象产品A
public interface ProductA{
    void use();
}
// 抽象产品B
public interface ProductB{
    void use();
}
// 具体产品A1
public class ConcreteProductA1 implements ProductA{
    @Override
    public void use() {
        System.out.println("具体产品A1被使用");
    }
}
// 具体产品A2
public class ConcreteProductA2 implements ProductA{
    @Override
    public void use() {
        System.out.println("具体产品A2被使用");
    }
}
// 具体产品B1
public class ConcreteProductB1 implements ProductB{
    @Override
    public void use() {
        System.out.println("具体产品B1被使用");
    }
}
// 具体产品B2
public class ConcreteProductB2 implements ProductB{
    @Override
    public void use() {
        System.out.println("具体产品B2被使用");
    }
}
// 抽象工厂
public interface AbstractFactory{
    ProductA createProductA();
    ProductB createProductB();
}
// 具体工厂1
public class ConcreteFactory1 implements AbstractFactory{
    @Override
    public ProductA createProductA() {
        return new ConcreteProductA1();
    }
    @Override
    public ProductB createProductB() {
        return new ConcreteProductB1();
    }
}
// 具体工厂2
public class ConcreteFactory2 implements AbstractFactory{
    @Override
    public ProductA createProductA() {
        return new ConcreteProductA2();
    }
    @Override
    public ProductB createProductB() {
        return new ConcreteProductB2();
    }
}

// 客户端代码
public class Client{
    public static void main(String[] args) {
        AbstractFactory factory = new ConcreteFactory1();
        ProductA productA = factory.createProductA();
        productA.use();
        ProductB productB = factory.createProductB();
        productB.use();
    }
}