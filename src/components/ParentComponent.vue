<script setup>
import ChildComponent from './ChildComponent.vue';

const title2 = "Título del hijo 2";
</script>

<template>
  <section class="parent-component">
    <h2>Este es el componente padre</h2>

    <ChildComponent title="Título del hijo 1">
      <p>Contenido HTML inyectado desde el padre</p>
      <h5>Lorem ipsum dolor sit amet.</h5>

      <template #header>
        <h2>Este es el header desde el padre</h2>
      </template>

      <template #footer>
        <h3>Este es el footer desde el padre</h3>
      </template>
    </ChildComponent>

    <ChildComponent :title="title2" />
  </section>
</template>

<style scoped>
.parent-component {
  border: 2px dashed black;
  margin: 10px;
  padding: 5px;
}
</style>