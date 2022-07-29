<template>
  <div >
    <h1>{{title}}</h1>
    <h2>当前求和为：{{sum}}</h2>
    <h2>当前求和放大十倍为：{{bigSum}}</h2>
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
    /* sum(){
      return this.$store.state.sum
    },
    title(){
      return this.$store.state.title
    },
    bigSum(){
      return this.$store.getters.bigSum
    } */
    //借助mapState生成计算属性：sum、title（对象写法）
    // ...mapState({sum:'sum',title:'title'})
    //借助mapState生成计算属性：sum、title（数组写法）
    //传入数组的'xxx'，会生成xxx的计算属性并读取state里面的xxx
    ...mapState(['sum','title']),

    //借助mapGetters生成计算属性：bigSum（对象写法）
    // ...mapGetters({bigSum:'bigSum'}),

    //借助mapGetters生成计算属性：bigSum（数组写法）
    ...mapGetters(['bigSum'])
  },

  methods:{
    // 对于没有业务逻辑的数据操作，可以直接使用commit发送给mutations 
    /* add(){
      this.$store.commit('ADD',this.number)
    },
    subtract(){
      this.$store.commit('SUBTRACT',this.number)
    }, */

    // mapActions 与 mapMutations 使用时，若需要传递参数需要：在模板中绑定事件时传递好参数，否则参数是事件对象。
    // mapActions 与 mapMutations生成的是 add(value){this.$store.commit('ADD',value)}，绑定事件不传参数，默认是事件对象
    // mapMutations方法：</strong>用于帮助我们生成与`mutations`对话的方法，即：包含`$store.commit(xxx)`的函数
    // 靠mapMutations生成：add、subtract方法（对象形式）
    ...mapMutations({add:'ADD',subtract:'SUBTRACT'}),
    // 靠mapMutations生成：ADD、SUBTRACT方法（数组形式）
    // ...mapMutations({add:'ADD',subtract:'SUBTRACT'}),

    // 有业务逻辑的需要actions处理，通知store的action，处理addOdd类型的事件，并传递一些参数
    /* addOdd(){
      // 业务逻辑放到actions里面
        this.$store.dispatch('addOdd',this.number)
    },
    addWait(){
      // 业务逻辑放到actions里面
        this.$store.dispatch('addWait',this.number)
    }, */

    //靠mapActions生成：addOdd、addWait方法（对象形式）
    // ...mapActions({addOdd:'addOdd',addWait:'addWait'}),
    //靠mapActions生成：addOdd、addWait方法（数组形式）
    ...mapActions(['addOdd','addWait']),

}
}


  //使用mapState、mapGetters生成computed计算属性中获取代码，可以让开发者偷懒
  // 传入对象参数的key是需要生成的计算属性名，value是需要获取的state中的属性
  // const x = mapState({sum:'sum',title:'title'})
  // console.log(x); //生成一个对象{sum: ƒ, title: ƒ}

</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>