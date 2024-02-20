<script setup>
let props = defineProps({
  headers: Array,
  items: Array
})

let search = defineModel('search')

</script>

<template>
 <v-card
      flat
      title="Nutrition"
  >
    <template v-slot:text>
      <v-text-field
          v-model="search"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          single-line
          variant="outlined"
          hide-details
      ></v-text-field>
    </template>

    <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
    ></v-data-table>
  </v-card>



</template>
