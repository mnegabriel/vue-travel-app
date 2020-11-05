<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link
      v-for="destination of destinations"
      :key="destination.slug"
      :to="{ name: 'DestinationDetails', params: { slug: destination.slug } }"
      >{{ destination.name }}</router-link
    >
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  name: "TheNavigation",
  data() {
    return {
      slug: this.$route.params.slug,
      destinations: store.destinations
    };
  }
};
</script>

<style>
#nav {
  padding: 30px;
  display: flex;
  gap: 30px;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
#nav a:hover {
  color: #739bc2;
}

#nav a.active-route-class {
  color: #ec47e4;
}
</style>
