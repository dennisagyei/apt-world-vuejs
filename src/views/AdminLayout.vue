<template>
  <v-app id="inspire">

      <!-- Vertical Sidebar Menu -->
      <VerticalNavMenu />

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn large icon color="indigo" v-bind="attrs" v-on="on">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>

        <v-list>
                <v-list-item link>
                    <v-list-item-icon><v-icon>mdi-account-box-multiple</v-icon></v-list-item-icon>
                    <v-list-item-title>New Customer</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item link>
                    <v-list-item-icon><v-icon>mdi-home-plus</v-icon></v-list-item-icon>
                    <v-list-item-title>New Investment</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item link>
                    <v-list-item-icon><v-icon>mdi-home-minus </v-icon></v-list-item-icon>
                    <v-list-item-title>New Loan</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item link>
                    <v-list-item-icon><v-icon>mdi-cash-multiple</v-icon></v-list-item-icon>
                    <v-list-item-title>New Expense</v-list-item-title>
                </v-list-item>
                
        </v-list>
      </v-menu>

       <!-- User Menu -->
       <AppBarUserMenu />

    </v-app-bar>

    <section id="content">
      <v-container fluid  ><slot>Put Content Here</slot></v-container>
    </section>
  </v-app>
</template>

<style scoped>
#content {
  background-color: #F1F5F9;
  height : 100%;
}
</style>

<script>

import AppBarUserMenu from '@/components/AdminPage/AppBarUserMenu.vue'
import VerticalNavMenu from '@/components/AdminPage/VerticalNavMenu.vue'

  export default {
    data: () => ({  }),

    components:{
      AppBarUserMenu,
      VerticalNavMenu
    }

  }
</script>