<template>
  <v-app>
    <v-card class="ma-2" color="#26c6da" dark height="85vh">
      <v-card-title class="d-flex justify-center">
        <span class="title font-weight-light">Produtos</span>
      </v-card-title>
      <v-row class="mx-5">
        <v-text-field label="Nome"></v-text-field>
      </v-row>
      <v-row class="mx-5">
        <v-combobox persistent-hint label="Grupo" class="mr-5"></v-combobox>
        <v-combobox persistent-hint label="Marca"></v-combobox>
      </v-row>
      <v-row class="mx-5">
        <v-text-field label="Valor Venda" class="mr-5"></v-text-field>
        <v-text-field label="Valor de Custo"></v-text-field>
      </v-row>
      <v-row class="d-flex mx-5 justify-space-between align-center mt-15">
        <v-btn width="30%">Salvar</v-btn>
        <v-btn width="30%">Limpar</v-btn>
        <v-btn width="30%">Excluir</v-btn>
      </v-row>
    </v-card>
  </v-app>
</template>
<script>
export default {
  name: "prodAdd",
};
</script>