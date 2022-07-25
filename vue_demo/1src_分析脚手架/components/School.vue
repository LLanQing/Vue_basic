<template>
  <!-- 组件的结构 -->
  <div>
    <h2>学生名称：{{studentName}}</h2>
    <h2>学生年龄：{{age}}</h2>
  </div>
</template>

<script>
  // 组件的交互代码（方法，数据等）
  //一般暴露单个对象使用默认暴露，结合组件的简写方式
  export default {
    name:'Student',
    data () {
      return {
        studentName: '张三',
        age: 18
      }
    },
  }
</script>
