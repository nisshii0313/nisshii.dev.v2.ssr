<template>
  <div class="blog-wrapper">
    <h1>ぼうけんの書</h1>
    <ul class="blog-list">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <div class="blog-card">
            <img class="lazyload" width="1000" height="1000" :src="article.image" :data-src="article.image" />
            <h2>{{ article.title }}</h2>
            <p>{{ article.createdAt }} | {{ article.readingTime }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.blog-wrapper {
  margin-right: auto;
  margin-left: auto;
  padding-left: 8px;
  padding-right: 8px;
}
.blog-wrapper h1 {
  text-align: center;
}
.blog-list {
  list-style: none;
  padding: 0;
}
.blog-list li {
  width: 100%;
}
.blog-card {
  border: solid 3px whitesmoke;
  box-sizing: border-box;
  border-radius: 15px;
  text-align: center;
}
.blog-card img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  height: auto;
}
</style>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import dayjs from 'dayjs'

export default Vue.extend({
  async asyncData({ $content, params, _error }: any) {
    const articles = await $content('blog', params.slug)
      .sortBy('createdAt', 'asc')
      .fetch()
    articles.map((item: any) => {
      item.createdAt = dayjs(item.createdAt).format('YYYY/MM/DD')
      item.image = require(`static/${item.images[0].url}`)
    })
    return {
      articles,
    }
  },
  head() {
    return {
      title: 'ぼうけんの書',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '徒然なるままに日暮らす',
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: 'ぼうけんの書' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '徒然なるままに日暮らす',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://nisshii.dev/blog',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://clever-keller-803e9b.netlify.app/blog.png',
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image'
        }
      ],
    }
  },
})
</script>
