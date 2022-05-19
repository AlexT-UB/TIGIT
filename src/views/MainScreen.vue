<template>
  <v-app>
    <v-container >
      <v-row>
        <NavbarMain />
      </v-row>
      <v-row>
        <CarrouselMain />
      </v-row>
      <v-row>
        <v-col v-for="card in cards" :key="card.tituylo">
        <CardMain
          :titulo="card.titulo"
          :subtitle="card.subtitle"
          :description="card.description"
        ></CardMain></v-col>
      </v-row>
      <v-row>
        <FooterMain />
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import NavbarMain from "../components/Navbar-Main";
import CarrouselMain from "../components/Carrousel-Main.vue";
import CardMain from "../components/Card-Main.vue";
import FooterMain from "../components/Footer-Main.vue";
export default {
  name: "MainScreen",
  components: {
    NavbarMain,
    CarrouselMain,
    CardMain,
    FooterMain,
  },

  data() {
    return {
      cards: [
        { titulo: "Aprende", subtitle: "jajaj", description: "lorem ipsum" },
        { titulo: "Comparte", subtitle: "lol", description: "lorem ipsum" },
         { titulo: "Conoce", subtitle: "maiu", description: "lorem ipsum" },
      ],
    };
  },
};
</script>