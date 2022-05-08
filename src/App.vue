<template>
  <v-app class="App">
    <v-app-bar
        app
        color=#3685B1
        dark
        prominent
        src="./assets/logo.jpg"
        fade-img-on-scroll
    >
      <v-row justify="center">
        <v-img src="./assets/logo.jpg"
               max-width="200"
               max-height="200">
          TIGIT
        </v-img>
      </v-row>
      <v-row :style="{width: '500px'}" justify="center">
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
      </v-row>
    </v-app-bar>

    <v-card>
      <v-navigation-drawer
          color=#3685B1
          dark
          v-model="drawer"
          :mini-variant.sync="mini"
          permanent
          app right
          mini-variant-width = "90px"
      >
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="./assets/Profile_Pic.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>CatLover22</v-list-item-title>

          <v-btn
              color=#1DE9B6
              icon
              @click.stop="mini = !mini"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
              v-for="item in navigation"
              :key="item.title"
              link
          >
            <v-list-item-icon>
              <v-icon color=#235571>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Guardados/Favoritos</v-list-item-title>
            <v-list-item-subtitle>Gatos</v-list-item-subtitle>
            <v-list-item-subtitle>Guarderia</v-list-item-subtitle>
            <v-list-item-subtitle>UB</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

      </v-navigation-drawer>
    </v-card>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  methods: {
    clearMessage () {
      this.message = ''
    },
  },
  data () {
    return {
      drawer: true,
      navigation: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'Mi cuenta', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      mini: true,
    }
  },
};
</script>

<style>
.v-card__title {
  color: black!important;
}
.v-card__subtitle {
  color: black!important;
}
.v-card__text {
  color: black!important;
}
</style>
