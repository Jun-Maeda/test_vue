<script setup>

</script>

<template>
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
              <li v-for="s in unit_details['service']">
                {{ s['name'] }}
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
export default {
  data: () => ({
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
    unit_details: [],
  }),
  mounted() {
    this.axios.get(url).then((res) => {
      this.unit_details = res.data;
    })
  }
}
</script>
