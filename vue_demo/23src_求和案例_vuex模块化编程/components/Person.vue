<template>
  <div>
    <h3>人员列表</h3>
    <h3 style="color:red">Count组件中的求和为：{{sum}}</h3>
    <input type="text" placeholder="请输入用户姓名" v-model="name">
    <button @click="addPerson">点击添加人员</button>
    <button @click="addPersonServer">点击从服务器获取并添加人员</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name}}</li>
    </ul>
  </div>
</template>

<script>
// 引入mapState、mapGetters、mapActions、mapMutations
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'

export default {
  name:'Person',
  data () {
    return {name:''}
  },
  computed:{
    //添加personList计算属性并读取store中的personList
    ...mapState('personList',['personList']),
    //添加sum计算属性并读取store中的sum
    ...mapState('count',['sum'])
  },
  methods:{
    addPerson(){
      // 业务逻辑放到actions里面，向actions发出添加用户的请求并传递用户名
      this.$store.dispatch('personList/addPerson',this.name)
      // 添加用户完成后清空输入框
      this.name = ''
    },

    ...mapActions('personList',['addPersonServer'])
  },

  mounted(){
  console.log('Person组件',this);
}
}


</script>

<style>
  button{
    margin-left: 5px;
  }
</style>