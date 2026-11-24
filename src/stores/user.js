import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  const users = ref([]);
  const isLoading = ref(true);

  const getUsers = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      users.value = data;
    } catch (e) {
      console.log(e);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    users,
    getUsers,
  };
});
