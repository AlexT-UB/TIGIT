<template>
  <v-app>
    <v-img src = "../assets/hypnos.jpg"/>
    <v-card
        color= "black"
        dark
    >

      <v-row no-gutters>
        <v-col cols="auto">
          <v-avatar
              class="ma-11 d-flex"
              size="125"
              tile
          >
            <img src="../assets/profile_Pics/escorpion.png">
          </v-avatar>
          <p class="text-center black--text pt-n16" v-text = "Random_User">
          </p>
        </v-col>
        <v-col>
          <v-card-title>
            <div class="text-h6 black--text">This is the post you've selected
            </div>
            <v-spacer></v-spacer>
            <div class="text-body-2 font-italic"> 5:01 12/12/2022
            </div>
          </v-card-title>

          <v-card-subtitle class ="light-blue--text text-left"> #UB #Coffee
          </v-card-subtitle>

          <v-card-text class="black--text">This is the post you have selected. May the merciful gods, if indeed
            there be such, guard those hours when no power of the will, or drug that the cunning of man devises,
            can keep me from the chasm of sleep.
          </v-card-text>
          <v-row no-gutters>
            <v-col
                cols="15"
                sm="2"
            >
              <AddResponse/>
            </v-col>

            <v-col
                cols="15"
                sm="2"
            >
              <v-btn
                  icon
                  color="black"
              >
                <v-icon>mdi-arrow-up-bold</v-icon>
              </v-btn>
              <v-icon class="body-2" v-text="22" color = "black" >
              </v-icon>
            </v-col>

            <v-col
                cols="15"
                sm="2"
            >
              <v-btn
                  icon
                  color="black"
              >
                <v-icon>mdi-arrow-down-bold</v-icon>
              </v-btn>
              <v-icon class="body-2" v-text="5" color = "black" >
              </v-icon>
            </v-col>

            <v-col
                cols="15"
                sm="2"
            >
              <v-btn
                  icon
                  color="black"
              >
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-col>

            <v-col
                cols="15"
                sm="2"
            >
              <v-btn
                  icon
                  color="black"
              >
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>

      </v-row>
      <v-row justify="center"
             class = "pb-12">
        <v-img src="../assets/hypnos.jpg"
               max-width="500"
               :aspect-ratio="16/9">
        </v-img>
      </v-row>
      <v-row no-gutters>
        <v-col
            cols="15"
            sm="2"
        >
          <AddResponse/>
        </v-col>

        <v-col
            cols="15"
            sm="2"
        >
          <v-btn
              icon
              color="black"
          >
            <v-icon>mdi-arrow-up-bold</v-icon>
          </v-btn>
          <v-icon class="body-2" v-text="22" color = "black" >
          </v-icon>
        </v-col>

        <v-col
            cols="15"
            sm="2"
        >
          <v-btn
              icon
              color="black"
          >
            <v-icon>mdi-arrow-down-bold</v-icon>
          </v-btn>
          <v-icon class="body-2" v-text="5" color = "black" >
          </v-icon>
        </v-col>

        <v-col
            cols="15"
            sm="2"
        >
          <v-btn
              icon
              color="black"
          >
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-col>

        <v-col
            cols="15"
            sm="2"
        >
          <v-btn
              icon
              color="black"
          >
            <v-icon>mdi-bookmark</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <li v-if="item.image !== null">
        <v-row justify="center"
               class = "pb-12">
          <v-img :src=item.image
                 max-width="500"
                 :aspect-ratio="16/9">
          </v-img>
        </v-row>
      </li>
      <li v-if="item.docs !== null" class="pl-lg-16 pb-lg-6 mt-n10">
        <v-text-field class = "black--text" v-text=item.docs ></v-text-field>
      </li>
    </v-card>
  </v-app>
</template>

<script>

import AddResponse from "@/components/AddResponse";
export default {
  name: 'PostView',

  components: {
    AddResponse
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
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
