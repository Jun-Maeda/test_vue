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
    <div>
      <quill-editor
          v-model:value="state.content"
          :options="state.editorOption"
          :disabled="state.disabled"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
          @change="onEditorChange($event)"
      />
    </div>
    <div v-html="state.content"></div>

  </v-container>
</template>
<script>

import VueApexCharts from 'vue3-apexcharts'
import {QuillEditor} from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { reactive } from 'vue'

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
    content: "test"
  }),
  setup() {
    const state = reactive({
      content: '<p>2333</p>',
      _content: '',
      editorOption: {
        placeholder: 'core',
        modules: {
          // toolbars: [
          // custom toolbars options
          // will override the default configuration
          // ],
          // other moudle options here
          // otherMoudle: {}
        },
        // more options
      },
      disabled: false
    })

    const onEditorBlur = (quill) => {
      console.log('editor blur!', quill)
    }
    const onEditorFocus = (quill) => {
      console.log('editor focus!', quill)
    }
    const onEditorReady = (quill) => {
      console.log('editor ready!', quill)
    }
    const onEditorChange = ({quill, html, text}) => {
      console.log('editor change!', quill, html, text)
      state._content = html
    }

    setTimeout(() => {
      state.disabled = true
    }, 2000)

    return {state, onEditorBlur, onEditorFocus, onEditorReady, onEditorChange}
  }
}
</script>