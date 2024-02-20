<script setup>
let props = defineProps({
  title: String,
  content: String,
  button_name: String,
})
</script>

<template>
  <v-dialog width="500">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" :text="button_name"></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card :title="title">
        <v-card-text>
          {{ content }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              text="閉じる"
              @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>

</template>

<style scoped>

</style>