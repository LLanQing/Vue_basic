<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School from './School.vue'; //.vue后缀可写可不写
import Student from './Student'

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