<template>
  <div>
<!--    <v-btn prepend-icon="$vuetify">-->
<!--      Button-->
<!--    </v-btn>-->

    <v-select
        v-model="value"
        :items="items"
        chips
        label="Chips"
        multiple
    ></v-select>
  </div>
</template>
<script>
  export default {
    data: () => ({
      items: ['foo', 'bar', 'fizz', 'buzz'],
      value: ['foo', 'bar', 'fizz', 'buzz'],
    }),
  }
</script>

