<template>
  <div>
    <button @click="getMsg">点击获取信息</button>
  </div>
</template>

<script>
// 引入axios
import axios from 'axios'

export default {
  name:'App',

  methods:{
    getMsg(){
      axios.get('/js').then(  //这里开启了代理服务器，请求被转发到了5500端口
        (response) => {
          console.log('请求成功了',response.data);
        },
        (error) => {
          console.log('请求失败了',error.message);  //会报错，跨域问题,使用vue-cli解决跨域
        }
      )
    }
  }
}
</script>

<style >

</style>