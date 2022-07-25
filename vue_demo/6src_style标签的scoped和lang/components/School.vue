<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2 class="fontStyle">学校名称：{{name}}</h2>
    <h2 class="title">学校地址：{{address}}</h2>
    <button @click="showName">点击显示学校名称</button>
    <hr>
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
      showName () {
        alert(this.name+'!!!!');
      }
    },

  }
</script>


<style lang="less" scoped>
/* 组件的样式 
## scoped 样式
1. 作用：让样式在局部生效，防止冲突。
2. 写法：`<style scoped>`

lang是用来指定style语言，默认是css
*/
.demo{
  background-color: skyblue;
  .fontStyle{
    font-size: 50px;
  }
}
</style>