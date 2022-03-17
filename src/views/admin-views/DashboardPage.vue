<template>
    <AdminLayout>
        <div>
            <v-alert dense type="info" text shaped><strong>Dashboard</strong></v-alert>
            <v-row justify="center" align="center">
                <v-col cols="12" lg="3">
                    <StatsCard card_color="success" icon="mdi-account-group" title='Loan Customers'>3,3876</StatsCard>
                </v-col>

                <v-col cols="12" lg="3">
                    <StatsCard card_color="info" icon="mdi-account-box-multiple" title='TOTAL LOANS'>GHS 24533453</StatsCard>
                </v-col>

                <v-col cols="12" lg="3">
                    <StatsCard card_color="warning" icon="mdi-account-box-multiple" title='TOTAL COLLECTIONS'>GHS 24533453</StatsCard>
                </v-col>

                <v-col cols="12" lg="3">
                    <StatsCard card_color="error" icon="mdi-account-box-multiple" title='TOTAL OUTSTANDING'>GHS 24533453</StatsCard>
                </v-col>
            </v-row>

            <v-row justify="center" align="center">
                <v-col cols="12" lg="3">
                    <StatsCard  card_color="success" icon="mdi-account-supervisor" title='INVESTORS'>GHS 24533453</StatsCard>
                </v-col>

                <v-col cols="12" lg="3">
                    <StatsCard  card_color="info" title='INVESTMENTS VALUE'>GHS 1213</StatsCard>
                </v-col>
                <v-col cols="12" lg="3">
                    <StatsCard  card_color="warning" title='TOTAL DEPOSITS'>GHS 1213</StatsCard>
                </v-col>
                <v-col cols="12" lg="3">
                    <StatsCard  card_color="error" title='TOTAL WITHDRAWALS'>GHS 1213</StatsCard>
                </v-col>
            </v-row>

            <v-row justify="center" align="center">
                <v-col cols="12" lg="6">

                    <v-card height="460" class="rounded-sm" elevation="4">
                        <v-app-bar dense flat color="white">
                                <v-toolbar-title>Top Customer Loans</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon><v-icon>mdi-refresh</v-icon></v-btn>
                        </v-app-bar>
                        <v-divider></v-divider>
                        <TopCustomersChart/>
                    </v-card>

                </v-col>

                <v-col cols="12" lg="6">
                    <v-card height="460" class="rounded-sm" elevation="4">
                        <v-app-bar dense flat color="white">
                                <v-toolbar-title>Active Male / Female Borrowers</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon><v-icon>mdi-refresh</v-icon></v-btn>
                        </v-app-bar>
                        <v-divider></v-divider>
                        <ActiveBorrowersChart/>
                    </v-card>
                </v-col>
            </v-row>

            <v-row justify="center" align="center">
                <v-col cols="12" lg="6">
                    <LoansReleasedChart/>
                </v-col>
                <v-col cols="12" lg="6">
                    <LoansCollectionChart/>
                </v-col>

            </v-row>

             <v-row justify="center" align="center">
                <v-col cols="12" lg="6">
                    <IncomesChart/>
                </v-col>
                <v-col cols="12" lg="6">
                    <ExpensesChart/>
                </v-col>
            </v-row>

             <v-row justify="center" align="center">
                 <v-col cols="12" lg="12">
                      <DueLoansChart/>
                </v-col>
            </v-row>
        </div>
    </AdminLayout>
</template>

<script>
import AdminLayout from '@/views/AdminLayout.vue'
import StatsCard from '@/components/DashboardPage/StatsCard.vue'
import StatisticsCard from '@/components/DashboardPage/StatsCardVertical.vue'
import TopCustomersChart from '@/components/DashboardPage/TopCustomersCard.vue'
import ActiveBorrowersChart from '@/components/DashboardPage/ActiveBorrowersCard.vue'
import LoansCollectionChart from '@/components/DashboardPage/LoansCollection.vue'
import LoansReleasedChart from '@/components/DashboardPage/LoansReleasedCard.vue'
import IncomesChart from '@/components/DashboardPage/IncomesCard.vue'
import ExpensesChart from '@/components/DashboardPage/ExpensesCard.vue'
import DueLoansChart from '@/components/DashboardPage/DueLoansCard.vue'

export default {
    
      components:{
        AdminLayout,
        StatsCard,StatisticsCard,TopCustomersChart,ActiveBorrowersChart,IncomesChart,ExpensesChart,LoansCollectionChart,
        LoansReleasedChart,DueLoansChart
    }
    
}
</script>