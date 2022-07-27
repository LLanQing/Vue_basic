<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keywords"/>&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
// 引入axios
// import axios from 'axios'

export default {
  name:'Search',
  data () {
    return {
      keywords:''
    }
  },
  methods:{
    //根据关键词搜索用户
    searchUsers(){
      //搜索请求前，按下搜索按钮后，欢迎词不再显示，显示加载中
      this.$bus.$emit('updataList',{isFirst:false,isLoading:true,users:[]})
      /* //使用axios发送搜索用户请求
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(  //GitHub提供的地址，根据关键字搜索到关联用户
        response => {
          console.log('请求成功了');
          // 请求成功后，将数据交给List组件，此时显示用户信息，其他的都为不显示
          this.$bus.$emit('updataList',{isLoading:false,users:response.data.items})
        },
        error => {
          //请求失败了，显示失败提示，其他的不显示,users要传空值，避免之前的残留
          console.log('请求失败了');
          this.$bus.$emit('updataList',{errorMsg:error.message,users:[]})
        }
      ) */
      //使用vue-resource插件的$http发送搜索用户请求
      this.$http.get(`https://api.github.com/search/users?q=${this.keyword}`).then(  //GitHub提供的地址，根据关键字搜索到关联用户
        response => {
          console.log('请求成功了');
          // 请求成功后，将数据交给List组件，此时显示用户信息，其他的都为不显示
          this.$bus.$emit('updataList',{isLoading:false,users:response.data.items})
        },
        error => {
          //请求失败了，显示失败提示，其他的不显示,users要传空值，避免之前的残留
          console.log('请求失败了');
          this.$bus.$emit('updataList',{errorMsg:error.message,users:[]})
        }
      )
    }
  }
}
</script >

<style scoped>

</style>