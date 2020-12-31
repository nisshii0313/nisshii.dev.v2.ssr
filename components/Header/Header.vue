<template>
  <nav role="navigation">
    <div class="header">
      <ul class="mt0">
        <li>
          <NuxtLink to="/" class="mb1">
            <p>ステータス</p>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/history" class="mb1">
            <p>りれき</p>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/skills">
            <p>スキル</p>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog">
            <p>ぼうけんの書</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {}
</script>

<style scoped>
.header {
  border: solid 3px whitesmoke;
  box-sizing: border-box;
  border-radius: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
}
.header ul {
  width: 100%;
  list-style: none;
}
.header li {
  padding: 0;
  float: left;
  width: 50%;
}
.header li p {
  margin: 8px;
}
.header li p:before {
  content: '\00a0\00a0';
  margin-right: 8px;
}
.router-link-exact-active p:before {
  content: '▶︎' !important;
  margin-right: 4px;
}
</style>
