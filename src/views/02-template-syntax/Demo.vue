<script setup>
import { reactive, ref } from "vue";
const msg = ref("yml");
const rawhtml = ref("<h2>2023</h2>");
const title = ref("yml-demo");
const objectA = reactive({
  id: "123456",
  age: "28",
});
const number = ref(100);
const flag = ref(true);
const word = ref("hello world");
const isShow = ref(true);
const handlekeyup = (e) => {
  console.log(e.target.value);
};
// 思考：这里定义的方法及变量都是固定的，而不能随意变化
// 创建一个响应式的变量，用于绑定输入框的值
const inputText = ref("");
const handleClick = () => {
  console.log(inputText.value);
};
//这里实现了输入动态改变我们需要的数据
const showword = ref(true);

const items = reactive([
  { id: 1, text: "Item 1" },
  { id: 2, text: "Item 2" },
  { id: 3, text: "Item 3" },
]);
const item1s = reactive([4, 5, 6,7]);
</script>


<template>
  <div>{{ msg }}</div>
  <div>{{ rawhtml }}</div>
  <div>normal-rawhtml</div>
  <!-- v-html可以翻译标签 -->
  <div v-html="rawhtml" class="testclass"></div>
  <!-- v-bind将数据绑定到属性上，可用:代替 -->
  <div v-bind:title="title">1219</div>
  <div :title="title">1219</div>
  <div v-bind="objectA">objectA</div>
  <div>
    {{ number + 1 }}
    {{ flag ? "yes" : "no" }}
    {{ word.split("").reverse() }}
    {{ word.split("").reverse().join("") }}
  </div>
  <div v-if="isShow">回车可以打印下方框内文本：</div>
  <div>
    <!-- handlekeyup函数：输入文本显示到控制台 
        keyup键盘操作，enter回车
        v-on:可用@代替，用于监听发生的回车触发函数事件-->
    <input type="text" v-on:keyup.enter="handlekeyup" />
  </div>
  <div>点击按钮打印到控制台</div>
  <div>
    <input type="text" v-model="inputText" />
    <button @click="handleClick">打印</button>
  </div>
  <div id="vshowid" class="vshowclass">
    <p v-show="showword">Hello v-show!!!!</p>
    <!-- v-show通过对布尔值取反来使数据隐藏 -->
    <button v-on:click="showword = !showword">显示/隐藏</button>
  </div>
  <div>
    <li v-for="item in items" :key="item.id">
      {{ item.text }}
    </li>
  </div>
  <div v-for="item in items" :key="item.id">
    {{ item.text }}
  </div>
  <div>
    <ul>
      <li v-for="item in item1s" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style lang = 'css'>
.testclass {
  font: size 66px;
  color: aqua;
}
div {
  font: size 66px;
  color: green;
}
</style>