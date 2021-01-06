<template>
  <div class="skills-wrapper">
    <Skills />
  </div>
</template>

<style scoped>
.skills-wrapper {
  width: 100%;
}
</style>

<script>
export default {
  head() {
    return {
      title: "nisshii's portfolio | skills",
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
          content: 'https://clever-keller-803e9b.netlify.app/logo.png',
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
