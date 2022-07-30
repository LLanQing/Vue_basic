<template>
  <div>
    <ul>
      <li v-for="msg in messageList" :key="msg.id">
        <!-- 跳转并携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/messages/detail/${msg.title}`">{{msg.title}}</router-link>&nbsp;&nbsp; -->
        <!-- 跳转并携带params参数，to的对象写法 -->
        <!-- 使用name配置命名路由可以简化路由的跳转,不用写一串路径 -->
        <!-- 特别注意：路由携带 params 参数时，若使用 to 的对象写法，则不能使用 path 配置项，必须使用 name 配置！ -->
        <router-link 
          :to="{
            name:'detail',
            params:{
              id:msg.id,
              title:msg.title
            }
          }"
        >
          {{msg.title}}
        </router-link>
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
  }
}
</script>

<style>

</style>