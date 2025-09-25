# Webpack `[chunkhash]` 详解

## 1. `[chunkhash]` 是什么？

`[chunkhash]` 是 Webpack 在打包输出时提供的一种占位符（placeholder）。它的核心作用是根据 **Chunk 内容的唯一哈希值**，并将其作为文件名的一部分。

*   **`Chunk`**: 在 Webpack 中，一个 Chunk 是一个或多个模块的集合。例如，你的 `app.js` 文件就是一个 Chunk，你的 `vendor.js` 也可能是一个 Chunk。
*   **生成方式**: 当 Webpack 打包一个 Chunk 时，它会遍历该 Chunk 内部所有模块的**内容**，然后通过某种哈希算法（如 MD5 或 SHA256）计算出一个哈希值。这个哈希值就是 `chunkhash`。

## 2. 核心目的：解决浏览器缓存问题

在没有 `[chunkhash]` 的情况下，如果你的 JavaScript 文件名总是 `app.js`，那么浏览器可能会一直使用它本地缓存的旧文件，即使你已经更新了服务器上的 `app.js` 文件。这会导致用户看到的是旧版本的应用程序。

`[chunkhash]` 就是为了解决这个“脏读”问题而生。

## 3. 工作原理

*   **内容不变，哈希不变**:
    *   如果一个 Chunk 的**内容没有发生任何改变**，Webpack 计算出的 `chunkhash` 值就会保持不变。
    *   因此，生成的文件名也不会改变（例如 `app.a1b2c3d4.js` 依然是 `app.a1b2c3d4.js`）。
    *   浏览器发现文件名一致，并且缓存有效，就会直接使用本地缓存，无需重新下载。

*   **内容改变，哈希改变**:
    *   如果一个 Chunk 的**任何内容发生了改变**，Webpack 就会计算出一个**全新的 `chunkhash` 值**。
    *   这样，生成的文件名就会发生变化（例如从 `app.a1b2c3d4.js` 变为 `app.e5f6g7h8.js`）。
    *   浏览器会发现本地缓存中没有 `app.e5f6g7h8.js` 这个文件，从而强制从服务器下载最新的文件。

## 4. 与其他哈希占位符的区别 (补充知识点)

理解 `[hash]`、`[chunkhash]` 和 `[contenthash]` 的区别有助于更精细地控制缓存策略。

*   **`[hash]`**:
    *   代表**整个应用的构建过程**的哈希值。
    *   只要有**任何一个文件**发生变化，整个构建的 `hash` 值就会改变。
    *   这会导致即使某个 Chunk 的内容没有变化，其文件名也会因 `hash` 的改变而改变，迫使浏览器重新下载所有文件。不利于长期缓存。
    *   **不推荐**用于生产环境的长期缓存。

*   **`[chunkhash]`**:
    *   代表**每个 Chunk** 的哈希值。
    *   只有当**当前 Chunk 的内容**发生变化时，其 `chunkhash` 才会改变。
    *   这是实现**长期缓存**的理想选择，因为只有真正更新的文件才会被重新下载。

*   **`[contenthash]`**:
    *   代表**文件内容**的哈希值。主要用于提取出的 CSS 文件。
    *   当你使用 `ExtractTextPlugin` 或 `mini-css-extract-plugin` 将 CSS 提取到独立文件时，如果 CSS 文件内容改变，`contenthash` 就会改变。
    *   与 `chunkhash` 类似，但更专注于**非 JavaScript 资源**的内容哈希。

## 5. `[chunkhash]` 带来的主要好处

1.  **实现浏览器长期缓存**: 这是最核心的好处。对于不经常变动的第三方库代码，用户只需首次下载，之后便可永久缓存，极大地加快二次加载速度。
2.  **CDN 友好**: 与 CDN (内容分发网络) 配合使用时，CDN 可以更好地缓存这些带哈希值的文件，提高全球访问速度。
3.  **减少服务器压力**: 降低了对服务器的重复请求。
4.  **精确更新**: 只有真正修改过的文件才会被重新下载，最大化利用缓存，节省用户流量。

## 6. 在 Webpack 配置中的应用示例

在生产环境的 Webpack 配置中，你通常会看到 `[chunkhash]` 的应用：

```javascript
// ...
output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'), // JavaScript 文件使用 chunkhash
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js') // 异步加载的 Chunk 也使用 chunkhash
},
plugins: [
    // ...
    new ExtractTextPlugin({
        filename: utils.assetsPath('css/[name].[contenthash].css') // CSS 文件使用 contenthash
    }),
    // ...
]
// ...
```
```