<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h3 class="title">{{msg}}</h3>
    <h3>学生名称：{{studentName}}</h3>
    <h3>学生年龄：{{age}}</h3>
    <button @click="sendMsg">点击发送学生信息给School</button>
  </div>
</template>

<script>
  // 组件的交互代码（方法，数据等）

  //一般暴露单个对象使用默认暴露，结合组件的简写方式
  export default {
    name:'Student',
    data () {
      return {
        studentName:'张三',
        age:18,
        msg:'我是一名学生',
      }
    },
    methods: {
      sendMsg(){
        this.$bus.$emit('msg',this.msg,this.studentName,this.age)
      }
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