<template>
  <div >
    <h2>当前求和为：{{sum}}</h2>
    <select v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="subtract">-</button>
    <button @click="addOdd">和为奇数才加</button>
    <button @click="addWait">等一秒再加</button>
  </div>
</template>

<script>
export default {
  name:'Category',
  props:['title'],
  data(){
    return {
      number:1,
      sum:0
    }
  },
  methods:{
    add(){
      this.sum += this.number
    },
    subtract(){
      this.sum -= this.number
    },
    addOdd(){
      if(this.sum % 2){
        this.sum += this.number
      }
    },
    addWait(){
      setInterval(() => {
        this.sum += this.number
      }, 1000);
    },
}
}
</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>