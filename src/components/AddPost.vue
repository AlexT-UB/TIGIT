<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
    >
      <template v-slot:activator="{ on }">
        <v-btn
            color=#6bb2b8
            :right="true"
            :absolute="true"
            bottom
            elevation="2"
            fab
            style="position:fixed; top:90%; right:5%;"
            v-on="on"
        >
          <v-icon color=#fd6b3c>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-row
            justify="center"
            class="text-center pt-md-8"
        >
          <v-card-text >
            <span class="text-h5 pa-md-8">New Post</span>
          </v-card-text>
        </v-row>
        <v-card-text>
          <v-container>
            <v-row no-gutters>
              <v-col cols="12">
              <v-text-field
                    label="Title*"
                    required
                    color=#fd6b3c
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    label="Text*"
                    required
                    color=#fd6b3c
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    label="Hashtags (Recomended)"
                    color=#fd6b3c
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
              >
                <v-card-text class ="text-body-1 text-center">Add files</v-card-text>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
                  class="pt-6"
              >
                <v-btn
                    icon
                    color=#6bb2b8
                    x-large
                    elevation="2"
                >
                  <v-icon color="#6bb2b8">mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color=#6bb2b8
              text
              @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
              color=#6bb2b8
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
