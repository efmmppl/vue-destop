<script setup>
import { ref } from "vue";
const isShow = ref(true);
const toggle = () => {
  isShow.value = !isShow.value;
};

const mark = ref(90);

const ok = ref(true);
</script>

<template>
  <div class="ccc">
    <span v-if="isShow">hello vue</span>
    <button @click="toggle" class="xxx">显示</button>
  </div>

  <ul class="bbb">
    <li v-if="mark >= 85">A</li>
    <li v-else-if="mark >= 60 && mark < 85">B</li>
    <li v-else>C</li>
  </ul>

  <div class="aaa">
    <span v-if="ok">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p></span
    >
  </div>

  <template v-if="true">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>
</template>

<style lang="css">
.aaa {
  color: blue;
  font-size: 10px;
}
.bbb {
  color: green;
  font-size: 30px;
}
.ccc {
  color: red;
  font-size: 30px;
}
.xxx {
  color: yellow;
  font-size: 20px;
}
</style>