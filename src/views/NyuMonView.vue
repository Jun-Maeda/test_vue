<template>
  <p>{{ message }}</p>
  <p><v-btn @click="stopButton()">ストップ</v-btn></p>
</template>

<script>
export default {
  data: () => ({
    message: '',
    timer: null
  }),
  mounted() {
    this.timer = setInterval(() => {
          this.count++
          this.message = 'カウント:' + this.count
        }
    )
  },
  methods: {
    stopButton() {
      clearInterval(this.timer)
    }
  },
  created() {
    this.count = 0
  }
}
</script>