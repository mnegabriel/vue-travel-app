<template>
  <div id="nav">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li v-for="destination of destinations" :key="destination.slug">
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug }
          }"
          >{{ destination.name }}</router-link
        >
      </li>

      <li>
        <router-link to="/user">Dashboard</router-link>
      </li>
    </ul>
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
#nav ul {
  padding: 30px;
  display: flex;
  gap: 30px;
  justify-content: center;
  list-style: none;
}

#nav ul li {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
#nav ul li:hover {
  color: #739bc2;
}

#nav ul li.active-route-class {
  color: #ec47e4;
}
</style>
