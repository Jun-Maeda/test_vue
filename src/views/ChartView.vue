<template>
  <v-container>
    <h2>チャート</h2>
<apexchart
  type="pie"
  height="400"
  :options="chart.options"
  :series="chart.series"
></apexchart>

  </v-container>
</template>
<script>

import VueApexCharts from 'vue3-apexcharts'
export default {
  components: {
    apexchart: VueApexCharts,
  },

  data: () => ({
    chart: {
      options: {
        labels: ['20代', '30代', '40代', '50代'],
        title: {
          text: 'あなたの年齢を教えてください。',
          align: 'center',
        },
      },
      series: [20, 20, 50, 10],
    },
  }),
}
</script>