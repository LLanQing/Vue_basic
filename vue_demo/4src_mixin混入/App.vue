<template>
  <div>
    <h2 v-text="msg"></h2>
    <hr>
    <School></School>
    <hr>
    <!-- 属性名动态绑定，这样"xxx"里面的就是js表达式而不是当做字符串传递 -->
    <Student name="张三" :age="20"></Student>
  </div>
</template>

<script>
import School from './components/School'; //.vue后缀可写可不写
import Student from './components/Student';

export default {
  //注册Student,School组件
  components:{
    Student,
    School
  },
  data(){
    return{
      msg:'props配置'
    }
  },

}
</script>

<style>

</style>