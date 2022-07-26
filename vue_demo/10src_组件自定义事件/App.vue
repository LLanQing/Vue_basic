<template>
  <div>
    <h2 v-text="msg" class="title"></h2>
    <hr>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传数据 -->
    <School :getSchoolName="getSchoolName"></School>
    <hr>
    <!-- 通过父组件给子组件绑定自定义事件实现：子给父传数据 第一种写法使用v-on或@-->
    <Student @showName="getStudentName"></Student>
    <hr>
    <!-- 通过父组件给子组件绑定自定义事件实现：子给父传数据 第二种写法使用ref-->
    <!-- 组件上也可以绑定原生 DOM 事件，需要使用`native`修饰符。 -->
    <Student ref="student" @click.native="demo"></Student>
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
  methods:{
    //获取学校名称
    getSchoolName(name){
      console.log('学校名称：'+name);
    },
    //获取学生名称
    getStudentName(name,...params){
      console.log('学生名称：'+name);
      console.log(params);
    },
    demo(){
      alert('组件绑定原生dom事件')
    }
  },
  mounted(){
    //绑定自定义事件，第一种写法（推荐）
    this.$refs.student.$on('showName',this.getStudentName); 
/*     //绑定自定义事件，第二种写法（不推荐）
    this.$refs.student.$on('showName',function getStudentName(name,...params){
      console.log('学生名称：'+name);
      console.log(params);
      console.log(this);  //Student组件实例，事件触发者
    });  */

  }

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