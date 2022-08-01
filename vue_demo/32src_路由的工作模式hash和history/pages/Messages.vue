<template>
  <div>
    <ul>
      <li v-for="msg in messageList" :key="msg.id">
        <!-- <router-link 
          :to="{
            name:'detail',
            query:{
              id:msg.id,
              title:msg.title
            }
          }"
        >
          {{msg.title}}
        </router-link> -->
        {{msg.title}}
        <!-- 不借助`<router-link> `实现路由跳转，让路由跳转更加灵活,
          使用$router的两个API：push()、replace() -->
        <button @click="push(msg)">点击push跳转</button>
        <button @click="replace(msg)">点击replace跳转</button>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'Messages',
  data () {
    return {
      messageList:[
        {id:'001',title:'消息001'},
        {id:'002',title:'消息002'},
        {id:'003',title:'消息003'}
      ]
    }
  },
  methods:{
    //`push`是追加历史记录
    push(msg){
      this.$router.push({
        name:'detail',
        query:{
          id:msg.id,
          title:msg.title
        }
      })
    },
    // `replace`是替换当前记录
    replace(msg){
      this.$router.replace({
        name:'detail',
        query:{
          id:msg.id,
          title:msg.title
        }
      })
    }
  },
  // mounted(){
  //   console.log('Messages组件挂载完毕');
  // },
  // destroyed(){
  //   console.log('Messages组件被销毁了');
  // }
}
</script>

<style>

</style>