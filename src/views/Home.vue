<template>
  <v-app id="inspire">
    <v-col>
      <v-navigation-drawer
        v-model="drawer"
        app
        class="pt-4"
        color="#343a40"
        mini-variant
      >
        <v-list shaped class="my-10">
          <v-list-item-group v-model="selectedItem" color="#e76f51">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-col>
    <v-col>
      <v-app-bar absolute color="#343a40" dark>
        <v-spacer></v-spacer>
        <h1>Controle Financeiro</h1>

        <v-spacer></v-spacer>
        <v-btn icon class="mr-5">
          <v-avatar
            color="#e76f51"
            class="d-flex text-center justify-center"
          ></v-avatar>
        </v-btn>
      </v-app-bar>
    </v-col>

    <v-main class="grey lighten-3">
      <v-container color="black">
        <v-row>
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 1,
    items: [
      { text: "Real-Time", icon: "mdi-clock" },
      { text: "Audience", icon: "mdi-account" },
      { text: "Conversions", icon: "mdi-flag" },
    ],
  }),
};
</script>