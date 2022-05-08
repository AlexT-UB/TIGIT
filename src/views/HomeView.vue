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
                      <img src="../assets/Profile_Pic_1.jpg">
                    </v-avatar>
                    <p class="text-center black--text pt-n16" v-text = "item.username">
                    </p>
                  </v-col>
                </router-link>
                <v-col>
                  <router-link style="text-decoration: none; color: inherit;"
                               to="/post">
                  <v-card-title>
                    <div class="text-h6 black--text"
                         v-text="item.title">
                    </div>
                    <v-spacer></v-spacer>
                    <div class="text-body-2 font-italic"
                         v-text="item.date">
                    </div>
                  </v-card-title>

                  <v-card-subtitle class ="light-blue--text text-left" v-text = "item.hastags">
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
          color=#4797C4
          :left="true"
          :absolute="true"
          bottom
          elevation="2"
          fab
          dark
          style="position:fixed; top:93%; left:1%;"
      ><v-icon>mdi-human</v-icon></v-btn>

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
        { title: 'First Post', username: 'A_Random_User', date: '5:01 5/6/2022',
          text: 'This is an example text for the first one. \n' +
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
              'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
              'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
              'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa' +
              'qui officia deserunt mollit anim id est laborum.', profile_pic: "./assets/Profile_Pic.jpg",
          image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', hastags: "#UB, #Hashtags",
        docs: "ExampleDoc.pdf"},
        { title: 'Second Post', username: 'Another_Random_User', date: '4:59 5/6/2022',
          text: 'This is an example text for the second one. Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
              'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
              ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
              'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ' +
              'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          profile_pic: "./assets/Profile_Pic_2.jpg", image: null, docs: "Another_Docs.pptx",
          hastags: "#UB, #Hashtags"},
        { title: 'Third Post', username: 'Placeholder_McDoctorate', date: '4:58 5/6/2022',
          text: 'This is an example text for the third one. Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
              'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
              ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
              'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ' +
              'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          profile_pic: "./assets/Profile_Pic_3.jpg", docs: null,
          image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg', hastags: "#UB, " +
              "#Hashtags"},
        { title: 'Fourth Post', username: 'Placeholder_McDoctorate', date: '4:57 5/6/2022',
          text: 'This is an example text for the fourth one. Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
              'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
              ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
              'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ' +
              'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          profile_pic: "./assets/Profile_Pic_4.jpg",image: null, docs: null},
        { title: 'Fifth Post', username: 'Placeholder_McDoctorate', date: '4:57 5/6/2022',
          profile_pic: "../assets/Profile_Pic_4.jpg",
          image: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          text: 'This is an example text for the fifth one', docs: null},
        { title: 'Sixt Post', username: 'Placeholder_McDoctorate', date: '4:54 5/6/2022',
          text: 'This is an example text for the sixt one',
          profile_pic: "./assets/Profile_Pic_4.jpg",image: null, docs: null},
        { title: 'Seventh Post', username: 'Placeholder_McDoctorate', date: '4:52 5/6/2022',
          text: 'This is an example text for the seventh one',
          profile_pic: "../assets/Profile_Pic_4.jpg",image: null, docs: null}
      ],
    }
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
