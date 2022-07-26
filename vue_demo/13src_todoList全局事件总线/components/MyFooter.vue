<template>
    <!--隐式类型转换-->
  <div class="todo-footer" v-show="todosAll">
    <label>
      <!--这里也可用v-model来替代，此时不需要计算属性了-->
<!--      <input type="checkbox" :checked="isAll" @change="checkAll"/>-->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
       <span>已完成{{doneTotal}}</span> / 全部{{todosAll}}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name:'MyFooter',
  props:['todos'],
  computed:{
    //统计已完成todo的总数
    doneTotal(){
      return this.todos.reduce((pre,todo) => pre + (todo.done ?  1 : 0),0)
    },
    //统计todo总数
    todosAll(){
      return this.todos.length
    },
    //判断todo是否全部已完成
    isAll:{
      get(){
        return this.doneTotal === this.todosAll
      },
      set(value){
        // 当isAll选中时，所有todo.done = true ;当isAll取消勾选，所有todo.done = false
        //通知App组件全选或取消全选
        // this.checkAllTodo(value)
        this.$emit('checkAllTodo',value)
      }
    }
  },
  methods:{
    // 清除所有已完成todo
    clearAll(){
      // 提示用户是否清除所有已完成
      if(confirm("确认清除所有已完成吗？"))
      //通知App组件清除所有已完成的todo
      // this.clearCheckAll()
      this.$emit('clearCheckAll')
    }
  }
}
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>