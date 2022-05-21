<template>
  <v-app>
    <v-main>
      <v-app-bar app color="#6bb2b8" prominent>
        <v-row align="center" justify="space-around">
          <router-link style="text-decoration: none; color: #fd6b3c" to="/">
            <img src="../assets/logo.jpeg" height="135" />
          </router-link>
        </v-row>
        <v-row :style="{ width: '500px' }" justify="center">
          <v-text-field
            v-model="message"
            hide-details
            prepend-icon="mdi-magnify"
            append-icon="mdi-filter"
            clear-icon="mdi-close-circle"
            clearable
            label="Introduce tu búsqueda..."
            type="text"
            single-line
            color="#fd6b3c"
            @click:clear="clearMessage"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-btn
            icon
            color="#6bb2b8"
            style="position: fixed; top: 10%; right: 2%"
            @click.stop="drawer = !drawer"
            elevation="3"
            fab
            justify="center"
          >
            <v-avatar>
              <v-img src="../assets/profile_Pics/tortuga.png"></v-img>
            </v-avatar>
          </v-btn>
        </v-row>
      </v-app-bar>

      <v-card>
        <v-navigation-drawer
          color="#6bb2b8"
          v-model="drawer"
          temporary
          app
          right
        >
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="../assets/profile_Pics/tortuga.png"></v-img>
            </v-list-item-avatar>

            <v-list-item-title>CatLover22</v-list-item-title>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense>
            <v-list-item
              v-for="item in navigation2"
              :key="item.title"
              link
              :to="item.goTo"
            >
              <v-list-item-icon>
                <v-icon color="#fd6b3c">{{ item.icon }}</v-icon>
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

      <v-container>
        <v-row>
          <v-col v-for="(item, i) in items" :key="i" cols="12">
            <Post :profile_pic="item.profile_pic"  :username="item.username" :title="item.title" 
            :date="item.date" :hastags="item.hastags" :text="item.text" :image="item.image" :docs="item.docs"
            :likes="item.likes" :dislikes="item.dislikes" :indexKey="i"/>
          </v-col>
        </v-row>
      </v-container>
      <AddPost />
      <v-btn
        color="#6bb2b8"
        :left="true"
        :absolute="true"
        bottom
        elevation="2"
        fab
        style="position: fixed; top: 90%; left: 5%"
        ><v-icon color="#fd6b3c">mdi-human</v-icon>
      </v-btn>
    </v-main>
  </v-app>
</template>

<script>
import AddPost from "@/components/AddPost";
import Post from "@/components/Post-Home";

import { postItems } from "@/db/posts.js";

export default {
  name: "HomeView",

  components: {
    AddPost,
    Post

  },
  methods: {
    clearMessage() {
      this.message = "";
    },
  },

  data() {
    return {
      message: "",
      navigation2: [
        { title: "Inicio", icon: "mdi-home-city", goTo: "/home" },
        { title: "Mi cuenta", icon: "mdi-account", goTo: "/profile" },
        { title: "Configuracion", icon: "mdi-cog", goTo: "/settings" },
        { title: "Faqs", icon: "mdi-help", goTo: "/faqs" },
        { title: "Social", icon: "mdi-account-group-outline", goTo: "/404" },
      ],
      drawer: false,
      mini: true,
      navigation: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "Mi cuenta", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
      items: postItems,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Open Sans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #0000;
    }
  }
}
</style>
