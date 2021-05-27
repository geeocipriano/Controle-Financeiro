<template>
  <v-navigation-drawer v-model="drawer" app color="#343a40" dark>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title light-red"> Usuario </v-list-item-title>
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
</template>

<script>
export default {
  name: "sideBar",
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
};
</script>

<style>
</style>