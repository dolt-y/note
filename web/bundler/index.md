# 前端构建工具 vite vs webpack

1. 核心概念 

| 特性   | Webpack                                    | Vite                                  |
| ---- | ------------------------------------------ | ------------------------------------- |
| 构建类型 | 打包构建（bundle-based）                         | 原生 ES 模块开发 + 打包（dev server 快速启动）      |
| 构建模式 | 单线程打包，可用 `thread-loader` 或 `parallel` 插件优化 | 原生 ESM + Rollup 打包，开发模式无需打包           |
| 入口文件 | 通过 `entry` 指定                              | 默认 `index.html` 或 `main.js`/`main.ts` |
| 输出文件 | `output` 指定 `filename` 和 `path`            | `build.outDir` 默认 `dist`              |
| 热更新  | HMR 通过 WebSocket 实现                        | 原生 ESM + HMR，几乎瞬时刷新                   |

2. 配置结构

Webpack 配置结构

```js
module.exports = {
  entry: './src/main.js',      // 入口
  output: {                     // 输出
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {                     // 模块处理 loader 对文件进行转换
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [                    // 插件 如压缩、分割代码等作用于 bundle
    new HtmlWebpackPlugin({ template: './index.html' })
  ],
  resolve: {                    // 解析
    extensions: ['.js', '.ts', '.vue']
  },
  devServer: {                  // 开发服务器
    port: 8080,
    hot: true,
  },
  mode: 'development'
}
```

Vite 配置结构

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    open: true,
    proxy: { '/api': 'http://localhost:4000' }
  },
  build: {
    outDir: 'dist',
    minify: 'esbuild', // 或 terser
    rollupOptions: {
      input: '/src/main.js'
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
```

3. 核心概念
  
  # 模块处理
  1. Webpack: 使用 loader 转换各种文件类型，例如：babel-loader → JS 转码、ts-loader → TypeScript、style-loader + css-loader → CSS等
  2. Vite: 原生 ESM 加载，开发环境无需打包，构建时使用 Rollup 插件处理文件：JS/TS → esbuild 转译、Vue/React → 官方插件处理、CSS/SCSS → 内置支持或 PostCSS
   
  # 热更新
  1. Webpack: HMR 通过 WebSocket 实现，浏览器刷新时自动请求更新模块
  2. Vite: 原生 ESM + HMR，几乎瞬时刷新，无需刷新浏览器
   
4. 知识树

# webpack

```
Webpack
├── 核心概念
│   ├── entry/output
│   ├── mode
│   ├── module/loaders
│   └── plugins
├── DevServer
│   ├── HMR
│   └── Proxy
├── 构建优化
│   ├── Tree-shaking
│   ├── 代码分割
│   ├── 压缩
│   └── 缓存
├── 配置
│   ├── resolve
│   ├── alias
│   └── externals
├── 插件体系
│   ├── HtmlWebpackPlugin
│   ├── MiniCssExtractPlugin
│   └── DefinePlugin
└── Loader
    ├── Babel
    ├── TS
    ├── CSS/SCSS
    └── 文件类型
```

# vite

```
Vite
├── 核心概念
│   ├── DevServer (ESM)
│   ├── Build (Rollup)
│   └── HMR
├── 配置
│   ├── server
│   ├── build
│   ├── resolve/alias
│   └── plugins
├── 插件体系
│   ├── 官方插件
│   └── Rollup 社区插件
├── 构建优化
│   ├── Tree-shaking
│   ├── 代码分割
│   ├── 压缩
│   └── 缓存
└── 常用命令
    ├── vite
    ├── vite build
    └── vite preview
```