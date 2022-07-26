<template>
  <div>
    <h2 v-text="msg" class="title"></h2>
    <hr>
    <School></School>
    <hr>
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
  },
  data(){
    return{
      msg:'组件自定义事件'
    }
  },
}
</script>

<style >
/* 
App组件中定义的样式，子组件都可以使用，
所以App中的样式都不会加上scoped,加上之后子组件就是用不了App组件的样式了
*/
  .title{
    color:red;
  }
</style>