<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo"/>
        <List :todos="todos" :handleCheck="handleCheck" :handleDelete="handleDelete"/>
        <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearCheckAll="clearCheckAll"/>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader' 
import List from './components/List'
import MyFooter from './components/MyFooter'

export default {
  //注册子组件
  components:{
    MyHeader,
    List,
    MyFooter
  },
    data(){
    return {
      todos:JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods:{
    // 添加todo
    addTodo(todoObj){
      console.log('App组件里的addTodo被调用了'+todoObj);
      //将接收到的用户数据添加到数组的开头
      this.todos.unshift(todoObj);
    },
    // 修改todo.done
    handleCheck(id){
      this.todos.forEach((todo) => {
        if(todo.id  === id){
          todo.done = !todo.done
        }
      })
    },
    //删除todo
    handleDelete(id){
      //过滤掉要删除的todo
      this.todos = this.todos.filter((todo) =>todo.id !== id)
    },
    // 全选或取消全选
    checkAllTodo(done){
      this.todos.forEach((todo) => { 
        todo.done = done;
       })
    },
    //清除所有已完成
    clearCheckAll(){
      this.todos = this.todos.filter((todo) => {
        return !todo.done
      })
    }
  },
  //监视todos，当数据发生变化时，向浏览器本地存储（localStorage）增删改查数据
  watch:{
    todos:{
      //开启深度监视
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  }
}
</script>

<style >
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>