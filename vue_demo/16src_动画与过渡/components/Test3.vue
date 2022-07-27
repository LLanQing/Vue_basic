<template>
  <div>
    <!-- <transition appear>
      加上appear属性表示一进来就会有动画（进场动画）
      <h2 class="demo" v-show="isShow" >hello,Vue动画</h2>
    </transition> -->
    <transition 
      appear
      name="animate__animated animate__bounce" 
      enter-active-class="animate__bounce"
      leave-active-class="animate__backOutDown"
    >
      <h2 class="demo" v-show="isShow">An animated element</h2>
    </transition>
    <button @click="isShow = !isShow">显示/隐藏动画</button>
  </div>
</template>

<script>
// 引入animate.css库
import 'animate.css'

export default {
  data(){
    return {
      isShow:true
    }
  }
}
</script>

<style scoped>
  .demo{
    background-color: skyblue;
  }


</style>