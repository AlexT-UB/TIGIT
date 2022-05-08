<template>
  <v-app-bar
      app
      color=#3685B1
      dark
  >
    <div class="d-flex align-center">
      <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
      />
    </div>

    <div :style="{width: '500px'}">
      <v-text-field
          v-model="message"
          hide-details
          prepend-icon="mdi-magnify"
          append-icon = "mdi-filter"
          clear-icon="mdi-close-circle"
          clearable
          label="Introduce tu búsqueda..."
          type="text"
          single-line
          dark
          @click:clear="clearMessage"
      ></v-text-field>
    </div>

  </v-app-bar>
</template>

<script>
export default {
  name: "TopSideBar",
  data () {
    return {
      navigation: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'Mi cuenta', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      mini: true,
    }
  }
}
</script>
