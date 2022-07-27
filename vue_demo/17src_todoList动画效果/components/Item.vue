<template>
  <li>
    <label>
<!--      这里勾选和取消勾选可以使用change和click作为事件处理-->
      <input 
        type="checkbox" 
        :checked="todo.done" 
        @change="checkTodo(todo.id)"
        />
      <!--v-model数据的双向绑定，checkbox使用v-model来双向绑定其是否被勾选,也可以实现效果但不推荐(因为其实修改了props中的数据)-->
      <!--这里修改了从List修改过来的props,这里的不允许改是浅层次，就是如果props是一个对象则这个修改这个对象的某一个属性vue是放行的-->
      <!-- <input type="checkbox" v-model="todo.done"/>-->
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input 
        type="text" 
        v-show="todo.isEdit"  
        :value="todo.title"
        @blur="todoBlur(todo,$event)"
        ref="input"
        >
    </label>
    <button class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>
    <button class="btn btn-edit" v-show="!todo.isEdit" @click="editTodo(todo)">编辑</button>
  </li>
</template>

<script>
/* //引入pubsub库
import pubsub from 'pubsub-js' */

export default {
  name:'Item',
  //props声明接受的属性
  props:['todo'],
  methods:{
    // todo勾选和取消勾选
    checkTodo(id){
      //通过事件总线通知App组件勾选和取消勾选
      this.$bus.$emit('handleCheck',id)
    },
    // 删除todo
    deleteTodo(id){
      //提示用户是否删除
      if(confirm('确定删除吗?'))
      //通过事件总线通知App组件删除todo
      this.$bus.$emit('handleDelete',id)
      //发布消息通知App组件删除todo
      // pubsub.publish('handleDelete',id)
    },
    //编辑todo，isEdit为true时，显示编辑框；否则显示文本
    editTodo(todo){
      //判断todo有没有isEdit属性，没有就使用$set添加，有就可以直接修改
      if(todo.hasOwnProperty('isEdit')){
        todo.isEdit = true
      }else{
        this.$set(todo,'isEdit',true)
      }
      /* // 想点击编辑按钮，输入框出来同时输入框获取焦点
      //思路：调用dom的focus方法，1.使用ref属性获取到dom元素，2.调用focus
      //直接调用dom的focus方法不行,因为执行这条语句时，Vue没有将dom还有没有放到页面
      this.$refs.input.focus() */
      // Vue给我们提供了this.$nextTick(回调函数)方法，在下一次 DOM 更新结束后执行其指定的回调。
      this.$nextTick( () =>{this.$refs.input.focus()})
    },
    // todo失去焦点后，输入框变为显示文字,并通知App组件修改todo.title内容
    todoBlur(todo,e){
      todo.isEdit= false
      // 通知App组件修改todo.title内容
      // 判断用户输入是否为空
      if(!e.target.value.trim()) return alert('输入不允许为空')
      this.$bus.$emit('handleEdit',todo.id,e.target.value)
    }

  }
}
</script>


<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover{
    background: #ddd;
  }

  li:hover button{
    display: block;
  }
</style>