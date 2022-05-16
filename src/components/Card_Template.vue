<template>
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
            <v-col cols="auto">
              <v-avatar
                  class="ma-11 d-flex"
                  size="125"
                  tile
              >
                <v-img src="./assets/profile_Pics/ballena.png"></v-img>
              </v-avatar>
              <p class="text-center black--text" v-text = "item.username">
              </p>
            </v-col>
            <v-col>
              <v-card-title>
                <div class="text-h6 black--text"
                     v-text="item.title">
                </div>
                <v-spacer></v-spacer>
                <div class="text-body-2 font-italic"
                     v-text="item.date">
                </div>
              </v-card-title>

              <v-card-subtitle class ="orange--text text-left" v-text = "item.hastags">
              </v-card-subtitle>

              <v-card-text class="black--text">
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
                      <router-link to="/about"><v-icon>mdi-comment-text-multiple-outline</v-icon></router-link>
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
          <li v-if="item.image !== null" class = "align-content-center">
            <v-img :src=item.image
                   max-width="500"
                   :aspect-ratio="16/9">
            </v-img>
            <v-text-field class = "black--text" v-text=item.docs></v-text-field>
          </li>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'First Post', username: 'A_Random_User', date: '5:01 5/6/2022',
        text: 'This is an example text for the first one. \n' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
            'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
            'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
            'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa' +
            'qui officia deserunt mollit anim id est laborum.', profile_pic: "./assets/profile_Pics/ballena.png",
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', hastags: "#UB, #Hashtags"},
      { title: 'Second Post', username: 'Another_Random_User', date: '4:59 5/6/2022',
        text: 'This is an example text for the second one. Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
            ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
            'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ' +
            'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        profile_pic: "./assets/profile_Pics/ballena.png",
        hastags: "#UB, #Hashtags"},
      { title: 'Third Post', username: 'Placeholder_McDoctorate', date: '4:58 5/6/2022',
        text: 'This is an example text for the third one. Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
            ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
            'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ' +
            'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        profile_pic: "./assets/profile_Pics/ballena.png",
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
        profile_pic: "../assets/Profile_Pic_4.jpg"}
    ],
  }),
}
</script>
