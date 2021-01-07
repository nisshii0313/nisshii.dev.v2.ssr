<template>
  <div class="history-wrapper">
    <History />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "nisshii's portfolio | history",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'nisshiiのnisshiiによるnisshiiのためのポートフォリオ兼ブログ',
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: "nisshii's portfolio" },
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
        },
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://nisshii.dev/skills',
        },
      ],
    }
  },
}
</script>
