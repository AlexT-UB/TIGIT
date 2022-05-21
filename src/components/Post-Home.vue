<template>
  <v-card color="white" dark>
    <v-row no-gutters>
      <router-link style="text-decoration: none; color: inherit" to="/post">
        <v-col cols="auto">
          <v-avatar class="ma-11 d-flex" size="125" tile>
            <img v-bind:src="profile_pic" />
          </v-avatar>
          <p class="text-center black--text pt-n16" v-text="username"></p>
        </v-col>
      </router-link>
      <v-col>
        <router-link style="text-decoration: none; color: inherit" to="/post">
          <v-card-title>
            <div class="text-h6 black--text" v-text="title"></div>
            <v-spacer></v-spacer>
            <div
              class="black--text text-body-2 font-italic"
              v-text="date"
            ></div>
          </v-card-title>

          <v-card-subtitle class="orange--text text-left" v-text="hastags">
          </v-card-subtitle>

          <v-card-text class="black--text" v-text="text" />
        </router-link>

        <v-row no-gutters>
          <v-col cols="15" sm="2">
            <AddResponse />
          </v-col>

          <v-col cols="15" sm="2">
            <v-btn icon color="black" v-on:click="addLike(indexKey)">
              <v-icon>mdi-arrow-up-bold</v-icon>
            </v-btn>
            <v-icon class="body-2" v-text="likes" color="black"> </v-icon>
          </v-col>

          <v-col cols="15" sm="2">
            <v-btn icon color="black" v-on:click="addDislike(indexKey)">
              <v-icon>mdi-arrow-down-bold</v-icon>
            </v-btn>
            <v-icon class="body-2" v-text="dislikes" color="black"> </v-icon>
          </v-col>

          <v-col cols="15" sm="2">
            <v-btn icon color="black">
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="15" sm="2">
            <v-btn icon color="black">
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <li v-if="image !== null">
      <v-row justify="center" class="pb-12">
        <v-img
          :src="image"
          max-height="500"
          max-width="500"
          contain
          :aspect-ratio="16 / 9"
        >
        </v-img>
      </v-row>
    </li>
    <li v-if="docs !== null" class="pl-lg-16 pb-lg-6 mt-n10">
      <v-text-field class="black--text" v-text="docs"></v-text-field>
    </li>
  </v-card>
</template>

<script>
import AddResponse from "@/components/AddResponse";
import { addLike } from "@/db/posts.js";
import { addDislike } from "@/db/posts.js";


export default {
    components: {
    AddResponse,

  },
  methods:{
    addLike:addLike,
    addDislike:addDislike
  },
  data() {
    return {
      show: false,
    };
  },
  props: ["profile_pic", "username", "title", "date","hastags","text","image","docs","likes","dislikes","indexKey"],
};
</script>
