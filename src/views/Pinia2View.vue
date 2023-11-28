<script setup>
  import { useCounterStore } from '@/stores/counter';
  const counter = useCounterStore();
</script>
<template>
  <h1>Pinia変更</h1>
  <p>Count:{{ counter.count }}</p>
  <p>Count:{{ counter.doubleCount }}</p>

</template>
