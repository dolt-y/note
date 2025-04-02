# Flex布局

Flex布局是CSS3新增的一种布局方式，可以简化布局的复杂度，使得页面的布局更加灵活。

## 基本概念

Flex布局是一种一维的布局，可以沿着一条轴（横轴或竖轴）进行布局。

Flex布局包含以下几个属性：

- flex-direction：决定主轴的方向（即项目的排列方向）。
- flex-wrap：决定是否换行。
- flex-flow：是flex-direction和flex-wrap的简写形式。
- justify-content：定义了项目在主轴上的对齐方式。
- align-items：定义了项目在交叉轴上如何对齐。
- align-content：定义了多根轴线的对齐方式。

## flex-direction

flex-direction属性决定主轴的方向。
**在 Flexbox 布局中，主轴（Main Axis）和交叉轴（Cross Axis）的方向是相互垂直的。当主轴是垂直方向时，交叉轴就是水平方向；反之，当主轴是水平方向时，交叉轴就是垂直方向。**
- row（默认值）：主轴为水平方向，起点在左端。
- row-reverse：主轴为水平方向，起点在右端。
- column：主轴为垂直方向，起点在上沿。
- column-reverse：主轴为垂直方向，起点在下沿。

## flex-wrap

flex-wrap属性决定是否换行。

- nowrap（默认值）：不换行。
- wrap：换行，第一行在上方。
- wrap-reverse：换行，第一行在下方。

## justify-content

justify-content属性定义了项目在主轴上的对齐方式。

- flex-start（默认值）：左对齐。
- flex-end：右对齐。
- center：居中。
- space-between：两端对齐，项目之间的间隔都相等。
- space-around：每个项目两侧的间隔相等。

## align-items

align-items属性定义了项目在交叉轴上如何对齐。

- flex-start：交叉轴的起点对齐。
- flex-end：交叉轴的终点对齐。
- center：交叉轴的中点对齐。
- baseline：项目的第一行文字的基线对齐。
- stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

## align-content

align-content属性定义了多根轴线的对齐方式。

- flex-start：与交叉轴的起点对齐。
- flex-end：与交叉轴的终点对齐。
- center：与交叉轴的中点对齐。
- space-between：两根轴线之间的间隔相等。
- space-around：每根轴线两侧的间隔相等。
- stretch（默认值）：轴线占满整个交叉轴。 

## items子元素的属性
- order属性：定义项目的排列顺序。
- flex-grow属性：定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
- flex-shrink属性：定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
- flex-basis属性：定义了在分配多余空间之前，项目的初始大小。
- align-self属性：允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。
- **flex属性：是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto**。

**flex-grow和flex都有放大子元素的效果，那么它们的区别是什么呢？**
   - flex-grow: 在瓜分剩余空间的时候，自己本身的空间不参与计算分配。
   **例如  可以看出第二个元素和第三个元素共同瓜分剩余300px，即最后item2的宽度为100+100，item3的宽度为100+200**
  <style>
    .container {
        margin: 0 auto;
        display: flex;
        align-items: center;
        height: 100px;
        width: 600px;
        border: 1px solid #000;
    }
    .item {
        width: 100px;
        height: 100px;
        background-color: #f00;
        color: #fff;
        text-align: center;
        border: 1px solid white;
    }
    .item:nth-child(2) {
        flex-grow: 1;
    }
    .item:nth-child(3) {
        flex-grow: 2;
    }
</style>

<body>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>
</body>

   - flex: 在瓜分空间的时候，flex会考虑自己本身的空间，并且会根据剩余空间的大小，分配自己的比例。
   **例如  可以看出这里瓜分空间时，计算了本身的空间，并且分配了自己的比例，即最后item2的宽度为500/3=166.66px，item3的宽度为500/3*2=333.33px**
  <style>
    .container1 {
        margin: 0 auto;
        display: flex;
        align-items: center;
        height: 100px;
        width: 600px;
        border: 1px solid #000;
    }
    .item1 {
        width: 100px;
        height: 100px;
        background-color: #f00;
        color: #fff;
        text-align: center;
        border: 1px solid white;
    }
    .item1:nth-child(2) {
        flex: 1;
    }
    .item1:nth-child(3) {
        flex: 2;
    }
</style>
<body>
    <div class="container1">
        <div class="item1">1</div>
        <div class="item1">2</div>
        <div class="item1">3</div>
    </div>
</body>