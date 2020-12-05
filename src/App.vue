<template>
  <div>
    <header :class="[$style.header]">
      My awesome shop
      <!-- <Cart /> -->
    </header>
    <div>
      <h1>Список товаров</h1>
      <Item
        v-for="(good, index) in items"
        :key="index"
        :name="good.name"
        :price="good.price"
      />
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  comments: {
    Item,
  },
  data() {
    return {
      items: [
        { name: "1", price: 1 },
        { name: "2", price: 1 },
        { name: "3", price: 1 },
        { name: "4", price: 1 },
      ],
    };
  },
};
</script>

<style>
.greeting {
  color: red;
}
</style>