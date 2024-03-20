
<script setup >
    import { ref } from 'vue'
    import axios from 'axios';
    // 创建一个响应式数据，用于绑定输入的路径
    const path = ref('');

    function increment() {
    axios.post('http://localhost:8082/api/getData', 
    // {
        // headers: {
        //   'Access-Control-Allow-Origin': 'http://localhost:5173',
        //   'Access-Control-Allow-Methods': 'POST',
        //   'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
        // },
        // params: {
            "path: path.value" // 获取输入的路径
        // }
    // }
    )
    .then(response => {
        alert("接收到的数据：" + response.data);
    })
    .catch(error => {
        console.error(error);
    });
    }  

</script>


<template>
    <div id="app">
    <p>你输入的路径为: {{ path }}</p>
    <input v-model="path" @keyup.enter="increment" placeholder="输入路径后按回车">
    <button @click="increment">执行</button>
  </div>
</template>

<style lang="css">
    div{
        font-size: 50px;
        color: green;
    }
    button {
        width: 200px;
        font-size: 20px;
        line-height: 40px; /* 可选：通过 `line-height` 属性来调整按钮的垂直居中 */
    }
</style>