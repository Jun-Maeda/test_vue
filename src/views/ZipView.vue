<script setup>

</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-text-field
            label="郵便番号"
            v-model="search_zipcode"
            prefix="〒"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-btn @click="searchAddressInfo">住所自動入力</v-btn>
      </v-col>
    </v-row>
    <v-row>
<!--      <p>都道府県：{{ addressData['address1'] }}</p>-->
<!--      <p>住所1：{{ addressData['address2'] }}</p>-->
<!--      <p>住所2：{{ addressData['address3'] }}</p>-->
      <v-col cols="6" >
        <v-text-field
            label="郵便番号"
            v-model="zipcode"
            prefix="〒"
        ></v-text-field>
        <v-text-field
            label="都道府県"
            v-model="todofuken"
        ></v-text-field>
        <v-text-field
            label="住所1"
            v-model="address1"
        ></v-text-field>
        <v-text-field
            label="住所2"
            v-model="address2"
        ></v-text-field>
        <p>prefコード：{{ prefcode }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// const axios = require('axios');
let url = 'http://zipcloud.ibsnet.co.jp/api/search?zipcode=';
export default {
  data: () => ({
    search_zipcode:'',
    zipcode: '',
    addressData: {},
    todofuken: '',
    address1: '',
    address2: '',
    prefcode: '',
  }),
  methods: {
    searchAddressInfo() {
      this.axios.get(url + this.search_zipcode).then((res) => {
        this.addressData = res.data.results[0];
        this.zipcode = res.data.results[0]['zipcode']
        this.todofuken = res.data.results[0]['address1']
        this.address1 = res.data.results[0]['address2']
        this.address2 = res.data.results[0]['address3']
        this.prefcode = res.data.results[0]['prefcode']
      })
    }
  }
}
</script>