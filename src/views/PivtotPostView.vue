<template>
  <v-row>
    <v-col
        cols="12"
        md="7"
    >
      <v-text-field
          v-model="unit_name"
          :counter="10"
          label="グループ名"
          required
          hide-details
      ></v-text-field>
    </v-col>
    <v-col
        cols="12"
        md="7"
    >
      <v-autocomplete
          :items="admins"
          label="選択してください"
          required
          v-model="admin_user"
          :item-props="adminProps"
      ></v-autocomplete>
    </v-col>
    <v-col
        cols="12"
        md="7"
    >
      <v-switch
          color="primary"
          v-model="share_flg"
          label="グループ内での認識結果共有"
      ></v-switch>
    </v-col>
    <v-col
        cols="12"
        md="7"
    >
      <v-textarea
          label="メモ"
          no-resize
          rows="3"
          v-model="memo"
      ></v-textarea>
    </v-col>
    <v-col cols="12">
      <v-btn @click="postUnit">登録</v-btn>
    </v-col>
  </v-row>
</template>

<script>
const new_unit_url = 'http://127.0.0.1:8000/api/v1/user/new_unit/'
export default {
  data: () => ({
    unit_name: '',
    admin_user: '',
    admins: [],
    services: [],
    memo: '',
    share_flg: false
  }),
  methods: {
    adminProps(item) {
      if (item === "") {
        return ""
      } else {
        return {
          title: item.id + ' ' + item.name,
          subtitle: item.id,
          value: item.id
        }
      }
    },
    postUnit() {
      this.axios
          .post(new_unit_url, {
            name: this.unit_name,
            admin: this.admin_user,
            share_flg: this.share_flg,
            memo: this.memo
          })
          .then((res) => {
            console.log(res);
            this.posts = res.data.posts;
          })
          .catch((err) => {
            console.log(err);
          });
    }
  },
  mounted() {
    this.axios.get(new_unit_url).then((res) => {
      this.admins = res.data['admin_list'];
      this.services = res.data['service'];
    })
  },
}

</script>
