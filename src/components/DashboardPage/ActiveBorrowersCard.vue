<template>
   <div class="ma-5">
     <apexchart width="100%" type="pie" :options="chartOptions" :series="series"></apexchart>
   </div>
</template>

<script>
export default {

    data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'active-borrowers'
          },
          labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
        },
        series: [44, 55, 41, 17],
      }
    },
}
</script>

