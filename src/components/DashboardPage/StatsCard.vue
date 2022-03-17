<template>
    <v-hover>
        <template v-slot:default="{ hover }">
            <v-card class="rounded-sm" :color="card_color" flat  :elevation="hover ? 12 : 2" >
                                <v-list :color="card_color" two-line>
                                    <v-list-item>
                                        <v-list-item-avatar size="40" tile><v-icon size="45" color="white">{{icon}}</v-icon></v-list-item-avatar>
                                        <v-list-item-content class="text-right">
                                            <v-list-item-title class="white--text text-uppercase">{{ title }}</v-list-item-title>

                                            <v-list-item-subtitle>
                                                <span class="text-h5 font-weight-bold">
                                                    <slot>0.00</slot>
                                                </span>
                                            </v-list-item-subtitle>
                                                
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
            </v-card>
        </template>
    </v-hover>
</template>

<script>
export default {

    data () {
        return {
            hover : null,
            newColor : this.card_color
        }
    },

  props: {
    title: {type: String, default: ''},
    icon: {type: String, default: 'mdi-chart-bar'},
    card_color: {type: String, default: 'light-blue'},
    }
}
</script>