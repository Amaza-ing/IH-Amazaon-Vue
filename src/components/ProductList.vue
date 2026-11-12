<script setup>
import { ref } from "vue";

const products = ref([
  {
    id: 1,
    name: "Ordenador",
    price: 1000,
    isAvailable: true,
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Desktop_computer_system_diagram_%28English%29.svg",
  },
  {
    id: 2,
    name: "Teclado",
    price: 50,
    isAvailable: true,
    img: "https://m.media-amazon.com/images/I/71ZaHNtaEoL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    name: "Ratón",
    price: 20,
    isAvailable: false,
    img: "https://upload.wikimedia.org/wikipedia/commons/2/22/3-Tasten-Maus_Microsoft.jpg",
  },
  {
    id: 4,
    name: "Pantalla",
    price: 350,
    isAvailable: true,
    img: "https://m.media-amazon.com/images/I/61odom2xQeL._AC_UF894,1000_QL80_.jpg",
  },
]);
</script>

<template>
  <ul class="product-list">
    <li v-for="product in products" :key="product.id">
      <article class="product-card">
        <h3 class="product-name">{{ product.name }}</h3>
        <img
          :src="product.img"
          alt="Imagen del producto"
          width="120"
          height="120"
        />
        <h4>{{ product.price }}€</h4>
      </article>
    </li>
  </ul>
</template>

<style scoped>
.product-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;

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
}
</style>
