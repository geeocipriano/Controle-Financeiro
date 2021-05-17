<template>
  <v-card
    class="mx-auto"
    width="100vw"
    height="90vh"
  >
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card
          :color="card.color"
          class="px-6"
          >
              <v-card-title v-text="card.title" dark class="mb-4 d-flex justify-center"></v-card-title>
              <v-card-subtitle dark class="d-flex justify-center font-weight-bold">
                <h1 v-text="card.num"></h1>
              </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Novas Vendas', flex: 4, color:'#beee62', num: 1250},      
        { title: 'Aguardando Confirmação', flex: 4, color:'#ffd23f', num: 500},
        { title: 'Vendas Concluidas', flex: 4, color:'#119da4', num: 2150 },
        { title: 'Listagem de Produtos', flex: 6 },
        { title: 'Controle de Caixa', flex: 6 },
        { title: 'Ficha de movimentação', flex: 6 },
      ],
    }),
  }
</script>