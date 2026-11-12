<script setup>
const names = ["Ana", "Beatriz", "Carlos", "David", "Elena"];
</script>

<template>
  <ul>
    <li v-for="name in names">
      {{ name }}
    </li>
  </ul>
</template>

<style></style>