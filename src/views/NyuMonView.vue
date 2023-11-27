<template>
  <v-card>
    <v-tabs
        v-model="tab"
        bg-color="primary"
    >
      <v-tab value="one">カウント</v-tab>
      <v-tab value="two">スイッチ</v-tab>
      <v-tab value="three">テキストエリア</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <v-container fluid>
            <p>{{ message }}</p>
            <p>
              <v-btn @click="stopButton()">ストップ</v-btn>
            </p>
          </v-container>
        </v-window-item>

        <v-window-item value="two">
          <v-container fluid>
            <h3>{{ hello }}</h3>
            <p>
              <v-text-field
                  v-model="input"
              />
              <v-btn @click="name_input">入力</v-btn>
            </p>

          </v-container>
        </v-window-item>

        <v-window-item value="three">
          <v-container fluid>
          </v-container>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>

</template>

<script>
export default {
  data: () => ({
    tab: null,
    message: '',
    timer: null,
    input: '',
    hello: '名前を入力してください',

  }),
  mounted() {
    this.timer = setInterval(() => {
          this.count++
          this.message = 'カウント:' + this.count
        }
        , 1000)
  },
  methods: {
    stopButton() {
      clearInterval(this.timer)
    },
    name_input(){
      this.hello  = 'こんにちは' + this.input
    }
  },
  created() {
    this.count = 0
  }
}
</script>