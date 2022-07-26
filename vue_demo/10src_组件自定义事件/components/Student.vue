<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h3 class="title">{{msg }}</h3>
    <h3>学生名称：{{name}}</h3>
    <h3>学生年龄：{{age}}</h3>
    <button @click="showName">点击显示学生姓名</button>
    <button @click="unbind">点击解除绑定自定义事件</button>
    <button @click="destroyVC">点击销毁Student组件实例</button>

    <hr>

  </div>
</template>

<script>
  // 组件的交互代码（方法，数据等）

  //一般暴露单个对象使用默认暴露，结合组件的简写方式
  export default {
    name:'Student',
    data () {
      return {
        name:'张三',
        age:18,
        msg:'我是一名学生',
      }
    },
    methods: {
      showName(){
        //vc.$emit( eventName, […args] ) 触发当前实例上的事件。附加参数都会传给监听器回调。
        this.$emit('showName',this.name,this.age,this.msg);
      },
      //解除绑定自定义事件监听器
      unbind(){
        /* vm.$off( [event, callback] )
        参数：
        {string | Array<string>} event (只在 2.2.2+ 支持数组)
        {Function} [callback]
        用法：
        移除自定义事件监听器。
        如果没有提供参数，则移除所有的事件监听器；
        如果只提供了事件，则移除该事件所有的监听器；
        如果同时提供了事件与回调，则只移除这个回调的监听器。 */
        this.$off('showName');
      },
      //销毁Student组件实例
      destroyVC(){
        this.$destroy();  //销毁组件实例后，自定义事件会自动失效
      }
    },

  }
</script>

<style scoped>
/* 组件的样式 
## scoped 样式
1. 作用：让样式在局部生效，防止冲突。
2. 写法：`<style scoped>`
*/
  .demo{
    background-color:pink;
  }
</style>