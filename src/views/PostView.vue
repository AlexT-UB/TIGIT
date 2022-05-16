<template>
  <v-app>
    <v-main>
      <v-container>
      <v-card>
        <v-row no-gutters>
          <v-col cols="auto">
            <v-avatar
                class="ma-11 d-flex"
                size="125"
                tile
            >
              <img src="../assets/profile_Pics/serpiente.png">
            </v-avatar>
            <p class="text-center black--text pt-n16"> H.P.L0vecraft
            </p>
          </v-col>
          <v-col>
        <v-card-title>
          <div class="text-h6 black--text"> This is the title of the post you have selected
          </div>
          <v-spacer></v-spacer>
          <div class="text-body-2 font-italic"> 5:02 12/12/2022
          </div>
        </v-card-title>
        <v-card-subtitle class ="orange--text text-left"> #UB #Coffee #Hypnos
        </v-card-subtitle>

        <v-card-text class="black--text"> May the merciful gods, if indeed there be such, guard those hours when no
          power of the will, or drug that the cunning of man devises, can keep me from the chasm of sleep.
        </v-card-text>
          <v-row>
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
        <v-img height="500" src = "../assets/hypnos.jpg"/>

        </v-row>
      </v-card>
      <v-card>
          <v-row no-gutters>
            <v-col cols="auto" class ="ml-12">
              <v-avatar
                  class="ma-11 d-flex"
                  size="125"
                  tile
              >
                <img src="../assets/profile_Pics/planta-carnivora.png">
              </v-avatar>
              <p class="text-center black--text pt-n16"> Response User 1
              </p>
            </v-col>
            <v-col>
              <v-card-text class = "mt-10">
                <div class="black--text"> This would be the first response. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <v-spacer></v-spacer>
                <div class="text-body-2 font-italic"> 5:02 12/12/2022
                </div>
              </v-card-text>
              <v-row>
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
        </v-card>
        <v-card>
          <v-row no-gutters>
            <v-col cols="auto" class ="ml-12">
              <v-avatar
                  class="ma-11 d-flex"
                  size="125"
                  tile
              >
                <img src="../assets/profile_Pics/pez.png">
              </v-avatar>
              <p class="text-center black--text pt-n16"> Response User 2
              </p>
            </v-col>
            <v-col>
              <v-card-text class = "mt-10">
                <div class="black--text"> This would be the second response.
                </div>
                <v-spacer></v-spacer>
                <div class="text-body-2 font-italic"> 5:02 12/12/2022
                </div>
              </v-card-text>
              <v-row>
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
        </v-card>
      </v-container>
    </v-main>
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
