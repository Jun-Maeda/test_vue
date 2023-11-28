<template>
  <v-container>
    <v-form @submit.prevent="submit">
      <v-text-field
          v-model="title"
          :rules="rules"
          label="タイトル"
      />
      <v-select
          v-model="choice_areas"
          :items="areas"
          label="拠点"
          multiple
          :rules="rules"
      ></v-select>
      <v-textarea
        v-model="discription"
        :rules="rules"
        label="本文"
        />
      <v-btn type="submit" block>作成</v-btn>

    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    rules: [
        value => !!value || 'この項目は必須です',
      ],
    title: "",
    areas: ["秋田", "横手", "山形", "富山"],
    choice_areas:[],
    discription: "",
    checked: true
  }),
  methods: {
    submit(){
      alert("送信しました")
    }
  }
}
</script>