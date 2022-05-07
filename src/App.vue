<template>
  <v-app>
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

    <v-card>
      <v-navigation-drawer
          color=#3685B1
          dark
          v-model="drawer"
          :mini-variant.sync="mini"
          permanent
          app right
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
            <v-icon>mdi-chevron-left</v-icon>
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
              <div >
                <div>
                  <v-row no-gutters>
                    <v-col cols="auto">
                      <v-avatar
                          class="ma-11 d-flex"
                          size="125"
                          tile
                      >
                        <v-img src="./assets/Profile_Pic_4.jpg"></v-img>
                      </v-avatar>
                      <p class="text-center black--text" v-text = "item.username">
                      </p>
                    </v-col>
                    <v-col>
                      <v-card-title>
                        <div class="text-h6"
                             v-text="item.title">
                        </div>
                        <v-spacer></v-spacer>
                        <div class="text-body-2 font-italic"
                             v-text="item.date">
                        </div>
                      </v-card-title>

                      <v-card-subtitle>
                        <div>
                          <p class ="light-blue--text" v-text = "item.hastags">
                          </p>
                        </div>
                      </v-card-subtitle>

                      <v-card-text>
                        <p v-text="item.text">
                        </p>

                        <v-row no-gutters >
                          <v-col
                              cols="15"
                              sm="2"
                          >
                            <v-btn
                                icon
                                color="black"
                            >
                              <v-icon>mdi-comment-text-multiple-outline</v-icon>
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
                      </v-card-text>
                    </v-col>
                  </v-row>
                  <v-img :src=item.image></v-img>
                </div>
              </div>
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
        { title: 'First Post', username: 'A_Random_User', date: '5:01 5/6/2022',
          text: 'This is an example text for the first one. \n' +
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
              'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
              'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
              'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa' +
              'qui officia deserunt mollit anim id est laborum.', profile_pic: "./assets/Profile_Pic.jpg",
          image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', hastags: "#UB, #Hashtags"},
        { title: 'Second Post', username: 'Another_Random_User', date: '4:59 5/6/2022',
          text: 'This is an example text for the second one. Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
              'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
              ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
              'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ' +
              'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          profile_pic: "./assets/Profile_Pic_2.jpg",
          hastags: "#UB, #Hashtags"},
        { title: 'Third Post', username: 'Placeholder_McDoctorate', date: '4:58 5/6/2022',
          text: 'This is an example text for the third one. Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
              'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
              ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
              'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ' +
              'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          profile_pic: "./assets/Profile_Pic_3.jpg",
          image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg', hastags: "#UB, " +
              "#Hashtags"},
        { title: 'Fourth Post', username: 'Placeholder_McDoctorate', date: '4:57 5/6/2022',
          text: 'This is an example text for the fourth one. Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
              'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
              ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
              'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ' +
              'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          profile_pic: "./assets/Profile_Pic_4.jpg"},
        { title: 'Fifth Post', username: 'Placeholder_McDoctorate', date: '4:57 5/6/2022',
          profile_pic: "./assets/Profile_Pic_4.jpg",
          image: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          text: 'This is an example text for the fifth one'},
        { title: 'Sixt Post', username: 'Placeholder_McDoctorate', date: '4:54 5/6/2022',
          text: 'This is an example text for the sixt one',
          profile_pic: "./assets/Profile_Pic_4.jpg"},
        { title: 'Seventh Post', username: 'Placeholder_McDoctorate', date: '4:52 5/6/2022',
          text: 'This is an example text for the seventh one',
          profile_pic: "./assets/Profile_Pic_4.jpg"},
      ],
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
