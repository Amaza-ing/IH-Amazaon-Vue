<script setup>
const props = defineProps({
  title: String,
})

const emit = defineEmits([
  "sendMsg",
])

const message = "Hola desde el hijo";

function notify() {
  emit("sendMsg", message)
}
</script>

<template>
  <section class="child-component">
    <slot name="header"></slot>

    <h3>Este es el componente hijo</h3>

    <slot></slot>

    <button @click="notify">Emitir mensaje</button>

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