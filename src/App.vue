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
    this.$firebase.auth().onAuthStateChanged((user) => {
      window.uid = user ? user.uid : null;
      this.$router.push({
        name: window.uid ? "Home" : "Login",
      });
      this.$root.$emit('Spinner::hide')
    });
  },
};
</script>
<style scoped>
.light-red {
  color: #e76f51;
}
</style>