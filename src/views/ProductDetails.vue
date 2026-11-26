<script setup>
import { useProductStore } from '@/stores/product';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const productId = route.params.id;

const productStore = useProductStore();

const currentProduct = ref();

onMounted(() => {
  currentProduct.value = productStore.findProduct(productId);
});
</script>

<template>
  <h2>Vista de detalles para el producto con id: {{ productId }}</h2>

  <div v-if="currentProduct">
    <h3>{{ currentProduct.name }}</h3>
    <h4>{{ currentProduct.price }}€</h4>
    <img :src="currentProduct.img" alt="Imagen del producto" width="500">
  </div>
  <div v-else>
    <h3>El producto con el id {{ productId }} no existe</h3>
  </div>
</template>

<style></style>