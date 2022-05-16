<template>
  <v-app class="App">
    <v-app-bar
        app
        color=#6bb2b8
        prominent
    >
      <v-row align="center" justify="space-around">
        <router-link style="text-decoration: none; color:#fd6b3c;"
                     to="/">
        <img src="./assets/logo.jpeg"
               height="135">
        </router-link>
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
            color=#fd6b3c
            @click:clear="clearMessage"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-btn
            icon
            color=#6bb2b8
            style="position:fixed; top:10%; right:2%;"
            @click.stop="drawer = !drawer"
            elevation="4"
            fab
            justify="center"
        >
          <v-avatar>
            <v-img src="./assets/profile_Pics/tortuga.png"></v-img>
          </v-avatar>
        </v-btn>
      </v-row>
    </v-app-bar>

    <v-card>
      <v-navigation-drawer
          color=#6bb2b8
          v-model="drawer"
          temporary
          app right
      >
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="./assets/profile_Pics/tortuga.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>CatLover22</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
              v-for="item in navigation"
              :key="item.title"
              link
          >
            <v-list-item-icon>
              <v-icon color=#fd6b3c>{{ item.icon }}</v-icon>
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
      drawer: false,
      navigation: [
        { title: 'Inicio', icon: 'mdi-home-city' },
        { title: 'Mi cuenta', icon: 'mdi-account' },
        { title: 'Social', icon: 'mdi-account-group-outline' },
      ],
      mini: true,
    }
  },
};
</script>
