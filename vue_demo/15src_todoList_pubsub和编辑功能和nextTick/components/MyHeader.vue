<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add" />
  </div>
</template>

<script>
// 引入uuid，该库可以使用时间戳+mac地址+当前对象HashCode+随机数生成32位字符串
import { v4 as uuidv4 } from 'uuid';

export default {
  name:'MyHeader',
/*   //声明接受App传来的属性
  props:['addTodo'], */
  data() {
    return {
      title:''
    }
  },
  methods:{
    add(){
      // 数据校验，不能输入为空或者空格
      if(!this.title.trim()) return alert('不能输入为空');

      //将用户输入数据封装成todoObj对象
      const todoObj = {id:uuidv4(),title:this.title.trim(),done:false};
      // 调用从App组件的addTodo方法，将对象传给App组件
      // this.addTodo(todoObj);
      this.$emit('addTodo',todoObj)
      //清空输入框
      this.title='';
      
    }
  }
}
</script>

<style scoped>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>