<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <NavbarMain/>
      </v-row>
      <v-row>
        <CarrouselMain/>
      </v-row>
      <v-row>Content</v-row>
      <v-row>Footer</v-row>
    </v-container>
  </v-app>
</template>

<script>
import NavbarMain from '../components/Navbar-Main'
import CarrouselMain from '../components/Carrousel-Main.vue'
export default {
  name: 'App',
  components: {
    NavbarMain,
    CarrouselMain
  },

  data () {
    return {

    }
  },
};
</script>