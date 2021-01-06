<template>
  <div class="home">
    <Profile />
  </div>
</template>

<style scoped>
.home {
  max-width: 100%;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}
</style>

<script>
export default {
  head() {
    return {
      title: "nisshii's portfolio",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'nisshiiのnisshiiによるnisshiiのためのポートフォリオ兼ブログ',
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: 'ぼうけんの書' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'nisshiiのnisshiiによるnisshiiのためのポートフォリオ兼ブログ',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://nisshii.dev',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://nisshii.netlify.app/logo.png',
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image'
        }
      ],
    }
  },
}
</script>
