<template>
  <v-app id="inspire">
    <v-main>
      <gen-spinner />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import genSpinner from "./components/general/genSpinner.vue";
export default {
  components: { genSpinner },
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
#inspire {
  min-height: 100vh;
  background-color: black;
  color: aliceblue;
}
</style>