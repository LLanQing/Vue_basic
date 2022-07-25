<template>
  <div>
    <h2 ref="title" v-text="msg"></h2>
    <button ref="btn" @click="showRef">点击显示ref元素</button>
    <School ref="school"></School>
    <hr>
    <!-- 在组件标签上面添加id属性会被解析添加到该组件模板的根元素上 -->
    <Student id="student"></Student>
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
      msg:'ref属性'
    }
  },
  methods:{
    showRef(){
      console.log(this);  //this指向当前组件的实例,App VueComponent{}
      console.log(this.$refs);  //{title: h2, btn: button, school: VueComponent}
      console.log(this.$refs.title);  //<h2>ref属性</h2>
      console.log(this.$refs.btn);    //<button>点击显示ref元素</button>
      console.log(this.$refs.school);   //School VueComponent{}
      //对比使用id查找dom和ref属性
      console.log(document.getElementById('student'));   //<div class="demo" id="student"><h2>学校名称：Vue学院</h2><h2>学校地址：武汉</h2><button>点击显示学校名称</button></div>
    }
  }
}
</script>

<style>

</style>