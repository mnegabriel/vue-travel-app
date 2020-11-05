<template>
  <section class="experience">
    <h3>Experiences</h3>
    <h4>{{ experience.name }}</h4>
    <div class="experience__details">
      <img
        :src="require(`@/assets/images/${experience.image}`)"
        :alt="experience.name"
      />
      <p>{{ experience.description }}</p>
    </div>
  </section>
</template>

<script>
import store from "@/store.js";

export default {
  props: {
    slug: {
      type: String,
      required: true
    },
    experienceSlug: {
      type: String,
      required: true
    }
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug === this.slug
      );
    },
    experience() {
      console.log(this.destination);
      return this.destination.experiences.find(
        experience => experience.slug === this.experienceSlug
      );
    }
  }
};
</script>

<style></style>
