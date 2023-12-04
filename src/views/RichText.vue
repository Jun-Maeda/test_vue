<template>
  <editor
      v-model="content"
      api-key="ehcwhw1wiyp7m5stsv5mke14dhcxafs4v3vzr555txvzeokp"
      :init="{
      menubar: false,
      plugins: 'lists link image emoticons',
      toolbar: 'styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons'
    }"
  />
  <div>
    {{ content }}
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  components: {
    'editor': Editor
  },
   data: () => ({
     content:""
   })
}
</script>