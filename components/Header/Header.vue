<template>
  <div class="header">
    <ul>
      <li>
        <NuxtLink to="/">
          <p>{{ cursorStatus }}ステータス</p>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/history">
          <p>{{ cursorHistory }}りれき</p>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/skills">
          <p>{{ cursorSkills }}スキル</p>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog">
          <p>{{ cursorBlog }}ぼうけんの書</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  get cursorStatus() {
    const cursor = this.$route.path === "/" ? "▶︎" : "　";
    return cursor;
  }
  get cursorHistory() {
    const cursor = this.$route.path === "/history" ? "▶︎" : "　";
    return cursor;
  }
  get cursorSkills() {
    const cursor = this.$route.path === "/skills" ? "▶︎" : "　";
    return cursor;
  }
  get cursorBlog() {
    const cursor = this.$route.path.includes("/blog") ? "▶" : "　";
    return cursor;
  }
}
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
  padding: 0;
  margin: 0;
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
  margin-right: 8px;
}
</style>
