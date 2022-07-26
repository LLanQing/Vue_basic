<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2 class="fontStyle">学校名称：{{schoolName}}</h2>
    <h2 class="title">学校地址：{{address}}</h2>
    <!-- <button>点击显示学校名称</button> -->
  </div>
</template>

<script>
  // 组件的交互代码（方法，数据等）

  //一般暴露单个对象使用默认暴露，结合组件的简写方式
  export default {
    //配置在开发者工具里面显示的组件名，一般是第三方插件或者大型项目用来区分组件使用
    name: 'School',
    data () {
      return {
        schoolName: 'Vue学院',
        address: '武汉'
      }
    },
    methods:{

    },
    mounted(){
      console.log('School组件的mouted被调用了');
      this.$bus.$on('msg',(value,...params) => {
        console.log('School接收到了学生信息：'+value,params);
      });
    },
    //当School组件销毁时，解绑在事件总线上绑定的事件
    beforeDestroy(){
      this.$bus.$off('msg')
    }

  }
</script>


<style scoped>
/* 组件的样式 
## scoped 样式
1. 作用：让样式在局部生效，防止冲突。
2. 写法：`<style scoped>`

lang是用来指定style语言，默认是css
*/
.demo{
  background-color: skyblue;
  padding: 5px;
}
</style>