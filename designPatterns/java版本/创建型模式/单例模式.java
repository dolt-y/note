/**
 * 单例模式（Singleton Pattern）
 * 保证一个类仅有一个实例，并提供一个访问它的全局点。
 */

/*  饿汉式  */
public class Singleton {
    private static final Singleton instance = new Singleton();

    private Singleton() {
    }

    public static Singleton getInstance() {
        return instance;
    }
}

/*  懒汉式  */
public class Singleton {
    private static Singleton instance = null;

    private Singleton() {
    }

    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
/*  双重检查锁定  */
public class Singleton {
    private static volatile Singleton instance;

    private Singleton() {}

    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}



