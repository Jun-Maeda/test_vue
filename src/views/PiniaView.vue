<template>
  <h1>Pinia入門</h1>
  <!--  <p>Count:{{ counter.count }}</p>-->
  <!--  <p>Count:{{ counter.doubleCount }}</p>-->
  <v-row class="mt-2">
    <p>Count: {{ counter.count }}</p>
    <p>Doubled Count: {{ counter.doubleCount }}</p>
    <p>Hundret Count: {{ counter.hundret }}</p>
    <v-btn @click="counter.increment()">ボタン</v-btn>
    <!--    <v-col cols="1">-->
    <!--      <v-btn @click="patch">更新</v-btn>-->
    <!--    </v-col>-->
    <!--    <v-col cols="1">-->
    <!--      <v-btn @click="counter.$reset()">リセット</v-btn>-->
    <!--    </v-col>-->
  </v-row>
</template>
<script setup>
import {useCounterStore} from '@/stores/counter';

const counter = useCounterStore();

// export default {
//   data: () => ({
//     chart: {
//       options: {
//         labels: ['回答', '未回答'],
//         title: {
//           text: '回答率',
//           align: 'center',
//         },
//       },
//       series: [50, 10],
//     },
//     chart_2: {
//       options: {
//         plotOptions: {
//           bar: {
//             horizontal: true, // 横型のグラフにする場合
//           },
//         },
//         title: {
//           text: '安否状況',
//           align: 'center',
//         },
//         xaxis: {
//           categories: ['安全', '軽傷', '重症', '未回答'],
//         },
//       },
//       series: [
//         {
//           name: '件数',
//           data: [30, 5, 1, 4],
//         },
//       ],
//     },
//     content: "test"
//   }),
//
// }
//

// const patch = () => {
//   counter.$patch({
//     count: 100,
//   });
// };
</script>