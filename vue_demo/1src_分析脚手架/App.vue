<template>
  <div>
    <School></School>
    <Student></Student>
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
  }
}
</script>

<style>

</style>