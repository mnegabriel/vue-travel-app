<template>
  <div>
    <GoBackButton />
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

    <section class="experiences">
      <h2>Top experiences in {{ destinationData.name }}</h2>
      <div class="cards" id="experience">
        <div
          v-for="experience of destinationData.experiences"
          :key="experience.slug"
          class="card"
        >
          <router-link
            :to="{
              name: 'experienceDetails',
              params: { experienceSlug: experience.slug },
              hash: '#experience'
            }"
          >
            <img
              :src="require(`@/assets/images/${experience.image}`)"
              :alt="experience.name"
            />
            <span class="card__text">
              {{ experience.name }}
            </span>
          </router-link>
        </div>
      </div>
      <router-view :key="$route.path" />
    </section>
  </div>
</template>

<script>
import store from "@/store.js";
import GoBackButton from "@/components/GoBackButton";

export default {
  name: "DestinationDetails",
  components: {
    GoBackButton
  },
  data() {
    return {};
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    destinationData() {
      return store.destinations.find(
        destination => destination.slug === this.slug
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
.cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.cards img {
  max-height: 200px;
}

.card {
  padding: 0 20px;
  position: relative;
}

.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
}
</style>
