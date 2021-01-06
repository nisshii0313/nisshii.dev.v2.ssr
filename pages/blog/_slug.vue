<template>
  <article>
    <div class="blog-title">
      <div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.tag }}</p>
      </div>
    </div>
    <Blog :content="post" />
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

<script>
import { Vue } from 'vue-property-decorator'
const fs = require('fs')
const fm = require('front-matter')
const marked = require('marked')

export default Vue.extend({
  async asyncData({ $content, params, _error }) {
    const query = $content('blog', params.slug)
    const post = await query.fetch()
    const file = fs.readFileSync(`content/blog/${params.slug}.md`, 'utf8')
    post.html = marked(fm(file).body)
    post.html = marked(fm(file).body)
    return {
      post,
    }
  },
  head() {
    return {
      title: this.$data.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$data.post.title + ' | ぼうけんの書',
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
          content: this.$data.post.title + ' | ぼうけんの書',
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
          content:
            'https://clever-keller-803e9b.netlify.app/' +
            this.$data.post.images[0].url,
        },
      ],
    }
  },
})
</script>
