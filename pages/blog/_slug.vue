<template>
  <article>
    <div class="blog-title">
      <div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.tag }}</p>
      </div>
    </div>
    <div v-html="post.html"></div>
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
.nuxt-content a:link { color: #0000ff; }
.nuxt-content a:visited { color: #000080; }
.nuxt-content a:hover { color: #ff0000; }
.nuxt-content a:active { color: #ff8000; }
</style>

<script>
import { Vue } from 'nuxt-property-decorator'

const fm = require("front-matter")
const md = require("markdown-it")({
  html: true,
  linkify: true,
  breaks: false,
})

export default Vue.extend({
  async asyncData({ $content, params, error }) {
    const query = $content('articles', params.slug)
    const post = await query.fetch()
    const fileContent = await import(`../../content/articles/${params.slug}.md`);
    const res = fm(fileContent.default);
    post.html = md.render(res.body);
    return { post, error }
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
