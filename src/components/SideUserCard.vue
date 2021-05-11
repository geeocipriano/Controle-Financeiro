<template>
    <v-card
    height='50vh'
    color='amber darken-2'
    >
    <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
    </v-list-item>
    <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
        >
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
    </v-card>
</template>
<script>
export default {
    name: 'SideUserCard',
    data () {
        return {
            items: [
                { title: 'Home', icon: 'mdi-home-city' },
                { title: 'My Account', icon: 'mdi-account' },
                { title: 'Users', icon: 'mdi-account-group-outline' },
                { title: 'Sair', icon: 'mdi-account-group-outline' }
            ]
        }
    }
}
</script>