<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
    >
      <template v-slot:activator="{ on }">
        <v-btn
            icon
            color="black"
            v-on="on"
            fab
        >
          <v-icon>mdi-comment-text-multiple-outline</v-icon>
        </v-btn>
      </template>
      <v-card class="pt-md-8" >
        <v-row
            justify="center"
        >
          <img src="../assets/logo.png"
               width = 150>
        </v-row>
        <v-card-text class="text-center pt-md-8">
          <span class="text-h5">Respond To Post</span>
        </v-card-text>
        <v-card-text>
          <v-container>
            <v-row no-gutters>
              <v-col cols="12">
                <v-text-field
                    label="Response*"
                    required
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
              >
                <v-card-text class ="text-body-1 text-center pt-md-n8">Add files</v-card-text>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
                  class="pt-2"
              >
                <v-btn
                    icon
                    color=#3685B1
                    x-large
                    elevation="2"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color=#3685B1
              text
              @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
              color=#3685B1
              text
              @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
}
</script>
