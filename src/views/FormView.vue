<template>
  <div>
    <v-responsive
        max-width="600"
    >
      <v-text-field
          class="mb-3"
          label="名前"
          hide-details="auto"
          :rules="[rules.required]"
      />

      <v-text-field
          class="mb-3"
          label="パスワード"
          type="input"
          hint="パスワードを入力してください"
      />
      <v-file-input
          multiple
          show-size
          counter
          label="ファイルを選択してください"
      />
    </v-responsive>
    <v-btn type="submit" class="mt-2">送信</v-btn>

  </div>
</template>

<script>
export default {
  data: () => ({
    rules: {
      required: value => !!value || 'この項目は必須です',
    },
  }),
}
</script>