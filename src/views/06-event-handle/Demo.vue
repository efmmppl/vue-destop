<script setup>
  import { ref } from 'vue'
  const name = ref('Vue.js')

  function changeN(event) {
    console.log(`Hello ${name.value}!`)
    // `event` 是 DOM 原生事件
    if (event) {
      console.log(event.target.tagName)
    }
  }

  const changeName = () => {
    name.value = 'Hello Vue.js'
  }
</script>

<template>
  <div>
    {{name}}
    <button @click="changeN($event), changeName()">changeN</button>
  </div>
</template>

<style lang="css">
  
</style>