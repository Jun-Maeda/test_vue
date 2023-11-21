<script setup>
import {RouterView} from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

</script>

<template>


  <v-layout class="rounded rounded-md">
    <v-app-bar scroll-threshold="0">
      <v-app-bar-nav-icon v-on:click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Test Vue</v-toolbar-title>
      <div v-show="login">
        <v-btn icon="mdi-account-cog-outline" size="x-large"/>
      </div>
      <div v-show="login">
        <!--        <v-btn prepend-icon="mdi-logout" variant="outlined">-->
        <!--          ログアウト-->
        <!--        </v-btn>-->
        <v-btn icon="mdi-logout" size="x-large"/>
      </div>
      <div v-show="!login">
        <!--        <v-btn prepend-icon="mdi-login" variant="outlined">-->
        <!--          ログイン-->
        <!--        </v-btn>-->
        <v-btn icon="mdi-login" size="x-large"/>
      </div>
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

    <v-main>
      <v-container>
        <RouterView/>
      </v-container>
    </v-main>
    <v-footer class="bg-grey-lighten-1" app>
      <v-row justify="center" no-gutters>
        <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            variant="text"
            class="mx-2"
            rounded="xl"
        >
          {{ link }}
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>

  </v-layout>


</template>
<script>
export default {
  data: () => ({
    login: true,
    items: [
      {title: 'Home', to: '/', icon: 'mdi-home'},
      {title: 'About', to: '/about', icon: 'mdi-clock'},
      {title: 'Form', to: '/form', icon: 'mdi-map-marker'},
      {title: 'Table', to: '/table', icon: 'mdi-phone-outgoing'},
      {title: 'Table2', to: '/table2', icon: 'mdi-alert-circle-outline'},
      {title: 'tab', to: '/tab', icon: 'mdi-earth'},
      {title: 'ZipCode', to: '/zipcode', icon: 'mdi-spider-thread'},
      {title: 'HarryPotter', to: '/harry', icon: 'mdi-magic-staff'},
    ],
    drawer: false,
    links: [
      'Home',
      'About Us',
      'Contact Us',
    ],
  }),
}
</script>
