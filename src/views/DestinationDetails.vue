<template>
  <section class="destination">
    <h1>{{ destinationData.name }}</h1>
    <div class="destination-details">
      <img
        :src="require(`@/assets/images/${destinationData.image}`)"
        :alt="destinationData.slug"
      />
      <p>{{ destinationData.description }}</p>
    </div>
  </section>
</template>

<script>
import store from "@/store.js";

export default {
  name: "DestinationDetails",
  data() {
    return {
      destinationId: this.$route.params.id
    };
  },
  computed: {
    destinationData() {
      return store.destinations.find(
        destination => destination.id === this.destinationId
      );
    }
  }
};
</script>

<style>
img {
  max-width: 600px;
  max-height: 400px;
  height: auto;
  width: 100%;
}

.destination-details {
  display: flex;
  justify-content: space-between;
}

p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
</style>
