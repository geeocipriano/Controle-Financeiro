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
              <v-card-subtitle dark class="d-flex justify-center font-weight-bold mb-4">
                <h1 v-text="card.num"></h1>
              </v-card-subtitle>
          </v-card>
        </v-col>
        <!-- Inicio Lista de Grupos -->
        <v-col
        cols="6"
        >
          <v-card
          color="red"
          >
            <v-card-title class="d-flex justify-center">Estoque Grupo</v-card-title>
            <v-list two-line>
              <v-list-item-group
              >
                <template v-for="(grupo, index) in grupos">
                  <v-list-item :key="grupo.title">
                    <template >
                      <v-list-item-content>
                        <v-list-item-title v-text="grupo.title"></v-list-item-title>
                      </v-list-item-content>
                      <v-list-content>
                        <v-chip color="red" label>
                          <v-list-item-title v-text="grupo.estoque"></v-list-item-title>
                        </v-chip>
                      </v-list-content>
                    </template>
                  </v-list-item>
                  <v-divider
                    v-if="index < grupo.length - 1"
                    :key="index"
                  ></v-divider>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
        <!-- Fim da Lista de Grupos -->
        <!-- Inicio da Lista de Marcas -->
        <v-col
        cols="6"
        >
          <v-card
          color="purple"
          >
            <v-card-title class="d-flex justify-center">Estoque Marcas</v-card-title>
            <v-list two-line>
              <v-list-item-group>
                <template v-for="(marca, index) in marcas">
                  <v-list-item :key="marca.title">
                    <template>
                      <v-list-item-content>
                        <v-list-item-title v-text="marca.title"></v-list-item-title>
                      </v-list-item-content>
                      <v-list-content>
                        <v-chip color="purple" label>
                          <v-list-item-title v-text="marca.estoque"></v-list-item-title>
                        </v-chip>
                      </v-list-content>
                    </template>
                  </v-list-item>
                  <v-divider
                    v-if="index < marca.length - 1"
                    :key="index"
                  ></v-divider>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
        <!-- Fim da Lista de Marcas -->
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
      ],
      grupos: [
        {
          estoque: '5',
          title: 'Camisa',
        },
        {
          estoque: '15',
          title: 'Tenis',
        },
        {
          estoque: '10',
          title: 'Jaqueta',
        },
        {
          estoque: '20',
          title: 'Sandalia',
        },
        {
          estoque: '25',
          title: 'Calça',
        },
      ],
      marcas: [
        {
          estoque: 13,
          title: 'Camisa',
        },
        {
          estoque: 11,
          title: 'Tenis',
        },
        {
          estoque: 15,
          title: 'Jaqueta',
        },
        {
          estoque: 20,
          title: 'Sandalia',
        },
        {
          estoque: 25,
          title: 'Calça',
        },
      ],
    }),
  }
</script>