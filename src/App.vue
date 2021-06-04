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