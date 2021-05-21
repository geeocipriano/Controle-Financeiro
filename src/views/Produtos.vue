<template>
  <v-app>
    <v-row>
      <v-col cols="6">
        <ProdAdicionar />
      </v-col>
      <v-col cols="6">
        <ProdList />
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
  import ProdAdicionar from '../components/ProdAdicionar'
  import ProdList from '../components/ProdList'
  export default {
    components: {
      ProdAdicionar,
      ProdList
    }
  }
</script>
