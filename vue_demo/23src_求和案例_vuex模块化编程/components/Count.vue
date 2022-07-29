<template>
  <div >
    <h1>{{title}}</h1>
    <h2>当前求和为：{{sum}}</h2>
    <h2>当前求和放大十倍为：{{bigSum}}</h2>
    <h3 style="color:red">Person组件里的人员总数为：{{personList.length}}</h3>
    <select v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add(number)">+</button>
    <button @click="subtract(number)">-</button>
    <button @click="addOdd(number)">和为奇数才加</button>
    <button @click="addWait(number)">等一秒再加</button>
  </div>
</template>

<script>
// 引入mapState、mapGetters、mapActions、mapMutations
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'

export default {
  name:'Category',
  data(){
    return {
      number:1,
    }
  },
  computed:{
    //利用计算属性读取$store.state里面的值，这样插值语法可以简洁一点

    //借助mapState生成计算属性：sum、title（数组写法）
    //传入数组的'xxx'，会生成xxx的计算属性并读取state里面的xxx
    ...mapState('count',['sum','title']),
    ...mapState('personList',['personList']),

    //借助mapGetters生成计算属性：bigSum（数组写法）
    ...mapGetters('count',['bigSum'])
  },

  methods:{
    // 对于没有业务逻辑的数据操作，可以直接使用commit发送给mutations 

    // mapActions 与 mapMutations 使用时，若需要传递参数需要：在模板中绑定事件时传递好参数，否则参数是事件对象。
    // mapActions 与 mapMutations生成的是 add(value){this.$store.commit('ADD',value)}，绑定事件不传参数，默认是事件对象
    // mapMutations方法：</strong>用于帮助我们生成与`mutations`对话的方法，即：包含`$store.commit(xxx)`的函数
    // 靠mapMutations生成：add、subtract方法（对象形式）
    ...mapMutations('count',{add:'ADD',subtract:'SUBTRACT'}),

    //靠mapActions生成：addOdd、addWait方法（数组形式）
    ...mapActions('count',['addOdd','addWait']),

}
}


</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>