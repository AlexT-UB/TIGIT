<template>
  <v-container>
    <v-row dense>
      <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
      >
        <v-card
            :color="item.color"
            dark
        >
          <div class="d-flex justify-space-between flex-row">
            <div>
              <v-card-title>
                <div class="text-h6"
                     v-text="item.title">
                </div>
                <div class="text-body-2 font-italic"
                     v-text="item.date">
                </div>
              </v-card-title>

              <v-card-subtitle v-text="item.username">
              </v-card-subtitle>

              <v-card-text v-text="item.text">
              </v-card-text>
            </div>

            <v-avatar
                class="ma-3"
                size="125"
                tile
            >
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
    ],
  }),
}
</script>
