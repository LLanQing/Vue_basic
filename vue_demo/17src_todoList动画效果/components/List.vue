<template>
  <ul class="todo-main">
    <transition-group 
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__backInDown"
      leave-active-class="animate__backOutDown"
      >
      <Item 
      v-for="todo in todos"
      :key="todo.id" 
      :todo="todo" 
    />
    </transition-group>
  </ul>
</template>

<script>
import Item from './Item'
//引入第三方动画效果库animate.css
import 'animate.css'


export default {
  name:'List',
  //注册Item组件
  components:{
    Item
  },
  //声明接受todos
  props:['todos']

}
</script>

<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>