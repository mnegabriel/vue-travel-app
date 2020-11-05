<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <div v-for="destination of destinations" :key="destination.slug">
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug }
          }"
        >
          <h2>{{ destination.name }}</h2>
        </router-link>
        <figure>
          <router-link
            :to="{
              name: 'DestinationDetails',
              params: { slug: destination.slug }
            }"
          >
            <img
              :src="require(`@/assets/images/${destination.image}`)"
              :alt="destination.slug"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store.js";

export default {
  name: "Home",
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>

<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}

img {
  max-width: 200px;
}

.destinations {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

a {
  text-decoration: none;
  color: blueviolet;
}
a:hover {
  color: rgb(103, 43, 158);
}
</style>
