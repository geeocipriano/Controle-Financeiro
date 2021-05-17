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
        <v-col
        cols="6"
        >
          <v-card
          color="red"
          dark>
            <v-card-title class="d-flex justify-center">Estoque Grupo</v-card-title>
            <v-list two-line>
              <v-list-item-group
              >
                <template v-for="(item, index) in items">
                  <v-list-item :key="item.title">
                    <template >
                      <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>

                        <v-list-item-subtitle
                          class="text--primary"
                        ></v-list-item-subtitle>

                        <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </v-list-item>

                  <v-divider
                    v-if="index < items.length - 1"
                    :key="index"
                  ></v-divider>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
        <v-col
        cols="6"
        >
          <v-card
          color="purple"
          dark>
            <v-card-title class="d-flex justify-center">Estoque Grupo</v-card-title>
            <v-list two-line>
              <v-list-item-group
              >
                <template v-for="(item, index) in items">
                  <v-list-item :key="item.title">
                    <template >
                      <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>

                        <v-list-item-subtitle
                          class="text--primary"
                        ></v-list-item-subtitle>

                        <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </v-list-item>

                  <v-divider
                    v-if="index < items.length - 1"
                    :key="index"
                  ></v-divider>
                </template>
              </v-list-item-group>
            </v-list>
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
      ],
      items: [
        {
          subtitle: 'Esportiva',
          title: 'Camisa',
        },
        {
          subtitle: 'Corrida',
          title: 'Tenis',
        },
        {
          subtitle: 'Inverno',
          title: 'Jaqueta',
        },
        {
          subtitle: 'Verão',
          title: 'Sandalia',
        },
        {
          subtitle: 'Jeans',
          title: 'Calça',
        },
      ],
    }),
  }
</script>