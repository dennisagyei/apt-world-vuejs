<template>
   <v-card  class="rounded-sm" elevation="4">
                        <v-app-bar dense flat color="white">
                                <v-toolbar-title>Expenses - Monthly</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon><v-icon>mdi-refresh</v-icon></v-btn>
                        </v-app-bar>
                        <v-divider></v-divider>
                        <div class="ma-5">
                        <apexchart width="100%" type="bar" :options="chartOptions" :series="series"></apexchart>
                        </div>
    </v-card>
     
   
</template>

<script>
export default {

    data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'top-customers'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }]
      }
    },
}
</script>

