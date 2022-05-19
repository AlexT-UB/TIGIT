<template>
  <v-app-bar color="#6bb2b8" app height="auto" >
    <v-row align="center" >
      <router-link style="text-decoration: none; color: #fd6b3c" to="/">
        <img src="../assets/logo.jpeg" height="135" />
      </router-link>
    </v-row>


    <v-spacer></v-spacer>

    <v-btn color="#fd6b3c" to="/home"> Login </v-btn>

    <v-btn color="#fd9d7d" to="/home"> Register </v-btn>
  </v-app-bar>
</template>
<style scoped>
.colorBar {
  background-color: #fd9d7d;
}
.v-btn {
  margin-right: 5px;
}
</style>