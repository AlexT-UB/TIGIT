<template>
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
          <v-img :src="`${process.env.BASE_URL}Profile_Pic.jpg`"></v-img>
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
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      navigation: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'Mi cuenta', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      mini: true,
    }
  }
}

</script>
