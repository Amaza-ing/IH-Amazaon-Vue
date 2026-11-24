<script setup>
import { useUserStore } from '@/stores/user';
import { onMounted } from 'vue';

const userStore = useUserStore();

onMounted(() => {
  userStore.getUsers();
})
</script>

<template>
  <h2>Usuarios!</h2>

  <h3 v-if="userStore.isLoading">Cargando...</h3>

  <div v-if="!userStore.users.length">
    <h3>La lista de usuarios está vacía</h3>
  </div>
  <ul v-else class="user-list">
    <li v-for="user in userStore.users" :key="user.id" class="user-card">
      <h3>{{ user.name }}</h3>
      <h4>{{ user.phone }}</h4>
    </li>
  </ul>
</template>

<style scoped>
.user-list {
  list-style: none;

  .user-card {
    background-color: lightblue;
    margin: 10px;
    padding: 10px;
    width: 300px;
    text-align: center;
  }
}
</style>