<template>
  <v-container>
    <v-form ref="form">
      <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
      ></v-text-field>

      <v-select
          v-model="select"
          :items="items"
          :rules="selectRules"
          label="Item"
          required
      ></v-select>

      <v-checkbox
          v-model="checkbox"
          :rules="checkRules"
          label="承諾しますか？"
          required
      ></v-checkbox>

      <div class="d-flex flex-column">
        <v-btn
            color="primary"
            class="mt-4"
            block
            @click="validate"
        >
          送信
        </v-btn>

<!--        <v-btn-->
<!--            color="error"-->
<!--            class="mt-4"-->
<!--            block-->
<!--            @click="reset"-->
<!--        >-->
<!--          Reset Form-->
<!--        </v-btn>-->

<!--        <v-btn-->
<!--            color="warning"-->
<!--            class="mt-4"-->
<!--            block-->
<!--            @click="resetValidation"-->
<!--        >-->
<!--          Reset Validation-->
<!--        </v-btn>-->
      </div>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: '',
    nameRules: [
      v => !!v || '必須です',
      v => (v && v.length <= 10) || '10文字以内で入力してください',
    ],
    selectRules: [v => !!v || '選択してください'],
    checkRules: [v => !!v || '承諾してください'],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
  }),

  methods: {
    async validate() {
      const {valid} = await this.$refs.form.validate()

      if (valid) alert('OKです！')
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>