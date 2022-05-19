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
            elevation="4"
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
            <v-list-item v-for="item in navigation2" :key="item.title" link :to="item.goTo">
              <v-list-item-icon >
                <v-icon color="#fd6b3c">{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content >
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
            <v-card color="white" dark>
              <v-row no-gutters>
                <router-link
                  style="text-decoration: none; color: inherit"
                  to="/post"
                >
                  <v-col cols="auto">
                    <v-avatar class="ma-11 d-flex" size="125" tile>
                      <img v-bind:src="item.profile_pic" />
                    </v-avatar>
                    <p
                      class="text-center black--text pt-n16"
                      v-text="item.username"
                    ></p>
                  </v-col>
                </router-link>
                <v-col>
                  <router-link
                    style="text-decoration: none; color: inherit"
                    to="/post"
                  >
                    <v-card-title>
                      <div
                        class="text-h6 black--text"
                        v-text="item.title"
                      ></div>
                      <v-spacer></v-spacer>
                      <div
                        class="black--text text-body-2 font-italic"
                        v-text="item.date"
                      ></div>
                    </v-card-title>

                    <v-card-subtitle
                      class="orange--text text-left"
                      v-text="item.hastags"
                    >
                    </v-card-subtitle>

                    <v-card-text class="black--text" v-text="item.text" />
                  </router-link>

                  <v-row no-gutters>
                    <v-col cols="15" sm="2">
                      <AddResponse />
                    </v-col>

                    <v-col cols="15" sm="2">
                      <v-btn icon color="black">
                        <v-icon>mdi-arrow-up-bold</v-icon>
                      </v-btn>
                      <v-icon class="body-2" v-text="22" color="black">
                      </v-icon>
                    </v-col>

                    <v-col cols="15" sm="2">
                      <v-btn icon color="black">
                        <v-icon>mdi-arrow-down-bold</v-icon>
                      </v-btn>
                      <v-icon class="body-2" v-text="5" color="black"> </v-icon>
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
              <li v-if="item.image !== null">
                <v-row justify="center" class="pb-12">
                  <v-img
                    :src="item.image"
                    max-height="500"
                    max-width="500"
                    contain="true"
                    :aspect-ratio="16 / 9"
                  >
                  </v-img>
                </v-row>
              </li>
              <li v-if="item.docs !== null" class="pl-lg-16 pb-lg-6 mt-n10">
                <v-text-field
                  class="black--text"
                  v-text="item.docs"
                ></v-text-field>
              </li>
            </v-card>
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
        ><v-icon color="#fd6b3c">mdi-human</v-icon></v-btn
      >
    </v-main>
  </v-app>
</template>

<script>
import AddPost from "@/components/AddPost";
import AddResponse from "@/components/AddResponse";
export default {
  name: "HomeView",

  components: {
    AddPost,
    AddResponse,
  },
  methods: {
    clearMessage() {
      this.message = "";
    },
  },

  data() {
    return {
      navigation2: [
        { title: "Inicio", icon: "mdi-home-city",goTo:"/home" },
        { title: "Mi cuenta", icon: "mdi-account",goTo:"/profile" },
        { title: "Configuracion", icon: "mdi-cog",goTo:"/settings" },
        { title: "Faqs", icon: "mdi-help",goTo:"/faqs" },
        { title: "Social", icon: "mdi-account-group-outline",goTo:"/404" },
      ],

      drawer: false,
      mini: true,
      navigation: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "Mi cuenta", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
      items: [
        {
          title: "Porque no funciona mi SAT-Solver?",
          username: "Edgar1809",
          date: "5:01 5/6/2022",
          text:
            "Mi grupo y yo hemos escrito un pequeño SAT-Solver para un proyecto universitario, pero NO TENGO NI " +
            "IDEA de por qué es que no funciona. Normalmente preguntaría para algo concreto para resolver el " +
            "problema, pero simplemente no sé qué y por qué tengo este problema. No nos sale ningún error. " +
            "Simplemente deja de procesarse después de un rato. Todos hemos estado tratando de resolverlo durante " +
            "este par de días y buscando consejos online, pero no hemos encontrado nada. Agregué el código para " +
            "main en el archivo adjunto. Por favor, ayuda, sinceramente no sé cómo resolver esto.",
          image: null,
          profile_pic: require("../assets/profile_Pics/abeja.png"),
          hastags: "#SAT_Solvers, #Coding, " + "#UnknownCodingError, #Academia",
          docs: "code_snippet.txt",
        },
        {
          title:
            "Alguien porfavor me puede descifrar estas formulas que ha mandado mi profesor?",
          username: "Opoossum_01",
          date: "4:59 5/6/2022",
          text:
            "Hola todos. Soy una estudiante de segundo de carrera de mates de la UMSA, y mi profesor de grafos " +
            "nos acaba de mandar este .jpg con formulas escritas a mano que dice quew saldrán en el examen. Nunca " +
            "las hemos visto en clasem nunca las ha mencionado, y no nos ha dado ninguna explicación de que son o " +
            "que hacen. Estoy honestamente confundida y no se por donde empezar. Si alguine me las pudiese explicar" +
            " o decirme como se llaman, realmente se aprecaría mucho.",
          profile_pic: require("../assets/profile_Pics/ballena.png"),
          image: require("../assets/post_Pics/istockphoto-696935130-612x612.jpg"),
          docs: "formulas.jpg",
          hastags:
            "#Graphs, #Maths, #UnknownFormulas, #Urgent, #UMSA, #Academia",
        },
        {
          title: "Comparto mis apuntes!",
          username: "Ligotti22",
          date: "4:58 5/6/2022",
          text:
            " Os comparto mis apuntes de Estadísticas(363011) que la cursé el año pasado. También he notado " +
            "que muchos de nosotros están pidiendo apuntes de diferentes asignaturas, así que creo este nuevo tag " +
            "#APUNTES para que todos lo vean! Suerte!!!",
          profile_pic: require("../assets/profile_Pics/blowfish.png"),
          docs: "Mis_Apuntes_de_Estadistica.pdf",
          image: null,
          hastags: "#Apuntes, #UB, #Estadisticas, #Academia",
        },
        {
          title: "Clarificación de un mensaje de la UB",
          username: "YellowHoward",
          date: "4:57 5/6/2022",
          text:
            'Alguien me puede clarificar si hay clase o no en matesfest de la UB? "Bon dia, aquest dimecres 27 ' +
            "d’abril (dia no lectiu) es celebra la MATEFEST-INFOFEST, una festa de las Matemàtiques i Informàtica " +
            "organitzada per l’alumnat de la nostra facultat. Durant el matí hi haurà stands i xerrades adreçades " +
            'principalment a l’alumnat de secundaria."',
          profile_pic: require("../assets/profile_Pics/erizo.png"),
          image: null,
          docs: null,
          hastags: "#UB, " + "#InfoFest, #MatesFest, #UBMates",
        },
        {
          title: "¿Cómo o dónde consigo prácticas?",
          username: "Miguel_UB",
          date: "4:57 5/6/2022",
          profile_pic: require("../assets/profile_Pics/escorpion.png"),
          image: null,
          text:
            "Hola, ya estoy cerca de poder realizar prácticas para ingeniería informática y me preguntaba si " +
            "sabían de alguna empresa buena donde pueda comenzar o cuál sería la mejor forma de encontrar.",
          docs: null,
          hastags: "#Practicas, #Informatica, #Trabajo ",
        },
        {
          title: "Estudiante de intercambio",
          username: "EnglishStudentInBarcelona",
          date: "4:54 5/6/2022",
          text:
            "¡Buenas!, soy un estudiante de intercambio, he venido de Durham a estudiar psicología en la UB. Me " +
            "preguntaba si alguien tendría la amabilidad de quedar conmigo un día en la cafetería para hacer amigos " +
            "y crear un grupo, ¡yo invito!",
          profile_pic: require("../assets/profile_Pics/medusa.png"),
          image: require("../assets/post_Pics/durham.png"),
          docs: null,
          hastags: "#Personal, #Grupo, #Barcelona, #Amigos",
        },
        {
          title: "¿Cómo cambio el color del subtítulo en vuetify?",
          username: "AlexUBInfo",
          date: "4:52 5/6/2022",
          text:
            "Estoy desarrollando una web para un proyecto de clase pero al asignar el color a un subtítulo, este " +
            "no cambia y sigue de color blanco. Me gustaría ponerlo de color naranja, ya que combina con el azul " +
            "y además en color blanco no se ve, ya que los posts son de color blanco de fondo. \n " +
            "Adjunto una captura del código.",
          profile_pic: require("../assets/profile_Pics/murcielago.png"),
          image: require("../assets/post_Pics/Hashtags.png"),
          docs: null,
          hastags: "#UB, #Vue, #html, #JS, #Vuetify",
        },
      ],
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
