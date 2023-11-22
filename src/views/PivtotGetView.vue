<script setup>

</script>

<template>
  <v-text-field
      v-model="search"
      label="検索"
      prepend-inner-icon="mdi-magnify"
      single-line
      variant="outlined"
      hide-details
      class="v-col-sm-10 v-col-md-4 pa-0"
  ></v-text-field>

  <v-data-table
      :headers="headers"
      :items="units"
      :search="search"
  >
    <!--    管理者名列の表示をカスタム-->
    <template v-slot:[`item.admin_screenname`]="props">
      【{{ props.item.admin_username }}】
      {{ props.item.admin_screenname }}
    </template>

  </v-data-table>
  <v-card
      title="グループ詳細"
  >
    <template v-slot:text>
      <v-table class="mt-3">
        <tbody>
        <tr>
          <td>ID</td>
          <td>{{ unit_details['id'] }}</td>
        </tr>
        <tr>
          <td>グループ名</td>
          <td>{{ unit_details['name'] }}</td>
        </tr>
        <tr>
          <td>管理者</td>
          <td>{{ unit_details['admin_id'] }}:{{ unit_details['admin_username'] }}({{
              unit_details['admin_screenname']
            }})
          </td>
        </tr>
        <tr>
          <td>共有フラグ</td>
          <td>{{ unit_details['share_flg'] }}</td>
        </tr>
        <tr>
          <td>メモ</td>
          <td>{{ unit_details['memo'] }}</td>
        </tr>
        <tr>
          <td>契約サービス</td>
          <td>
            <ul>
              <li v-for="(item, key) in unit_details['service']" v-bind:key='key'>
                {{ item['name'] }}
              </li>
            </ul>
          </td>
        </tr>
        </tbody>
      </v-table>
    </template>
  </v-card>

</template>


<script>
const url = "http://127.0.0.1:8000/api/v1/user/units/1"
const units_url = "http://127.0.0.1:8000/api/v1/user/units/"

export default {
  data: () => ({
    search: '',
    headers: [
      {key: 'id', align: 'end', title: 'ID'},
      {key: 'name', align: 'start', title: 'グループ名'},
      {key: 'admin_screenname', align: 'start', title: '管理者名'},
      {key: 'share_flg', align: 'start', title: '共有フラグ'},
    ],
    units: [],
    unit_details: [],
  }),
  mounted() {
    this.axios.get(url).then((res) => {
      this.unit_details = res.data;
    }).catch((err) => {
      alert('このデータはありません')
      console.log(err)
    })
    this.axios.get(units_url).then((res) => {
      this.units = res.data;
    }).catch((err) => {
      alert('取得できませんでした。')
      console.log(err)
    })
  }
}
</script>
