<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo"/>
        <List :todos="todos"/>
        <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearCheckAll="clearCheckAll"/>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader' 
import List from './components/List'
import MyFooter from './components/MyFooter'
/* //引入pubsub库
import pubsub from 'pubsub-js' */

export default {
  //注册子组件
  components:{
    MyHeader,
    List,
    MyFooter
  },
    data(){
    return {
      //子组件都要用的数据，就存放在父组件中
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
    // 修改todo.done勾选或取消勾选
    handleCheck(id){
      this.todos.forEach((todo) => {
        if(todo.id  === id){
          todo.done = !todo.done
        }
      })
    },
    //修改todo.title内容
    handleEdit(id,newVal){
      this.todos.forEach((todo) => {
        if(todo.id === id)
        todo.title = newVal
      })
    },
    //删除todo
    handleDelete(_,id){ //利用_占位，这样传过来的参数没有使用不会warning
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
  },

  //挂载完成时绑定事件
  mounted(){
    //在事件总线绑定修改todo.done勾选或取消勾选事件
    this.$bus.$on('handleCheck',this.handleCheck);  
    //在事件总线绑定删除todo事件
    this.$bus.$on('handleDelete',this.handleDelete); 
    //在事件总线绑定修改todo.tile事件
    this.$bus.$on('handleEdit',this.handleEdit); 

    // 使用消息订阅实现绑定删除todo事件
    // this.subId = pubsub.subscribe('handleDelete',this.handleDelete)
  },

  //组件销毁前解除绑定事件
  beforeDestroy(){
    this.$bus.$off(['handleCheck','handleDelete','handleEdit'])

    //取消订阅消息
    // pubsub.unsubscribe(this.subId)
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

  .btn-edit{
    color: #fff;
    background-color: #4cbb20;
    border: 1px solid #44cc0f;
    margin-right: 5px;
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