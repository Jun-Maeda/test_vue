<template>
  <v-row>
    <v-col cols="5">
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
      <v-select
          :items="['items','items2','items3','items4',]"
          label="選択してください"
          required
      ></v-select>
      <v-text-field
          label="日付と時間"
          type="datetime-local"
      />
      <v-text-field
          label="日付"
          type="date"
      />

      <v-text-field
          label="時間"
          type="time"
      />
    </v-col>
    <v-col cols="12">
      <v-btn type="submit" class="mt-2">送信</v-btn>
    </v-col>


    <v-col cols="12">
      <v-dialog
          v-model="dialog"
          persistent
          width="1024"
          class="pa-0"
      >
        <template v-slot:activator="{ props }">
          <v-btn
              color="primary"
              v-bind="props"
          >
            モーダルフォーム
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-text-field
                      label="苗字*"
                      required
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-text-field
                      label="名前*"
                      required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      label="メールアドレス*"
                      required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      label="電話番号*"
                      placeholder="ex:09012345678"
                      hint="ハイフンなしで入力してください"
                      persistent-hint
                      required
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-select
                      :items="['0-17', '18-29', '30-54', '54+']"
                      label="年齢*"
                      required
                  ></v-select>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-autocomplete
                      :items="['電話', 'メール',]"
                      label="送信先"
                      multiple
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
            <small>*入力必須項目</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue-darken-1"
                variant="text"
                @click="dialog = false"
            >
              閉じる
            </v-btn>
            <v-btn
                color="blue-darken-1"
                variant="text"
                @click="dialog = false"
            >
              送信
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    rules: {
      required: value => !!value || 'この項目は必須です',
    },
    dialog: false,
  }),
}
</script>