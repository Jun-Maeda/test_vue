<script setup>
let props = defineProps({
  items: Array,
  title: String
})

</script>

<template>
  <v-list-group :value="title">

    <template v-slot:activator="{ props }">
      <v-list-item
          v-bind="props"
          :title="title"
          prepend-icon="mdi-phone-outgoing"
      >
      </v-list-item>
    </template>

        <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            color="primary"
            rounded="xl"
            :to="item.to"
            :prepend-icon="item.icon"
            :title="item.title"
        >
        </v-list-item>
  </v-list-group>



</template>
