/**
   工厂模式简介: 工厂方法模式是一种创建型设计模式， 其在父类中提供一个创建对象的方法， 允许子类决定实例化对象的类型。
   关键点:
   
   1.定义接口：工厂方法模式通常会定义一个产品接口，所有具体产品都实现这个接口。
   2.具体产品：具体的产品类实现了产品接口，提供了具体的功能。
   3.工厂接口：工厂方法模式定义了一个工厂接口，包含一个创建产品的方法。
   4.具体工厂：具体的工厂类实现了工厂接口，负责实例化具体的产品。

   优点:
   解耦：客户端代码不需要知道具体的产品类，只需依赖于工厂接口。
   扩展性：如果需要添加新的产品，只需创建新的产品类和相应的工厂类，而不需要修改现有代码。
   灵活性：可以根据不同的条件返回不同的产品实例
 * 
 */
public interface Product {
    void show();
}
public class ConcreteProductA implements Product {
    @Override
    public void show() {
        System.out.println("This is a ConcreteProductA");    
    }
}
public class ConcreteProductB implements Product {
    @Override
    public void show() {
        System.out.println("This is a ConcreteProductB");    
    }
}
public interface Factory {
    Product createProduct();
}
public class ConcreteFactoryA implements Factory {
    @Override
    public Product createProduct() {
        return new ConcreteProductA();
    }
}
public class ConcreteFactoryB implements Factory {  
    @Override
    public Product createProduct() {
        return new ConcreteProductB();
    }
}
public class Client {
    public static void main(String[] args) {
        Factory factoryA = new ConcreteFactoryA();
        Product productA = factoryA.createProduct();
        productA.show();
        Factory factoryB = new ConcreteFactoryB();
        Product productB = factoryB.createProduct();
        productB.show();
    }
}
