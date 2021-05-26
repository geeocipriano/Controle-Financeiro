<template>
  <v-app>
    <v-row>
      <v-col cols="6">
        <prodAdd />
      </v-col>
      <v-col cols="6">
        <prodList />
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
import prodAdd from "../components/product/prodAdd";
import prodList from "../components/product/prodList";
export default {
  components: {
    prodAdd,
    prodList,
  },
};
</script>
