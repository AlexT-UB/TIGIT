<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
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

    <v-card>
      <v-navigation-drawer
          color="blue darken-2"
          dark
          v-model="drawer"
          :mini-variant.sync="mini"
          permanent
          app right
      >
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>CatLover22</v-list-item-title>

          <v-btn
              icon
              @click.stop="mini = !mini"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
              v-for="item in items"
              :key="item.title"
              link
          >
            <v-list-item-icon>
              <v-icon color="black">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>

    <v-main>
      <v-btn
          :left="true"
          :absolute="true"
          bottom
          elevation="2"
          fab
          outlined
      ><v-icon>mdi-human</v-icon></v-btn>
      <AddPost/>
    </v-main>
  </v-app>
</template>

<script>

import AddPost from "@/components/AddPost";

export default {
  name: 'App',

  components: {
    AddPost,
  },

  methods: {
    clearMessage () {
      this.message = ''
    },
  },

  data () {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      mini: true,
    }
  },
};
</script>
