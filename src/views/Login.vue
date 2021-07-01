<template>
  <v-container fill-height fluid id="app">
    <v-row align="center" justify="center">
      <v-card class="mx-auto" min-width="344">
        <v-card-text>
          <div class="display-1 text--primary d-flex justify-center">
            Gerencial
          </div>
          <v-text-field label="E-mail" v-model="email"></v-text-field>
          <v-text-field
            label="Senha"
            type="password"
            v-model="password"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn
            block
            elevation="2"
            color="primary"
            @click.prevent="doLogin()"
            :disabled="loading"
          >
            <template v-if="loading">
              <div class="pr-5">Entrando</div>
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </template>
            <template v-else>
              <div>Login</div>
              <v-icon class="pl-5">mdi-login-variant</v-icon>
            </template>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      loading: false,
      email: "teste@teste.com",
      password: "123456",
    };
  },
  methods: {
    async doLogin() {
      this.loading = true;
      try {
        const res = await this.$firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        window.uid = res.user.uid;
        this.$router.push({ name: "Home" });
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
  },
};
</script>

<style>
#app {
  background-color: black;
}
</style>