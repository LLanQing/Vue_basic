<template>
  <div>
    <!-- <transition appear>
      加上appear属性表示一进来就会有动画（进场动画）
      <h2 class="demo" v-show="isShow" >hello,Vue动画</h2>
    </transition> -->
    <transition-group appear>
      <!--当需要多个元素有动画时，只能用transition-group标签,并且没有元素都要有key属性-->
      <h2 class="demo" v-show="!isShow" key="1">hello,Vue动画</h2>
      <h2 class="demo" v-show="isShow" key="2">hello,react</h2>
    </transition-group>
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
  /*进入的起点,离开的终点  */
  .v-enter,.v-leave-to{
    transform: translateX(-100%);
  }

  /*进入过程中, 离开过程中 */
  .v-enter-active,.v-leave-active{
    transition:  1s linear;
  }

  /* 进入的终点，离开的起点 */
  .v-enter-to,.v-leave{
    transform: translateX(0);
  }

</style>