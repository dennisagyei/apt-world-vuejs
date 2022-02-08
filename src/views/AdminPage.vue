<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app >
        <v-sheet color="grey lighten-5" height="80" width="100%">
            <v-img width="200" aspect-ratio="16/9" src='logo-big.png'></v-img>
            hello
        </v-sheet>

        <!--  -->
        <v-list color="light-blue darken-2" shaped dense> 
            <v-subheader class="white--text">MENU</v-subheader>

            <v-list-item-group >
                <v-list-item class="white--text">
                    <v-list-item-icon ><v-icon color="white">mdi-home</v-icon></v-list-item-icon>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>
                <v-list-item class="white--text">
                    <v-list-item-icon><v-icon color="white">mdi-chart-areaspline</v-icon></v-list-item-icon>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item>

                <v-list-group color="white" no-action prepend-icon="mdi-account-box-multiple">
                    <template v-slot:activator>
                        <v-list-item-title class="white--text">Customers</v-list-item-title>
                    </template>

                    <v-list-item link>
                        <v-list-item-title class="white--text">View Customer</v-list-item-title>
                        <v-list-item-icon><v-icon color="white" small>mdi-circle-small</v-icon></v-list-item-icon>
                    </v-list-item>

                    <v-list-item link>
                        <v-list-item-title class="white--text">Add New</v-list-item-title>
                        <v-list-item-icon><v-icon color="white" small>mdi-circle-small</v-icon></v-list-item-icon>
                    </v-list-item>
                </v-list-group>

                <v-list-group color="white" no-action prepend-icon="mdi-home-plus">
                    <template v-slot:activator>
                        <v-list-item-title>Investments</v-list-item-title>
                    </template>

                    <v-list-item link>
                        <v-list-item-title>View Investments Acc</v-list-item-title>
                    </v-list-item>

                    <v-list-item link>
                        <v-list-item-title>Add New</v-list-item-title>
                        <v-list-item-icon><v-icon small>mdi-circle-small</v-icon></v-list-item-icon>
                    </v-list-item>
                </v-list-group>

                <v-list-group no-action prepend-icon="mdi-home-minus">
                    <template v-slot:activator>
                        <v-list-item-title>Loans</v-list-item-title>
                    </template>

                    <v-list-item link>
                        <v-list-item-title>View Loans</v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-title>Add New</v-list-item-title>
                        <v-list-item-icon><v-icon small>mdi-circle-small</v-icon></v-list-item-icon>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-title>Loan Repayments</v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-title>Loan Calculator</v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-title>Guarantors</v-list-item-title>
                    </v-list-item>
                </v-list-group>

                <v-list-group no-action prepend-icon="mdi-cash-multiple">
                    <template v-slot:activator>
                        <v-list-item-title>Expenses</v-list-item-title>
                    </template>

                    <v-list-item link>
                        <v-list-item-title>View Expenses</v-list-item-title>
                    </v-list-item>

                    <v-list-item link>
                        <v-list-item-title>Add Expenses</v-list-item-title>
                        <v-list-item-icon><v-icon small>mdi-circle-small</v-icon></v-list-item-icon>
                    </v-list-item>
                </v-list-group>
                
                <v-list-group no-action prepend-icon="mdi-cash-plus">
                    <template v-slot:activator>
                        <v-list-item-title>Other Income</v-list-item-title>
                    </template>

                    <v-list-item link>
                        <v-list-item-title>View Income</v-list-item-title>
                    </v-list-item>

                    <v-list-item link>
                        <v-list-item-title>Add Income</v-list-item-title>
                        <v-list-item-icon><v-icon small>mdi-circle-small</v-icon></v-list-item-icon>
                    </v-list-item>
                </v-list-group>

                <v-list-group no-action prepend-icon="mdi-home-city-outline">
                    <template v-slot:activator>
                        <v-list-item-title>Asset Management</v-list-item-title>
                    </template>

                    <v-list-item link>
                        <v-list-item-title>View Assets</v-list-item-title>
                    </v-list-item>

                    <v-list-item link>
                        <v-list-item-title>Add New</v-list-item-title>
                        <v-list-item-icon><v-icon small>mdi-circle-small</v-icon></v-list-item-icon>
                    </v-list-item>
                </v-list-group>
                

                <v-list-group no-action prepend-icon="mdi-file-chart-outline">
                    <template v-slot:activator>
                        <v-list-item-title>Reports</v-list-item-title>
                    </template>

                    <v-list-item link>
                        <v-list-item-title>Customer List</v-list-item-title>
                    </v-list-item>

                    <v-list-item link>
                        <v-list-item-title>Investment List</v-list-item-title>
                        <v-list-item-icon><v-icon small>mdi-circle-small</v-icon></v-list-item-icon>
                    </v-list-item>

                      <v-list-item link>
                        <v-list-item-title>Loan List</v-list-item-title>
                        <v-list-item-icon><v-icon small>mdi-circle-small</v-icon></v-list-item-icon>
                    </v-list-item>
                </v-list-group>

            </v-list-item-group>

            <v-subheader>TOOLS</v-subheader>

            <v-list-item-group color="primary">
                <v-list-item>
                    <v-list-item-icon><v-icon>mdi-message-text-outline</v-icon></v-list-item-icon>
                    <v-list-item-title>SMS</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon><v-icon>mdi-email-send-outline</v-icon></v-list-item-icon>
                    <v-list-item-title>Email</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon><v-icon>mdi-clipboard-text-clock-outline</v-icon></v-list-item-icon>
                    <v-list-item-title>Calender</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon><v-icon>mdi-home</v-icon></v-list-item-icon>
                    <v-list-item-title>Collateral Register</v-list-item-title>
                </v-list-item>
            </v-list-item-group>

            <v-subheader>SYSTEM ADMIN</v-subheader>

            <v-list-item-group color="primary">
                <v-list-item>
                    <v-list-item-icon><v-icon>mdi-office-building-cog-outline </v-icon></v-list-item-icon>
                    <v-list-item-title>Company Profile</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon><v-icon>mdi-cog-outline</v-icon></v-list-item-icon>
                    <v-list-item-title>Setup</v-list-item-title>
                </v-list-item>
            </v-list-item-group>

            <v-subheader>MY ACCOUNT</v-subheader>

            <v-list-item-group color="primary">
                <v-list-item>
                    <v-list-item-icon><v-icon>mdi-card-account-details-outline </v-icon></v-list-item-icon>
                    <v-list-item-title>Profile</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon><v-icon>mdi-key-variant</v-icon></v-list-item-icon>
                    <v-list-item-title>Change Password</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon><v-icon>mdi-location-exit </v-icon></v-list-item-icon>
                    <v-list-item-title>Logout</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

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

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn large icon v-bind="attrs" v-on="on">
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>

        <v-list>
                <v-list-item link>
                    <v-list-item-icon><v-icon>mdi-card-account-details-outline </v-icon></v-list-item-icon>
                    <v-list-item-title>Profile</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon><v-icon>mdi-key-variant</v-icon></v-list-item-icon>
                    <v-list-item-title>Change Password</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item link>
                    <v-list-item-icon><v-icon>mdi-location-exit </v-icon></v-list-item-icon>
                    <v-list-item-title>Logout</v-list-item-title>
                </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>