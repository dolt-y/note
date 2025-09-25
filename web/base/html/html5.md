# HTML5 语义化标签总结

## 📌 定义
HTML5 语义化标签 = **带语义的 `<div>`**  
- 默认样式：大多数仅 `display: block`，不会有复杂视觉效果。  
- 主要作用：结构清晰、利于 SEO、提升可访问性。  

---

## 🔖 常见标签

### 页面结构类
- `<header>`：头部（logo、标题、导航）。  
- `<nav>`：导航区域。  
- `<main>`：页面主体（页面唯一）。  
- `<section>`：独立主题区块。  
- `<article>`：独立内容（文章、帖子、评论）。  
- `<aside>`：侧边栏（广告、推荐）。  
- `<footer>`：底部（版权、声明、联系方式）。 

### 文本内容类
- `<h1> ~ <h6>`：标题层级。  
- `<p>`：段落。  
- `<blockquote>`：长引用。  
- `<q>`：短引用。  
- `<abbr>`：缩写。  
- `<address>`：联系信息。  
- `<cite>`：作品引用。  

### 多媒体类
- `<figure>`：独立媒体单元（图表、代码块）。  
- `<figcaption>`：说明文字。  
- `<audio>`：音频。  
- `<video>`：视频。  
- `<source>`：媒体资源。  
- `<track>`：字幕/辅助文本。  

### 表单类
- `<form>`：表单。  
- `<label>`：控件标签。  
- `<fieldset>`：分组。  
- `<legend>`：分组标题。  
- `<input>`：输入控件。  
- `<textarea>`：多行输入。  
- `<button>`：按钮。  
- `<datalist>`：输入建议。  
- `<output>`：输出结果。  

### 列表类
- `<ul>`：无序列表。  
- `<ol>`：有序列表。  
- `<li>`：列表项。  
- `<dl>`：定义列表。  
- `<dt>`：定义项。  
- `<dd>`：定义描述。  

---

## ✅ 优势
1. 代码结构清晰，易读易维护。  
2. 搜索引擎更容易理解（SEO 友好）。  
3. 屏幕阅读器识别良好（可访问性）。  
4. 避免滥用 `<div>`，让标签更有意义。  

---

## 📖 页面结构示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>语义化示例</title>
</head>
<body>
  <header>
    <h1>我的网站</h1>
    <nav>
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">文章</a></li>
        <li><a href="#">关于</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h2>文章标题</h2>
        <p>作者 · 时间</p>
      </header>
      <section>
        <p>这里是文章内容...</p>
      </section>
      <footer>
        <p>评论区</p>
      </footer>
    </article>

    <aside>
      <h3>推荐阅读</h3>
      <ul>
        <li><a href="#">相关链接 1</a></li>
        <li><a href="#">相关链接 2</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>© 2025 我的站点</p>
  </footer>
</body>
</html>
