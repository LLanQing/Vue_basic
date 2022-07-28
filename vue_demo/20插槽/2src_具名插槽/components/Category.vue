<template>
  <div class="category">
    <h3>{{title}}</h3>
    <!-- 插槽，等待组件的使用者来填充HTML结构
      让父组件可以向子组件指定位置插入 html 结构，也是一种组件间通信的方式，
      适用于 父组件 ===> 子组件-->
    <!-- 具名插槽，即添加一个name属性，指定插槽的名称，让父组件更好的指定插入的结构 -->
    <slot name="center">我是默认值，当组件的使用者没有传递结构我就显示</slot>
    <slot name="footer">我是默认值，当组件的使用者没有传递结构我就显示</slot>
  </div>
</template>

<script>
export default {
  name:'Category',
  props:['listData','title']
}
</script>

<style scoped>
  .category{
     background: skyblue;
     width: 200px;
     height: 300px;
   }
  h3{
    text-align: center;
    background: orange;
  }
  video {
    width: 100%;
  }
  img{
    width: 100%;
  }
</style>