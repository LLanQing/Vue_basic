<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School from './components/School'; //.vue后缀可写可不写
import Student from './components/Student';

// Vue.extend(options) 可简写为： options ，vue自动帮我们调用Vue.extend()
//使用默认暴露将组件构造函数VueComponent暴露出去
export default {
  //注册Student,School组件
  components:{
    Student,
    School
  }
}
</script>

<style>

</style>