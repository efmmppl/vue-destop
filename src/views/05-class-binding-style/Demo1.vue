<script setup>
import { ref } from "vue";
const list = ref(["line 1", "line 2", "line 3"]);
const curentIndex = ref(0);

const handleClick = (index) => {
  curentIndex.value = index;
};
</script>

<template>
  <ul>
    <!-- 使用 v-for 循环遍历时，Vue 要求每个循环项都应该通过 v-bind:key 指令绑定一个唯一的键。 -->
    <li
      v-for="(item, index) in list"
      :key="index" 
      :class="{ active: index === curentIndex }"
      @click="handleClick(index)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<style lang="css">
.active {
  color: blue;
  font-size: 30px;
}
</style>