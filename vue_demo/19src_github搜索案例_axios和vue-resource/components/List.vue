<template>
  <div class="row">
    <!--展示用户列表-->
    <div 
      class="card" 
      v-show="info.users.length" 
      v-for="user in info.users" 
      :key="user.id"
      >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
    <!---欢迎词-->
    <h1 v-show="info.isFirst">Welcome!</h1>
    <!--加载中--->
    <h1 v-show="info.isLoading">Loading...</h1>
    <!---错误信息-->
    <h1 v-show="info.errorMsg">
      Something has been wrong, errorMessage:{{info.errorMsg}}
    </h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data () {
    return {
      info:{
        users:[],
        isFirst:true,
        isLoading:false,
        errorMsg:''
      }
    }
  },
  methods:{
    //获取用户
    updataList(info){
      //使用对象解构赋值形式，这样相同的属性，后面的解构会覆盖前面的解构，这样可以保证数据的完整性
      this.info = {...this.info,...info}
    }
  },
  mounted(){
    // 绑定事件，触发事件时获取用户
    this.$bus.$on('updataList',this.updataList)
  },
  beforeDestroy(){
    //组件销毁时解除绑定事件
    this.$bus.$off(['updataList'])
  }
};
</script>

<style scoped>
  .album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
  }

  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>