<template>
    <AdminLayout>
        <div>
            <v-alert type="info" text shaped><strong>Welcome To AptWorld Services</strong></v-alert>
            <v-row justify="center" align="center">
                <v-col cols="12" lg="3">
                    <v-hover>
                        <template v-slot:default="{ hover }">
                            <v-card class="pa-2 rounded-xl" color="white" flat  :elevation="hover ? 12 : 2" to="/admin/customers" link>
                                <v-icon x-large size="24" class="pa-5">mdi-account-box-multiple</v-icon>
                                <span class="font-weight-medium">Customer Management</span> 
                            </v-card>
                        </template>
                    </v-hover>
                </v-col>
                <v-col cols="12" lg="3">
                     <v-hover>
                        <v-card class="pa-2 rounded-xl" color="white" flat elevation="1" link>
                            <v-icon x-large size="24" class="pa-5">mdi-home-plus</v-icon>
                            <span>Investment Management</span> 
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col cols="12" lg="3">
                     <v-hover>
                        <v-card class="pa-2 rounded-xl" color="white" flat elevation="1" link>
                            <v-icon x-large size="24" class="pa-5">mdi-home-minus</v-icon>
                            <span>Loans Management</span> 
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col cols="12" lg="3">
                     <v-hover>
                        <v-card class="pa-2 rounded-xl" color="white" flat elevation="1" link>
                            <v-icon x-large size="24" class="pa-5">mdi-home-city-outline</v-icon>
                            <span>Asset Management</span> 
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" lg="4">
                    <v-card  height="460" class="rounded-sm" elevation="4">
                        <v-card-title>Message Box</v-card-title>
                        <v-divider></v-divider>
                        <div class="pt-15">
                            <v-form class="ma-5">
                                
                                <v-text-field outlined label="Enter Phone No."></v-text-field>

                                <v-textarea outlined label="Message"></v-textarea>

                                <v-row justify="center" align="center">
                                    <v-btn class="mb-5" outlined rounded color="primary">Send Message</v-btn>
                                </v-row>
                                
                            </v-form>
                        </div>
                    </v-card>
                </v-col>

                <v-col cols="12" lg="4">
                    <v-card height="460" class="rounded-sm" elevation="4">
                        <v-app-bar flat color="white">
                                <v-toolbar-title>Reminders</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon><v-icon>mdi-refresh</v-icon></v-btn>
                        </v-app-bar>
                        <v-divider></v-divider>
                        <div>
                            <v-list>
                                <v-list-item >
                                    <v-list-item-avatar tile color="primary">
                                            <v-icon dark>mdi-alarm</v-icon>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title>Team Meeting</v-list-item-title>
                                        <v-list-item-subtitle>07:00am</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item >
                                    <v-list-item-avatar tile color="primary">
                                            <v-icon dark>mdi-alarm</v-icon>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title>Collection Due</v-list-item-title>
                                        <v-list-item-subtitle>07:00am</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item >
                                    <v-list-item-avatar tile color="primary">
                                            <v-icon dark>mdi-alarm</v-icon>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title>Flight to Accra</v-list-item-title>
                                        <v-list-item-subtitle>07:00am</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="12" lg="4">
                    <v-card height="460" class="rounded-sm" elevation="4">
                        <v-app-bar flat color="white">
                            <v-toolbar-title>Activity Log</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn icon><v-icon>mdi-refresh</v-icon></v-btn>
                        </v-app-bar>
                        <v-divider></v-divider>                        
                        <v-card-text>
                           <v-timeline align-top dense>
                                <v-timeline-item
                                v-for="message in messages"
                                :key="message.time"
                                :color="message.color"
                                small
                                >
                                <div>
                                    <div class="font-weight-normal">
                                    <strong>{{ message.from }}</strong> @{{ message.time }}
                                    </div>
                                    <div>{{ message.message }}</div>
                                </div>
                                </v-timeline-item>
                            </v-timeline>
        </v-card-text>
      </v-card>
                </v-col>
            </v-row>
        </div>
    </AdminLayout>
</template>

<script>
import AdminLayout from '@/views/AdminLayout.vue'
export default {
    name : 'AdminHome',
    data: () => ({
      messages: [
        {
          from: 'You',
          message: `Sure, I'll see you later.`,
          time: '10:42am',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'John Doe',
          message: 'Yeah, sure. Does 1:00pm work?',
          time: '10:37am',
          color: 'green',
        },
        {
          from: 'You',
          message: 'Did you still want to grab lunch today?',
          time: '9:47am',
          color: 'deep-purple lighten-1',
        },
      ],
    }),

    components:{
        AdminLayout
    }
    
}
</script>