# React Hooks 笔记

## 1. 基础 Hooks
- **useState**：定义状态
- **useEffect**：副作用（请求 / 订阅 / DOM 操作）
- **useContext**：获取 Context 值

## 2. 进阶 Hooks
- **useReducer**：复杂状态逻辑（类似 Redux）
- **useCallback**：缓存函数引用，避免子组件重复渲染
- **useMemo**：缓存计算结果，提升性能
- **useRef**：获取 DOM / 跨渲染保存数据
- **useImperativeHandle**：自定义暴露给父组件的 ref API
- **useLayoutEffect**：DOM 更新后同步执行
- **useDebugValue**：DevTools 调试信息

## 3. React 18 新增 Hooks
- **useTransition**：区分紧急 / 非紧急更新，优化交互
- **useDeferredValue**：延迟更新，避免频繁渲染
- **useId**：生成稳定唯一 ID（SSR 友好）
- **useSyncExternalStore**：订阅外部状态（Redux / Zustand）
- **useInsertionEffect**：样式注入前执行

## 4. 自定义 Hooks
- 本质：组合已有 Hooks 封装逻辑
- 规则：命名必须以 `use` 开头

示例：
```tsx
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return width;
}
```

## 5. 对比表
| Hook                  | 用途                     |
|-----------------------|--------------------------|
| useState              | 状态管理                 |
| useEffect             | 副作用处理               |
| useContext            | 跨组件共享数据           |
| useReducer            | 复杂状态逻辑             |
| useCallback           | 缓存函数                 |
| useMemo               | 缓存计算结果             |
| useRef                | DOM / 可变数据           |
| useImperativeHandle   | 自定义 ref API           |
| useLayoutEffect       | DOM 更新后同步执行       |
| useDebugValue         | DevTools 调试信息        |
| useTransition         | 并发更新优化             |
| useDeferredValue      | 延迟值更新               |
| useId                 | 生成唯一 ID              |
| useSyncExternalStore  | 订阅外部状态             |
| useInsertionEffect    | 样式注入控制             |

## 6. 使用建议
1. 简单状态：`useState` + `useEffect`
2. 复杂逻辑：`useReducer`
3. 性能优化：`useMemo` / `useCallback`
4. DOM 操作：`useRef`
5. 并发优化：`useTransition` / `useDeferredValue`
