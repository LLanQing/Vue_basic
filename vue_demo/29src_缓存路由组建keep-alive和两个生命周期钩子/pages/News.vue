<template>
  <ul>
    <div :style="{opacity}">学习Vue</div>
    <li v-for="news in newsList" :key="news.id">{{news.title}} <input type="text"></li>
  </ul>
</template>

<script>
export default {
  name:'News',
  data () {
    return {
      newsList:[
        {id:'001',title:'news001'},
        {id:'002',title:'news002'},
        {id:'003',title:'news003'}
      ],
      opacity: 0.5
    }
  },
  mounted(){
    console.log('News组件挂载完毕');
  },
  destroyed(){
    console.log('News组件被销毁了');
  },

/*   activated，deactivated生命周期钩子，只能配合<keep-alive>使用 
  1. 作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态。
  2. 具体名字：
   1. `activated`路由组件被激活时触发。
   2. `deactivated`路由组件失活时触发。
  当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。 */
  activated(){
    console.log('News组件被激活了');
    this.intervalId = setInterval(() => {
      this.opacity -= 0.01
      if (this.opacity <= 0)
      {
        this.opacity = 1
      }
      console.log('@');
    }, 200);
  },
  deactivated(){
    console.log('News组件失活了');
    clearInterval(this.intervalId)
  }

}
</script>

<style>

</style>