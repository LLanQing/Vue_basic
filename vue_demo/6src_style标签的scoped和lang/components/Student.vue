<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h3 class="title">{{msg }}</h3>
    <h3>学生名称：{{name}}</h3>
    <h3>学生年龄：{{age}}</h3>
    <button >点击显示学生姓名</button>
    <hr>

  </div>
</template>

<script>
  // 组件的交互代码（方法，数据等）

  //一般暴露单个对象使用默认暴露，结合组件的简写方式
  export default {
    name:'Student',
    data () {
      return {
        msg:'我是一名学生',
      }
    },
    //props配置，接受组件外部传来的数据，优先级比data高，且不允许修改（修改会报错）
    props:['name','age'],

    methods: {

    },

  }
</script>

<style scoped>
/* 组件的样式 
## scoped 样式
1. 作用：让样式在局部生效，防止冲突。
2. 写法：`<style scoped>`
*/
  .demo{
    background-color:pink;
  }
</style>