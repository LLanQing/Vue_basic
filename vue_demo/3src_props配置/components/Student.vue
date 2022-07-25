<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h3>{{msg}}</h3>
    <h3>学生名称：{{studentName}}</h3>
    <h3>学生年龄：{{studentAge}}</h3>
    <button @click="changeAge">点击修改年龄</button>
  </div>
</template>

<script>
  // 组件的交互代码（方法，数据等）
  //一般暴露单个对象使用默认暴露，结合组件的简写方式
  export default {
    name:'Student',
    data () {
      return {
        msg:'我是一名学生',
        studentAge:this.age
      }
    },
    methods: {
      changeAge(){
        // this.age++  //Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
        console.log('changeAge被调用了');
        this.studentAge++
        console.log(this);
        
      }
    },
    //props配置，接受组件外部传来的数据，优先级比data高，且不允许修改（修改会报错）
    /* props 是只读的，Vue 底层会监测你对 props 的修改，如果进行了修改，就会发出警告，
    若业务需求确实需要修改，那么请复制 props 的内容到 data 中一份，然后去修改 data 中的数据。 */
    //简单声明属性接受
    props:['studentName','age']

    //声明属性接受的同时，限制属性对应的的数据类型，如果不是该类型则报错
    /* props:{
      studentName:String,
      age:Number
    } */

    //完整props配置
    // 接受的同时对数据：进行类型的限制+默认值的指定+必填项的限制
    /* props:{
      studentName:{
        type:String,  //studentName类型是String
        require:true  //studentName是必填项
      },
      age:{
        type:Number,
        default:18  //如果不传age，默认值为18
      }
    } */
  }
</script>

<style scoped>
  .demo{
    background-color:pink;
  }
</style>