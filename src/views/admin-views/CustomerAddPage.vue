<template>
    <AdminLayout>
        <div>
            <v-alert type="info" text shaped><strong>Add New Customer</strong></v-alert>

                <v-card dense class="mx-auto" elevation="4" tile >
                    <v-app-bar flat color="white">
                        <v-toolbar-title>New Customer Form</v-toolbar-title>
                         <v-spacer></v-spacer>
                    </v-app-bar>
                    <v-divider></v-divider>
                    <div class="ma-5">
                        <v-form>
                            <v-row>
                                <v-col>
                                    <v-text-field dense label="Customer Name" placeholder="John Doe" outlined required></v-text-field>
                                </v-col>
                                
                            </v-row>
                            <v-row>
                                <v-col cols="12" lg="6">
                                    <v-text-field dense label="Unique ID" outlined></v-text-field>

                                    <v-menu
                                        v-model="menu2"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field v-model="date"
                                                label="Date of Birth"
                                                append-icon="mdi-calendar"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on" outlined dense
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                                    </v-menu>

                                    <v-select dense label="Customer Type" :items="customer_type_items" outlined></v-select>

                                </v-col>

                                <v-col cols="12" lg="6">
                                    <v-select dense label="ID Type" :items="id_type_items" outlined></v-select>

                                    <v-select dense label="Gender" :items="gender_items" outlined></v-select>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" lg="6">
                                    <v-text-field dense label="Phone" outlined ></v-text-field>
                                </v-col>
                                <v-col cols="12" lg="6">
                                      <v-text-field dense label="Other Phone" outlined ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" lg="6">
                                    <v-text-field dense label="Email" outlined ></v-text-field>
                                </v-col>
                                <v-col cols="12" lg="6">
                                    
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" lg="6">
                                    <v-select dense label="Bank" outlined ></v-select>
                                </v-col>
                                <v-col cols="12" lg="6">
                                    <v-text-field dense label="Branch" outlined ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field dense label="Account No" outlined ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" lg="6">
                                    <v-select dense label="Working Status" outlined ></v-select>
                                </v-col>
                                <v-col cols="12" lg="6">
                                    <v-text-field dense label="Credit Rating" outlined ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field dense label="Next of Kin" placeholder="Name of Next of Kin" outlined ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" lg="6">
                                    <v-textarea dense label="Address" placeholder="Type your Address here" outlined></v-textarea>
                                </v-col>
                                <v-col cols="12" lg="6">
                                     <v-textarea dense label="Remarks" placeholder="Type your remarks here" outlined ></v-textarea>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field dense label="Loan Officer" outlined ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row class="pt-5" >
                                <v-col offset-lg="9" >
                                    <v-btn color="primary" outlined rounded >Save</v-btn>
                                    <v-btn outlined rounded>Cancel</v-btn>
                                </v-col>
                            </v-row>
                            

                        </v-form>
                    </div>
                </v-card>
        </div>
    </AdminLayout>
</template>

<script>
import AdminLayout from '@/views/AdminLayout.vue'

export default {
    data () {
        return {
            id_type_items: ['System Generated', 'Voter ID', 'Driver License', 'National ID','National Health ID', 'Other'],
            gender_items: ['Male', 'Female'],
            customer_type_items : ['Individual','Corporate']
        }
    },
      components:{
        AdminLayout
    }
    
}
</script>