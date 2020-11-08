<template>
  <div>
    <h1>{{ username }}</h1>
    <button @click="handleLogout">logout</button>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  computed: {
    username() {
      return store.user;
    }
  },
  methods: {
    handleLogout() {
      store.user = null;
      this.$router.push("/");
    }
  }
};
</script>
