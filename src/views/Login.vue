<template>
  <div class="login">
    <h1>Login</h1>
    <div class="form">
      <label for="username">Username</label>
      <input v-model="username" type="text" name="username" class="input" />
      <label for="password">Password</label>
      <input v-model="password" type="text" name="password" class="input" />
      <button @click="handleLogin">Login</button>
    </div>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    handleLogin() {
      store.user = this.username;
      this.$router.push("/user");
    }
  }
};
</script>

<style></style>
