<script setup>
import {ref} from "vue";
import ListGroup from "@/components/ListGroup.vue";

let items = ref([
  {title: 'About', to: '/about', icon: 'mdi-clock'},
  {title: 'Form', to: '/form', icon: 'mdi-map-marker'},
  {title: 'FormNew', to: '/form_new', icon: 'mdi-map-marker'},
  {title: 'Form Send', to: '/form_send', icon: 'mdi-map-marker'},
  {title: 'Form Validate', to: '/form_validate', icon: 'mdi-map-marker'},
  {title: 'tab', to: '/tab', icon: 'mdi-earth'},
  {title: 'ZipCode', to: '/zipcode', icon: 'mdi-spider-thread'},
  {title: 'HarryPotter', to: '/harry', icon: 'mdi-magic-staff'},
  {title: '入門', to: '/nyumon', icon: 'mdi-arrow-left-bold'},
  {title: 'Pinia', to: '/pinia', icon: 'mdi-image-filter-drama'},
  {title: 'Pinia2', to: '/pinia2', icon: 'mdi-image-filter-drama'},
  {title: 'Chart', to: '/chart', icon: 'mdi-image-filter-drama'},
])
let tables = ref([
  {title: 'Table', to: '/table', icon: 'mdi-phone-outgoing'},
  {title: 'Table2', to: '/table2', icon: 'mdi-alert-circle-outline'},
  {title: 'NewTable', to: '/table_new', icon: 'mdi-alert-circle-outline'},
])

let pivtots = ref([
  {title: 'PiVToT Get', to: '/pivtot_get', icon: 'mdi-image-filter-hdr'},
  {title: 'PiVToT Post', to: '/pivtot_post', icon: 'mdi-thumb-up-outline'},
])

let home = ref('HOME')


// eslint-disable-next-line no-undef
let drawer = defineModel('drawer')

</script>

<template>

  <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
  >

    <v-list>
      <v-list-item
          :value="home"
          color="primary"
          rounded="xl"
          to="/"
          prepend-icon="mdi-home"
          :title="home"
          class="mt-1"
      ></v-list-item>

      <ListGroup title="テーブル" :items="tables"/>

      <ListGroup title="PiVToT" :items="pivtots"/>

      <v-list-item-group>
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
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>



