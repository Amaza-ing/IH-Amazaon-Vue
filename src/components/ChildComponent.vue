<script setup>
const props = defineProps({
  title: String,
})
</script>

<template>
  <section class="child-component">
    <slot name="header"></slot>

    <h3>Este es el componente hijo</h3>

    <slot></slot>

    <h4>{{ props.title }}</h4>

    <slot name="footer"></slot>
  </section>
</template>

<style scoped>
.child-component {
  border: 1px dotted blue;
  margin: 5px;
  padding: 5px;
}
</style>