<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link
      v-for="destination of destinations"
      :key="destination.id"
      :to="{ name: 'DestinationDetails', params: { id: destination.id } }"
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
      destinationId: this.$route.params.id,
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
}
#nav a:hover {
  color: #739bc2;
}

#nav a.active-route-class {
  color: #ec47e4;
}
</style>
