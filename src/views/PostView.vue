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
        <v-card-subtitle class ="orange--text text-left"> #English, #Texto, #Escriptura, #Horror, #FeedbackEscritura,
          #Personal
        </v-card-subtitle>

        <v-card-text class="black--text">
          <p>¡Hola a todos! Estaba aburrido en clase y he escrito este par de lineas.</p>
          <p>May the merciful gods, if indeed there be such, guard those hours when no
            power of the will, or drug that the cunning of man devises, can keep me from the chasm of sleep.</p>
          <p>¿Que pensais? Me he inspirado en el flautista del grande Beksinski. Esatba pensado de utilizar esto para
            hacer un pequeño relato, de alguien que ahce contacto con el mas allá en la tierra de los sueños y llamarlo
            algo como Hypnos. ¿Alguna sugerencia o critica?</p>
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
        <v-img height="500" src = "../assets/post_Pics/Beksinski_wallpaper.jpg"/>

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
              <p class="text-center black--text pt-n16"> ClarkAshton93
              </p>
            </v-col>
            <v-col>
              <v-card-text class = "mt-10">
                <div class="black--text"> <p>Realmente me gusta mucho! Y no tan solo la pintura de Beskinski, sino
                  también el texo me parece muy evocativo. Yo creo que facilmente lo puedes expandir a un relato, y
                  hasta jugar con una dinamica de dos protagonistas entrando en el mundo del ocultismo del sueño juntos
                  o algo por el estilo</p>
                  <p>Buena suerte y ya nos diras que tal!</p>
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
              <p class="text-center black--text pt-n16"> 17_Bloch
              </p>
            </v-col>
            <v-col>
              <v-card-text class = "mt-10">
                <div class="black--text"> <p>Que talento! Me encanta! No solo creo que podría expandirlo a un relato,
                  sino pienso que deberías! Y cuelga el texto cuando lo tengas!</p>
                  <p>Dico esto, nunca había escuchado de este pintor, pero definitivamente me lo apunto</p>
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
