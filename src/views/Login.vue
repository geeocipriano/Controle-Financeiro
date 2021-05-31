<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-card class="mx-auto" min-width="344">
        <v-card-text>
          <div class="display-1 text--primary d-flex justify-center">
            Gerencial
          </div>
          <v-text-field label="E-mail"></v-text-field>
          <v-text-field label="Senha"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn block elevation="2" color="primary">Login</v-btn>
        </v-card-actions>

        <v-expand-transition>
          <v-card
            v-if="reveal"
            class="transition-fast-in-fast-out v-card--reveal"
            style="height: 100%"
          >
            <v-card-text class="pb-0">
              <p class="display-1 text--primary">Origin</p>
              <p>
                late 16th century (as a noun denoting a place where alms were
                distributed): from medieval Latin eleemosynarius, from late
                Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
              </p>
            </v-card-text>
            <v-card-actions class="pt-0">
              <v-btn text color="teal accent-4" @click="reveal = false">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>