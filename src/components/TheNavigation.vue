<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/brazil">Brazil</router-link> |
    <router-link to="/panama">Panama</router-link> |
    <router-link to="/hawaii">Hawaii</router-link> |
    <router-link to="/jamaica">Jamaica</router-link>
  </div>
</template>

<script>
export default {
  name: "TheNavigation"
};
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.active-route-class {
  color: #ec47e4;
}
</style>
