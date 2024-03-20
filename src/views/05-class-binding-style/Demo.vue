<script setup>
import { ref } from "vue";
const isActive = ref(true);
const hasError = ref(true);
const isBold = ref(false);
const defaultClass = ref("text-default");

const activeColor = ref("red");
const fontSize = ref(30);
</script>

<template>
  <div class="static" :class="[{ bold: isBold }, defaultClass]">hello</div>
  <!-- :暂理解为定义数组 -->
  <div :class="{ active: isActive, 'text-danger': hasError }">Vue3</div>
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">!!!</div>
</template>

<style lang="css">
.static {
  color: blue;
  font-size: 50px;
}
.active {
  font-size: 40px;
}
.text-danger {
  color: red;
}
.text-default {
  color: green;
}
.bold {
  font-weight: bold;
}
</style>