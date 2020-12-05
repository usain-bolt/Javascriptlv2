<template>
  <div>{{ name }} - {{ price }}</div>
</template>

<script>
export default {
  props: {
    //Свойства которые приходят из вне
    name: String,
    price: Number,
  },
};
</script>

<style>
</style>
