<template>
  <div>
    <transition name="hello" appear>
      <!-- 加上appear属性表示一进来就会有动画（进场动画） -->
      <h2 class="demo" v-show="isShow" >hello,Vue动画</h2>
    </transition>
    <button @click="isShow = !isShow">显示/隐藏动画</button>
  </div>
</template>

<script>
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

  /* vue封装的动画默认样式名称开头是v，可以改名字
    在transition标签加上name="xxx"，name开头就必须是xxx */
  .hello-enter-active{
    animation: vueDemo 1s linear;
  }
  .hello-leave-active{
    animation: vueDemo 1s reverse linear;
  }

  @keyframes vueDemo {
    from{
      transform:translateX(-100%) ;
    }

    to{
      transform: translateX(0px);
    }
  }
</style>