<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col
              v-for="(item, i) in items"
              :key="i"
              cols="12"
          >
            <v-card
                color= "white"
                dark
            >
              <v-row no-gutters>
                <router-link style="text-decoration: none; color: inherit;"
                    to="/post">
                  <v-col cols="auto">
                    <v-avatar
                        class="ma-11 d-flex"
                        size="125"
                        tile
                    >
                      <img v-bind:src="item.profile_pic">
                    </v-avatar>
                    <p class="text-center black--text pt-n16" v-text = "item.username">
                    </p>
                  </v-col>
                </router-link>
                <v-col>
                  <router-link style="text-decoration: none; color: inherit;"
                               to="/post">
                  <v-card-title>
                    <div class="text-h6 black--text "
                         v-text="item.title">
                    </div>
                    <v-spacer></v-spacer>
                    <div class="black--text text-body-2 font-italic"
                         v-text="item.date">
                    </div>
                  </v-card-title>

                  <v-card-subtitle class ="orange--text text-left" v-text = "item.hastags">
                  </v-card-subtitle>

                  <v-card-text class="black--text" v-text="item.text"/>

                  </router-link>

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
          </v-col>
        </v-row>
      </v-container>
      <AddPost/>
      <v-btn
          color=#6bb2b8
          :left="true"
          :absolute="true"
          bottom
          elevation="2"
          fab
          style="position:fixed; top:90%; left:5%;"
      ><v-icon color=#fd6b3c>mdi-human</v-icon></v-btn>

    </v-main>
  </v-app>
</template>

<script>

import AddPost from "@/components/AddPost";
import AddResponse from "@/components/AddResponse";
export default {
  name: 'HomeView',

  components: {
    AddPost,
    AddResponse
  },

  data () {
    return {
      drawer: true,
      mini: true,
      navigation: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'Mi cuenta', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      items: [
        { title: 'Why is my SAT Solver not working', username: 'Edgar1809', date: '5:01 5/6/2022',
          text: "So my group and I have written a little SAT-Solver for a school project but I have NO CLUE why it is " +
              "not working. Normally I would ask a question to solve a problem but I simply do not know what is " +
              "going on and why I am having this problem. There isn't an error. It just stops processing after a " +
              "while. We've all been trying to solve it for a couple days now, and looking online for advice, but " +
              "çwe haven't found anything. I added the code for main in the attached file." +
              "Please help, I honestly do not know how to solve this.",
          image: null, profile_pic: require("../assets/profile_Pics/abeja.png"), hastags: "#SAT_Solvers, #Coding, " +
              "#UnknownCodingError, #Academia",
        docs: "code_snippet.txt"},
        { title: 'Can someone help me decipher these formulas the teacher wrote?',
          username: 'Opoossum_01', date: '4:59 5/6/2022',
          text: "My second year graphs teacher just sent us these formulas to study for the final, but I do not " +
              "understand them. We have never seen them in class, nor has she explained what they mean or do. I am " +
              "lost and confused and would really appreciate if someone makes some sense out of this bullcrap." +
              "Please and thank you in advanced",
          profile_pic: require("../assets/profile_Pics/ballena.png"),
          image: require("../assets/post_Pics/istockphoto-696935130-612x612.jpg"), docs: "formulas.jpg",
          hastags: "#Graphs, #Maths, #UnknownFormulas, #Urgent, #UMSA, #Academia"},
        { title: 'Third Post', username: 'Placeholder_McDoctorate', date: '4:58 5/6/2022',
          text: 'This is an example text for the third one. Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
              'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
              ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
              'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ' +
              'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          profile_pic: require("../assets/profile_Pics/blowfish.png"), docs: null,
          image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg', hastags: "#UB, " +
              "#Hashtags"},
        { title: 'Fourth Post', username: 'Placeholder_McDoctorate', date: '4:57 5/6/2022',
          text: 'This is an example text for the fourth one. Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
              'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
              ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
              'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ' +
              'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          profile_pic: require("../assets/profile_Pics/erizo.png"),image: null, docs: null},
        { title: 'Fifth Post', username: 'Placeholder_McDoctorate', date: '4:57 5/6/2022',
          profile_pic: require("../assets/profile_Pics/escorpion.png"),
          image: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          text: 'This is an example text for the fifth one', docs: null},
        { title: 'Sixt Post', username: 'Placeholder_McDoctorate', date: '4:54 5/6/2022',
          text: 'This is an example text for the sixt one',
          profile_pic: require("../assets/profile_Pics/medusa.png"),image: null, docs: null},
        { title: 'Seventh Post', username: 'Placeholder_McDoctorate', date: '4:52 5/6/2022',
          text: 'This is an example text for the seventh one',
          profile_pic: require("../assets/profile_Pics/murcielago.png") ,image: null, docs: null}
      ]
    }
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
