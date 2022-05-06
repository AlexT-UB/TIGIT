<template>
  <v-app>
    <v-app-bar
        app
        color=#546E7A
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
          color=#546E7A
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
      <v-container>
        <v-row>
          <v-col
              v-for="(item, i) in items"
              :key="i"
              cols="12"
          >
            <v-card
                color= #00897B
                dark
            >
              <div class="d-flex justify-space-between flex-row">
                <div>
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
                    <p v-text = "item.username">
                    </p>
                    <p v-text = "item.hastags">
                    </p>
                  </v-card-subtitle>

                  <v-card-text>
                    <p v-text="item.text">
                    </p>

                    <v-row no-gutters >
                      <v-col
                          cols="15"
                          sm="2"
                      >
                        <v-btn icon>
                          <v-img src="./assets/comment-text-multiple-outline.png">
                          </v-img>
                        </v-btn>
                      </v-col>

                      <v-col
                          cols="15"
                          sm="2"
                      >
                        <v-btn icon>
                          <v-img src="./assets/arrow-up-bold.png">
                          </v-img>
                        </v-btn>
                        <v-icon class="body-2" v-text="22" >
                        </v-icon>
                      </v-col>

                      <v-col
                          cols="15"
                          sm="2"
                      >
                        <v-btn icon>
                          <v-img src="./assets/arrow-down-bold.png">
                          </v-img>
                        </v-btn>
                        <v-icon class="body-2" v-text="5" >
                        </v-icon>
                      </v-col>

                      <v-col
                          cols="15"
                          sm="2"
                      >
                        <v-btn icon>
                          <v-img src="./assets/share-variant-outline.png">
                          </v-img>
                        </v-btn>
                      </v-col>

                      <v-col
                          cols="15"
                          sm="2"
                      >
                        <v-btn icon>
                          <v-img src="./assets/bookmark.png">
                          </v-img>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </div>

                <v-avatar
                    class="ma-11"
                    size="125"
                    tile
                >
                  <v-img :src=item.image></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <AddPost/>
      <v-btn
          color=#1DE9B6
          :left="true"
          :absolute="true"
          bottom
          elevation="2"
          fab
          outlined
          style="position:fixed; top:90%; left:5%;"
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
              'qui officia deserunt mollit anim id est laborum.',
          image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', hastags: "#UB, #Hashtags"},
        { title: 'Second Post', username: 'Another_Random_User', date: '4:59 5/6/2022',
          text: 'This is an example text for the second one. Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
              'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
              ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
              'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ' +
              'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          hastags: "#UB, #Hashtags"},
        { title: 'Third Post', username: 'Placeholder_McDoctorate', date: '4:58 5/6/2022',
          text: 'This is an example text for the third one. Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
              'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
              ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
              'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ' +
              'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg', hastags: "#UB, " +
              "#Hashtags"},
        { title: 'Fourth Post', username: 'Placeholder_McDoctorate', date: '4:57 5/6/2022',
          text: 'This is an example text for the fourth one. Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
              'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
              ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
              'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ' +
              'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        { title: 'Fifth Post', username: 'Placeholder_McDoctorate', date: '4:57 5/6/2022',
          image: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          text: 'This is an example text for the fifth one'},
        { title: 'Sixt Post', username: 'Placeholder_McDoctorate', date: '4:54 5/6/2022',
          text: 'This is an example text for the sixt one'},
        { title: 'Seventh Post', username: 'Placeholder_McDoctorate', date: '4:52 5/6/2022',
          text: 'This is an example text for the seventh one'},
      ],
      navigation: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      mini: true,
    }
  },
};
</script>
