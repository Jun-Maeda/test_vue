<script setup>
import {RouterView} from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>


  <v-layout class="rounded rounded-md">
    <v-app-bar scroll-threshold="0">
      <v-app-bar-nav-icon v-on:click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Test Vue</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
    >
      <v-list>
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

    <v-main class="ma-5">
      <RouterView/>
    </v-main>
  </v-layout>


</template>
<script>
export default {
  data: () => ({
    items: [
      {title: 'Home', to: '/', icon: 'mdi-clock'},
      {title: 'About', to: '/about', icon: 'mdi-clock'},
      {title: 'Form', to: '/form', icon: 'mdi-clock'},
      {title: 'Table', to: '/table', icon: 'mdi-clock'},
      {title: 'Table2', to: '/table2', icon: 'mdi-clock'},
    ],
    drawer: false,
  }),
}
</script>
