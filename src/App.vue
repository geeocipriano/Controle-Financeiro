<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app color="#343a40" dark>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title light-red">
            Usuario
          </v-list-item-title>
          <v-list-item-subtitle> Administrador </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
          :color="item.color"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
import genSpinner from "./components/general/genSpinner.vue";
export default {
  components: { genSpinner },
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
  mounted(){
    console.log(this.$firebase)
  }
};
</script>
<style scoped>
.light-red {
  color: #e76f51;
}
</style>