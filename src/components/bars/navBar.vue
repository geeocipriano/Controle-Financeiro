<template>
  <v-app-bar app color="#343a40" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>CONTROLE GERENCIAL</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>
export default {
    name: "navBar",
    data: () => ({
        drawer: null
    })
}
</script>

<style>

</style>