<template>
  <v-container>
    <h2>チャート</h2>
    <apexchart
        type="pie"
        height="400"
        :options="chart.options"
        :series="chart.series"
    ></apexchart>

    <apexchart
        type="bar"
        height="400"
        :options="chart_2.options"
        :series="chart_2.series"
    ></apexchart>
     <QuillEditor theme="snow" />

  </v-container>
</template>
<script>

import VueApexCharts from 'vue3-apexcharts'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
export default {
  components: {
    apexchart: VueApexCharts,
    QuillEditor
  },

  data: () => ({
    chart: {
      options: {
        labels: ['回答', '未回答'],
        title: {
          text: '回答率',
          align: 'center',
        },
      },
      series: [50, 10],
    },
    chart_2: {
      options: {
        plotOptions: {
          bar: {
            horizontal: true, // 横型のグラフにする場合
          },
        },
        title: {
          text: '安否状況',
          align: 'center',
        },
        xaxis: {
          categories: ['安全', '軽傷', '重症', '未回答'],
        },
      },
      series: [
        {
          name: '件数',
          data: [30, 5, 1, 4],
        },
      ],
    },
  }),
}
</script>