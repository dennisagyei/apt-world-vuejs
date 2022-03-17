<template>
    <AdminLayout>
        <div>
            <v-alert type="info" text shaped><strong>Customer Management</strong></v-alert>

                <v-card class="mx-auto" elevation="4" tile >
                    <v-app-bar flat color="white">
                         <v-text-field outlined dense v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details ></v-text-field>
                        <v-spacer></v-spacer>
                        <v-btn color="success" outlined to="/admin/customers/add"><v-icon>mdi-plus</v-icon>Add New</v-btn>
                        <v-btn color="info" outlined to="/admin/customers/edit" ><v-icon>mdi-download</v-icon>Export</v-btn>
                    </v-app-bar>
                    <v-divider></v-divider>
                    <div class="ma-5">
                        <v-data-table fixed-header :headers="tbl_headers" :items="tbl_data" :search="search" item-key="">

                            <template v-slot:item.iron="{ item }">
                                <v-chip small class="info">{{item.iron}}</v-chip>
                            </template>
                            <template v-slot:item.actions="{ item }">
                                <v-icon small class="mr-2" @click="editTutorial(item.id)">mdi-pencil</v-icon>
                                <v-icon small @click="deleteTutorial(item.id)">mdi-delete</v-icon>
                            </template>
                        </v-data-table>
                    </div>
                </v-card>


        </div>
    </AdminLayout>
</template>

<script>
import AdminLayout from '@/views/AdminLayout.vue'
import axios from "axios"

export default {
    data () {
        return {

            search :"", info: null, loading: true, errored: false,

            tbl_headers : [
                {
                    text: 'Customer Name',
                    align: 'start',  filterable : true,
                    sortable: false,
                    value: 'name',class : "grey text-overline"
                },
                { text: 'Phone', value: 'calories',class : "grey text-overline" },
                { text: 'Email', value: 'fat' ,class : "grey text-overline"},
                { text: 'Total Loans', value: 'carbs' ,class : "grey text-overline"},
                { text: 'Total Investments', value: 'protein' ,class : "grey text-overline"},
                { text: 'Status', value: 'iron' ,class : "grey text-overline"},
                { text: "Actions", value: "actions", sortable: false ,class : "grey text-overline"},
            ],
        
        tbl_data : [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
            
             items: [
                        {
                        text: 'Dashboard',
                        disabled: false,
                        href: 'breadcrumbs_dashboard',
                        },
                        {
                        text: 'Link 1',
                        disabled: false,
                        href: 'breadcrumbs_link_1',
                        },
                        {
                        text: 'Link 2',
                        disabled: true,
                        href: 'breadcrumbs_link_2',
                        },
                    ],
        }
    },

    methods:{

        fetchData() {
            this.loading=true;

            axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => {
                this.info = response.data.bpi
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
        }

    },
    mounted () {
        this.fetchData()
    },
      components:{
        AdminLayout
    }
    
}
</script>