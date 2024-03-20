<script setup>
import { ref, reactive } from "vue";
const fruits = ref(["🍇", "🍌", "🍒", "🥔"]);
const course = reactive({
  title: "学习指南",
  author: "yml",
  publishDate: "2024-01-01",
});
</script>

<template>
  <!-- ul缩进符，li无序符号 -->
  <div v-for="(fruit, index) in fruits" :key="index">
    {{ index }} === {{ fruit }}
  </div>

  <ul>
    <li v-for="(c, k, i) in course" :key="i">{{ i }} === {{ k }}: {{ c }}</li>
  </ul>

  <ul>
    <template v-for="(fruit, i) in fruits" :key="i">
      <li v-if="fruit !== '🥔'">
        {{ fruit }} === {{ i }}
      </li>
    </template>
  </ul>
</template>

<style lang="css">
</style>