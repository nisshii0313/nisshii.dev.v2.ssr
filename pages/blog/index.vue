<template>
  <div class="blog-wrapper">
    <h1>ぼうけんの書</h1>
    <ul class="blog-list">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <div class="blog-card">
            <img :src="article.body.children[0].children[0].props.src" />
            <h2>{{ article.title }}</h2>
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
}
.blog-wrapper h1 {
  text-align: center;
}
.blog-list {
  list-style: none;
}
.blog-list li {
  width: 45%;
  float: left;
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
}
</style>

<script lang='ts'>
import { Vue, Component } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'

@Component
export default class BlogList extends Vue {
  head() {
    return { 
      title: "nisshiiのブログ" ,
      meta: [
        { hid: 'description', name: 'description', content: "徒然なるままに日暮らす" },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: "nisshiiのブログ" },
        { hid: 'og:description', property: 'og:description', content: "徒然なるままに日暮らす" },
        { hid: 'og:url', property: 'og:url', content: process.env.VUE_BASE_URL + '/blog'},
      ],
    }
  }
  async asyncData({ $content, params }: any) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'slug', 'body'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles
    }
  }
}
</script>
