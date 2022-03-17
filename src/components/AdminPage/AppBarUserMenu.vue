<template>
    <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn large icon v-bind="attrs" v-on="on">
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>

        <v-list>
                <v-list-item link>
                    <v-list-item-icon class="me-2"><v-icon size="22">mdi-card-account-details-outline </v-icon></v-list-item-icon>
                    <v-list-item-title>Profile</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon  class="me-2"><v-icon size="22">mdi-key-variant</v-icon></v-list-item-icon>
                    <v-list-item-title>Change Password</v-list-item-title>
                </v-list-item>
                <v-divider class="my-2"></v-divider>
                <v-list-item link>
                    <v-list-item-icon  class="me-2"><v-icon size="22">mdi-location-exit </v-icon></v-list-item-icon>
                    <v-list-item-title>Logout</v-list-item-title>
                </v-list-item>
        </v-list>
      </v-menu>
</template>