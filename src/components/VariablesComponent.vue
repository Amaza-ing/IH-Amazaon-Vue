<script setup>
import { ref } from "vue";

// let counter = 0;
const counter = ref(0);
const message = ref("Esto es un mensaje");
const inputPlaceholder = ref("Escribe aquí");
const username = ref("Adrián");

setInterval(() => {
  // counter++;
  // console.log(counter);

  counter.value = counter.value + 1;
}, 1000);

function changeMessage() {
  message.value = "Has hecho click en el botón";
}

function deleteUsername() {
  username.value = "";
}
</script>

<template>
  <h2 class="counter">Contador: {{ counter }}</h2>

  <p>{{ message }}</p>
  <button @click="changeMessage">Haz Click para cambiar el mensaje</button>

  <br /><br />
  <input type="text" :placeholder="inputPlaceholder" />

  <br />
  <h3>{{ username }}</h3>
  <input type="text" v-model="username" />
  <button @click="deleteUsername">Borrar usuario</button>
</template>

<style scoped>
.counter {
  color: blue;
}
</style>
