<script setup>
import { ref, reactive } from "vue";
const count = ref(10);
const state = reactive({ count: 0 });

const addOne = () => {
  count.value++;
  console.log(count.value);
};
function increment() {
  state.count++;
  console.log(state.count);
}
</script>

<template>
  <div>
    <button @click="addOne">
      {{ count }}
    </button>
  </div>
  <div>
    <button v-on:click="increment">
      {{ state.count }}
    </button>
  </div>
</template>

<style scoped>
</style>