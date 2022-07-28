<template>
  <div class="category">
    <h3>{{title}}</h3>
    <!-- 插槽，等待组件的使用者来填充HTML结构
      让父组件可以向子组件指定位置插入 html 结构，也是一种组件间通信的方式，
      适用于 父组件 ===> 子组件-->
    <!-- 作用域插槽，数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。 -->
    <slot :games="games">我是默认值，当组件的使用者没有传递结构我就显示</slot>
  </div>
</template>

<script>
export default {
  name:'Category',
  props:['title'],
    data(){
    return {
      games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
    }
}
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
</style>