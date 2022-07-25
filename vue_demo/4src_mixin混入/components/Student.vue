<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h3>{{msg}}</h3>
    <h3>学生名称：{{name}}</h3>
    <h3>学生年龄：{{age}}</h3>
    <button @click="showName">点击显示学生姓名</button>
  </div>
</template>

<script>
  // 组件的交互代码（方法，数据等）

  //引入混合对象
  import mixin from './Mixin.js'

  //一般暴露单个对象使用默认暴露，结合组件的简写方式
  export default {
    name:'Student',
    data () {
      return {
        msg:'我是一名学生',
      }
    },

    created(){
      console.log('Student组件数据监视、数据代理初始化完成');
    },
    //props配置，接受组件外部传来的数据，优先级比data高，且不允许修改（修改会报错）
    props:['name','age'],
    //mixin(混入)可以把多个组件共用的配置提取成一个混入对象
        /* 
      当混入的对象中的配置与当前组件的配置重复时，以当前组件的配置优先，
      生命周期函数除外，生命周期函数重复时，他们都会执行,
      而且先执行混入对象的钩子，再执行当前组件的钩子
    */
/*   //  局部混入
    mixins:[mixin]
 */
  }
</script>

<style scoped>
  .demo{
    background-color:pink;
  }
</style>