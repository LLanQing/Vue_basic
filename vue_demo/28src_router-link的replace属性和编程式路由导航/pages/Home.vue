<template>
  <div>
    <h2>我是Home内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- to的路径注意要带上/home -->
          <!-- 1. 作用：控制路由跳转时操作浏览器历史记录的模式
               2. 浏览器的历史记录有两种写入方式：分别为`push`和`replace`，`push`是追加历史记录，`replace`是替换当前记录。路由跳转时候默认为`push`
               3. 如何开启`replace`模式：`<router-link replace .......>News</router-link>` -->
          <router-link replace class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link  class="list-group-item" active-class="active" to="/home/messages">Message</router-link>
        </li>
      </ul>
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name:'Home',
  mounted(){
    console.log('Home组件挂载完毕');
  },
  destroyed(){
    console.log('Home组件被销毁了');
  }
}
</script>

<style>

</style>