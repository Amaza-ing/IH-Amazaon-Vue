import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("product", () => {
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

  function deleteProduct(productId) {
    products.value = products.value.filter(
      (product) => product.id !== productId,
    );
  }

  return {
    products,
    deleteProduct
  };
});
