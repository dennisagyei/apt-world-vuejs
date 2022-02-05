<template>
<v-app-bar fixed flat dark>
    <v-toolbar dark flat class="text-overline">
        <v-avatar tile>
            <img src="logo.png" alt="AptWorld Logo">
        </v-avatar>
        APTWORLD
        <v-spacer></v-spacer>
        <v-tabs right >
            <v-tab class="text-overline" @click="$vuetify.goTo('#main')">Home</v-tab>
            <v-tab class="text-overline" @click="$vuetify.goTo('#contact')">Contact Us</v-tab>
        </v-tabs>
    </v-toolbar>
</v-app-bar>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>