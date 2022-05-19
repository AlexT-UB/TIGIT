<template>
  <v-carousel  cycle show-arrows-on-hover height="500">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"},
        { src: require("@/assets/banner_Pics/comparte.jpg") },
        { src: require("@/assets/banner_Pics/tigit.jpg") },
      ],
    };
  },
};
</script>
<style scoped>
.v-carousel{
  margin-top:200px
}
</style>