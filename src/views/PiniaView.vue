

<template>
  <h1>Pinia入門</h1>
  <p>Count:{{ counter.count }}</p>
  <p>Count:{{ counter.doubleCount }}</p>
  <v-row class="mt-2">
    <v-col cols="1">
      <v-btn @click="counter.countUp()">押して！</v-btn>
    </v-col>
    <v-col cols="1">
      <v-btn @click="patch">更新</v-btn>
    </v-col>
    <v-col cols="1">
      <v-btn @click="counter.$reset()">リセット</v-btn>
    </v-col>
  </v-row>
</template>
<script setup>
import {useCounterStore} from '@/stores/counter';

const counter = useCounterStore();


const patch = () => {
  counter.$patch({
    count: 100,
  });
};
</script>