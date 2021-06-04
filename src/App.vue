<template>
  <v-app id="inspire">
    <side-bar />
    <v-app-bar app color="#343a40" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>CONTROLE GERENCIAL</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <gen-spinner />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "./components/bars/sideBar.vue";
import genSpinner from "./components/general/genSpinner.vue";
export default {
  components: { genSpinner, SideBar },
  data: () => ({
    drawer: null,
    items: [
      { title: "Home", icon: "mdi-home", to: "/", color: "#e76f51" },
      {
        title: "Produtos",
        icon: "mdi-basket",
        to: "/Produtos",
        color: "#e76f51",
      },
      {
        title: "Financeiro",
        icon: "mdi-cash",
        to: "/Financeiro",
        color: "#e76f51",
      },
    ],
    right: null,
  }),
  mounted() {
    console.log(this.$firebase);
  },
};
</script>
<style scoped>
.light-red {
  color: #e76f51;
}
</style>