<template>
  <div>
    <img
      class="lazyload"
      :data-src="content.images[0].url"
      :alt="content.images[0].alt"
    />
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="blog-main" v-html="content.html"></div>
  </div>
</template>

<style>
.blog-main {
  padding-right: 8px;
  padding-left: 8px;
  line-height: 150%;
}
.blog-main img {
  width: 100%;
}
.blog-main a:link {
  color: #0000ff;
}
.blog-main a:visited {
  color: #000080;
}
.blog-main a:hover {
  color: #ff0000;
}
.blog-main a:active {
  color: #ff8000;
}
</style>

<script>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Blog extends Vue {
  @Prop({ type: Object, required: true })
  content
}
</script>
