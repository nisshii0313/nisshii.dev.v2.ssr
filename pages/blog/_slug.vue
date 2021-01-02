<template>
  <article>
    <div class="blog-title">
      <div>
        <h1>{{ article.title }}</h1>
        <p>{{ article.tag }}</p>
      </div>
    </div>
    <nuxt-content :document="article" />
    <div>
      <NuxtLink class="blog-link-to-top" to="/blog">
        <p>{{ '一覧へ' }}</p>
      </NuxtLink>
    </div>
  </article>
</template>

<style scoped>
.blog-title {
  width: 100%;
  text-align: center;
  margin-bottom: 16px;
}
.blog-link-to-top {
  width: 100%;
}
</style>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class BlogArticle extends Vue {
  head() {
    return {
      title: this.$data.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$data.article.title + '|nisshiiのブログ',
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$data.article.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$data.article.title + '|nisshiiのブログ',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content:
            process.env.VUE_BASE_URL + '/blog/' + this.$data.article.slug + '/',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.$data.article.body.children[0].children[0].props.src,
        },
      ],
    }
  }

  async asyncData({ $content, params }: any) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  }
}
</script>
