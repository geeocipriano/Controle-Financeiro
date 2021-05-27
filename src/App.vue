<template>
  <v-app id="inspire">
    <side-bar />
    <nav-bar @click="drawer = false" />
    <v-main>
      <gen-spinner />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/bars/navBar.vue";
import SideBar from "./components/bars/sideBar.vue";
import genSpinner from "./components/general/genSpinner.vue";
export default {
  components: { genSpinner, SideBar, NavBar },
  data: () => ({
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