<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="showName">点击显示学校名称</button>
    <hr>
    <input type="text" v-fbind:value='name'>
  </div>
</template>

<script>
  // 组件的交互代码（方法，数据等）

  //一般暴露单个对象使用默认暴露，结合组件的简写方式
  export default {
    //配置在开发者工具里面显示的组件名，一般是第三方插件或者大型项目用来区分组件使用
    name: 'School',
    data () {
      return {
        name: 'Vue学院',
        address: '武汉'
      }
    },
    methods: {
      // showName () {
      //   alert(this.name+'!!!!');
      // }
    },

  }
</script>

<style>
/* 组件的样式 */
.demo{
  background-color: pink;
}
</style>