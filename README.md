# first-react学习笔记
感谢《React.js 小书》这篇教程。
通俗易懂，深入浅出。
http://huziketang.mangojuice.top/books/react/

### 一切皆组件
react一个重要思想 - 一切皆组件。
redux和router皆是组件。
redux让全部组件可访问管理的状态，添加一个最顶层组件。
router路由为根据url的路径匹配Route组件对应path的组件，ui内容以component props传入。

### react css策略
* CSS Modules
* css components(css in js)

### jsx
react 将jsx转换成js对象，再通过react-dom将其渲染成dom插入到根节点上。  
dom的结构可以用js对象来描述  
例如：
~~~html
<div class='box' id='content'>
  <div class='title'>Hello</div>
  <button>Click</button>
</div>
~~~
可以用如下的js对象表示：
~~~JavaScript
{
  tag: 'div',
  attrs: { className: 'box', id: 'content'},
  children: [
    {
      tag: 'div',
      arrts: { className: 'title' },
      children: ['Hello']
    },
    {
      tag: 'button',
      attrs: null,
      children: ['Click']
    }
  ]
}
~~~
react并没有将jsx直接渲染成DOM，而是先转换成js对象，这样就不局限于只渲染成DOM，还可以渲染成其他的view，例如原生App等。react-native便是基于此。
