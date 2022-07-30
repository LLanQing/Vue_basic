<template>
  <div>
    <h2>我是About内容</h2>
  </div>
</template>

<script>
export default {
  name:'About',
  mounted(){
    console.log('About组件挂载完毕');
  },
  destroyed(){
    console.log('About组件被销毁了');
  }

}
</script>

<style>

</style>