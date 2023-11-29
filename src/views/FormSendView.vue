<template>
  <v-container>
    <h2>フォーム送信</h2>
    <v-form class="mt-5" ref="form">
      <v-row>
        <v-text-field
            v-model="title"
            :rules="nameRules"
            label="タイトル"
            required
            max-widgh="300px"
        />
      </v-row>
      <v-row>
        <v-select
            v-model="choice_areas"
            :items="areas"
            label="拠点"
            multiple
            :rules="multiselectRules"
            required
        ></v-select>
      </v-row>
      <v-row>
        <v-textarea
            v-model="discription"
            :rules="nameRules"
            label="本文"
            required
        />
      </v-row>
      <v-row>
        <v-checkbox
          v-model="share_flg"
          label="共有する"
          ></v-checkbox>
      </v-row>
      <v-row class="justify-end">
        <v-btn
            @click="validate"
            color="primary"
        >作成</v-btn>
      </v-row>

    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    nameRules: [
      v => !!v || 'この項目は必須です',
    ],
    multiselectRules: [
      v => v.length > 0 || '選択してください'
    ],
    checkRules: [
      v => !!v || '承諾してください'
    ],
    title: "",
    areas: ["秋田", "横手", "山形", "富山"],
    choice_areas: [],
    discription: "",
    share_flg: false,
  }),
  methods: {
    async validate() {
      const {valid} = await this.$refs.form.validate()
      if (valid) {
        let success = "以下の内容で作成しました。\nタイトル:" + this.title + "\n拠点:" + this.choice_areas + "\n内容:" + this.discription + "\n共有:" + this.share_flg
        alert(success)
        this.$refs.form.reset()
      }
    }
  }
}
</script>