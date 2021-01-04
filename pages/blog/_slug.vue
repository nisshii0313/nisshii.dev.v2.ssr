<template>
  <article>
    <div class="blog-title">
      <div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.tag }}</p>
      </div>
    </div>
    <nuxt-content :document="post" />
    <div>
      <NuxtLink class="blog-link-to-top" to="/blog">
        <p>{{ '一覧へ戻る' }}</p>
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
  text-align: center;
}
.blog-link-to-top p {
  border: solid 3px whitesmoke;
  box-sizing: content-box;
  border-radius: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
}
</style>

<style>
.nuxt-content {
  padding-right: 8px;
  padding-left: 8px;
  line-height: 150%
}
.nuxt-content img {
  width: 100%;
}
</style>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'

export default Vue.extend({
  async asyncData({ $content, params, error }: Context) {
    const query = $content('articles', params.slug)
    const post = await query.fetch()
    return { post, error }
  },
  head() {
    return {
      title: this.$data.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$data.post.title + ' | にっしーのブログ',
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$data.post.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$data.post.title + ' | にっしーのブログ',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content:
            'https://nisshii.dev' + '/blog/' + this.$data.post.slug + '/',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.$data.post.body.children[0].children[0].props.src.replace(
            '../../..',
            'https://clever-keller-803e9b.netlify.app'
          ),
        },
      ],
    }
  },
})
</script>
