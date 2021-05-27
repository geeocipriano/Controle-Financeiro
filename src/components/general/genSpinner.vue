<template>
  <div class="text-center spinner" v-if="visible">
    <v-progress-circular
      indeterminate
      color="#e76f51"
      size="100"
      width="10"
    ></v-progress-circular>
  </div>
</template>
<script>
export default {
  name: "genSpinner",
  data() {
    return {
      visible: false,
    };
  },
  created() {
    this.$root.$on("Spinner::show", this.showSpinner);
    this.$root.$on("Spinner::hide", this.showSpinner);
  },
  methods: {
    showSpinner() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
.spinner {
  z-index: 10000;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #343a40;
}
</style>