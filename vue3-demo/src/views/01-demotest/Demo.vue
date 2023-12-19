
<script setup>
    import { ref } from 'vue'
    const count = ref(1);
    console.log(count.value)
    const handleClick = () => {
        count.value++
    }
</script>


<template>
    <div>
        // 差值表达式
        {{count}}
        <button @click="handleClick">add</button>
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