<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="go">go跳转</button>
      </div>
  </div>
</template>

<script>
export default {
  name:'Banner',
  methods:{
    back(){
      this.$router.back() //后退
    },
    forward(){
      this.$router.forward()  //前进
    },
    go(){
      // 后退两次
      this.$router.go(-2)  //可前进也可后退 参数是number类型(正数为前进的步数,负数为后退的部署)
    }
  }
}
</script>

<style>

</style>