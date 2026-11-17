<script setup>
const props = defineProps({
  product: Object,
})
</script>

<template>
  <article class="product-card">
    <h3 class="product-name">{{ props.product.name }}</h3>
    <img
      :src="props.product.img"
      alt="Imagen del producto"
      width="120"
      height="120"
    />
    <h4>{{ props.product.price }}€</h4>
  </article>
</template>

<style scoped>
.product-card {
  width: 150px;
  height: 250px;
  background-color: lightgreen;
  padding: 10px;
  margin: 10px;
  border: 5px dashed green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
