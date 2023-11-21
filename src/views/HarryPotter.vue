<template>
  <v-card
      flat
      title="ハリーポッターキャラ一覧"
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
        :items="characters"
        :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
const url = "https://hp-api.onrender.com/api/characters"
export default {
  data: () => ({
    search: '',
    headers: [
      {
        align: 'start',
        key: 'id',
        title: 'ID',
      },
      {key: 'name', align: 'end', title: '名前'},
      {key: 'gender', align: 'end', title: '性別'},
      {key: 'house', align: 'end', title: '寮'},
      {key: 'dateOfBirth', align: 'end', title: '誕生日'},
      {key: 'actor', align: 'end', title: '役者名'},
    ],
    characters: [],
  }),
  mounted() {
    this.axios.get(url).then((res) => {
        this.characters = res.data;
      })
}
}
</script>