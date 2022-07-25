<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h3>{{msg | mySlice}}</h3>
    <h3>学生名称：{{name}}</h3>
    <h3>学生年龄：{{age}}</h3>
    <button @click="showName">点击显示学生姓名</button>
    <hr>
    <button @click="testClick">点击测试插件里定义的Vue原型对象的方法</button>

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
      testClick(){
        this.test()
      }
    },

  }
</script>

<style scoped>
  .demo{
    background-color:pink;
  }
</style>