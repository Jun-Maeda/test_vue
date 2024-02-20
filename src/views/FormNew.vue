<script setup>
import {ref, watch } from "vue";
import Dialog from "@/components/Dialog.vue"

let rules = ref({
  required: value => !!value || 'この項目は必須です',
})

let answers = ref(
    {
      name:'',
      pw:'',
      file: null,
      select:'',
      search_select:'',
      date_time:'',
      date:'',
      time:''
    }
)

function itemProps(item) {
  if (item === "") {
    return ""
  } else {
    return {
      title: item.name,
      subtitle: item.id,
      value: item.id
    }
  }
}

watch(answers.value, (newAnswers) => {
  console.log(newAnswers)
})
</script>
<template>
  <v-row>
    <v-col cols="5">
      <v-text-field
          class="mb-3"
          label="名前"
          hide-details="auto"
          :rules="[rules.required]"
          v-model="answers.name"
      />
      {{answers.name}}

      <v-text-field
          class="mb-3"
          label="パスワード"
          type="input"
          hint="パスワードを入力してください"
          v-model="answers.pw"
      />
      <v-file-input
          multiple
          show-size
          counter
          label="ファイルを選択してください"
          v-model="answers.file"
      />
      <v-select
          :items="['items','items2','items3','items4',]"
          label="選択してください"
          required
          v-model="answers.select"
      ></v-select>

      <v-autocomplete
          :items="[{'id':1,'name':'user1'},{'id':2,'name':'user2'},{'id':3,'name':'user3'}]"
          label="検索して選択してください"
          required
          :item-props="itemProps"
          v-model="answers.search_select"
      ></v-autocomplete>
      <v-text-field
          label="日付と時間"
          type="datetime-local"
          v-model="answers.date_time"
      />
      <v-text-field
          label="日付"
          type="date"
          v-model="answers.date"
      />

      <v-text-field
          label="時間"
          type="time"
          v-model="answers.time"
      />
    </v-col>
    <v-col cols="12">
      <v-btn type="submit" class="mt-2">送信</v-btn>
    </v-col>

    <v-col cols="12">
      <Dialog title="フォーム送信" content="フォームの中身" button_name="モーダル" />
    </v-col>



  </v-row>
</template>

