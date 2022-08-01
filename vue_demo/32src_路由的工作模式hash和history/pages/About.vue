<template>
  <div>
    <h2>我是About内容</h2>
  </div>
</template>

<script>
export default {
  name:'About',
  // mounted(){
  //   console.log('About组件挂载完毕');
  // },
  // destroyed(){
  //   console.log('About组件被销毁了');
  // }
  // 组件内部的路由守卫
  //进入守卫：通过路由规则，进入该组件时被调用
  beforeRouteEnter (to, from, next) {
    console.log('About组件--beforeRouteEnter');
    if (localStorage.getItem("userId") === "vue") {
      //模拟用户登录了，用户id为vue才会跳转，否定则提示用户去登录
      next(); //放行
    } else {
        alert("未登录，请先登录");
    }
  },
  //离开守卫：通过路由规则，离开该组件时被调用
  beforeRouteLeave (to, from, next) {
    console.log('About组件--beforeRouteLeave');
    next()
  }
}
</script>

<style>

</style>