<script setup>
import { computed, reactive, onMounted } from "vue";

const cart = reactive({
  orderId: "001",
  products: [
    {
      name: "iphone12",
      price: 6000,
      quantity: 3,
    },
    {
      name: "iphone13",
      price: 10000,
      quantity: 2,
    },
    {
      name: "iphone14",
      price: 12000,
      quantity: 4,
    },
  ],
});

// computed计算属性函数
const totalPrice = computed(() => {
  console.log("totalPrice");
  return cart.products.reduce((total, product) => {
    total += product.price * product.quantity;
    return total;
  }, 200);
});

const culPrice = () => {
  console.log("culPrice");
  return cart.products.reduce((total, product) => {
    total += product.price * product.quantity;
    return total;
  }, 500);
};

onMounted(() => {
// 5000ms后第一个产品价格改为7000
  setTimeout(() => {
    cart.products[0].price = 7000;
  }, 5000);
// 2000ms后订单属性变为002
  setTimeout(() => {
    cart.orderId = "002";
  }, 2000);
});
</script>

<template>
  <div>
    {{ cart.orderId }}
  </div>
  <div>
    {{ totalPrice }}
  </div>
  <div>
    {{ culPrice() }}
  </div>
</template>

<style lang="css">
</style>