/* ========================
  Promise核心概念
======================== */
/**
 * Promise对象代表一个异步操作的最终状态和结果值
 * 三种状态：
 *   - Pending   : 初始状态，操作未完成
 *   - Fulfilled : 操作成功完成
 *   - Rejected  : 操作失败
 */

// 基础示例：模拟数据请求
function fetchUserData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.2;
        success 
          ? resolve({ id: 1, name: "John" }) 
          : reject("Network Error!");
      }, 1000);
    });
  }
  
  // 使用示例
  fetchUserData()
    .then(user => console.log("获取用户数据:", user))
    .catch(err => console.error("发生错误:", err));
  
  
  /* ========================
    Promise静态方法详解
  ======================== */
  // 1. 快速创建Promise ------------------
  const preResolved = Promise.resolve(42);  // 直接创建成功状态
  const preRejected = Promise.reject("Error"); // 直接创建失败状态
  
  // 2. 并行控制方法 ----------------------
  const apiRequests = [
    fetch("/api/users"),
    fetch("/api/products"),
    fetch("/api/orders")
  ];
  
  // 方法对比表：
  // | 方法            | 成功条件       | 返回值               | 典型场景              |
  // |-----------------|--------------|---------------------|---------------------|
  // | Promise.all     | 全部成功       | 结果数组             | 多数据依赖操作（例如多文件上传,之前开发遇见过）         |
  // | Promise.race    | 第一个完成     | 第一个结果/错误       | 超时控制             |
  // | Promise.allSettled| 全部完成      | 状态描述对象数组       | 日志记录/最终处理      |
  // | Promise.any     | 任意一个成功    | 第一个成功结果        | 多源请求冗余策略       |
  
  // 实战示例：带超时控制的请求
  function fetchWithTimeout(url, timeout = 3000) {
    const fetchPromise = fetch(url);
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(`请求超时（${timeout}ms）`), timeout)
    );
    
    return Promise.race([fetchPromise, timeoutPromise]);
  }
  
  // 使用示例
  fetchWithTimeout("https://api.example.com/data")
    .then(response => response.json())
    .catch(err => console.error(err));
  
  
  /* ========================
    async/await 最佳实践
  ======================== */
  /**
   * async函数两大特性：
   * 1. 总是返回Promise对象
   * 2. 内部可使用await暂停执行，直到Promise敲定
   * 
   * 优势：
   * - 同步式代码风格
   * - 使用try/catch统一处理同步/异步错误
   */
  
  async function getUserProfile(userId) {
    try {
      // 并行请求优化
      const [user, orders] = await Promise.all([
        fetch(`/api/users/${userId}`),
        fetch(`/api/orders?user=${userId}`)
      ]);
      
      const userData = await user.json();
      const orderData = await orders.json();
      
      return { ...userData, orders: orderData };
      
    } catch (error) {
      console.error("数据加载失败:", error);
      throw new Error("用户资料获取失败");
    }
  }
  
  // 使用示例
  async function main() {
    try {
      const profile = await getUserProfile(123);
      console.log("用户完整资料:", profile);
    } catch (err) {
      console.error("主流程错误:", err);
    }
  }
  
  main();
  
  
  /* ========================
    高级技巧：Promise链式操作
  ======================== */
  // 中间件模式示例
  function addLogging(promise) {
    return promise
      .then(result => {
        console.log("成功:", result);
        return result; // 传递结果
      })
      .catch(err => {
        console.error("失败:", err);
        throw err; // 继续传递错误
      });
  }
  
  // 使用链式操作处理复杂流程
  addLogging(fetchUserData())
    .then(user => fetch(`/api/orders/${user.id}`))
    .then(orders => processOrders(orders))
    .then(finalResult => saveData(finalResult));