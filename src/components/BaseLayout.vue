<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
        <BaseSide />
    </v-navigation-drawer>

    <v-app-bar 
    app
    color="amber darken-2"
    
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Fin</v-toolbar-title>
    </v-app-bar>
    <v-main
    
    >
      <v-card
      width="50vw"
      >
        <DTProdutos />
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
    import BaseSide from '../components/BaseSide'
    import DTProdutos from '../components/middle/DTProdutos'

    export default {
        name : 'Baselayout',
        components: {
            BaseSide,
            DTProdutos
        },

    data: () => ({ 
      drawer: null
    }),
  }
</script>