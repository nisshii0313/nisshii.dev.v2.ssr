<template>
  <div class="skills-description-wrapper">
    <div class="skills-img">
      <img
        v-bind:class="{ skills_img_rotate: isChara }"
        :src="data.icon"
        :alt="data.name"
        width="100px"
        height="100px"
        decoding="async"
        loading="lazy"
      />
    </div>
    <div class="skills-title">
      <p>なまえ：</p>
      <p class="skills-contents"> {{data.name}} </p>
    </div>
    <div class="skills-title-ja">
      <p>読み方：</p>
      <p class="skills-contents"> {{data.nameJa}} </p>
    </div>
    <div class="skills-type">
      <p>タイプ：<br></p>
      <p class="skills-contents"> {{data.type}} </p>
    </div>
    <div class="skills-description">
      <p> {{data.description}} </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Skill } from '../Skills.vue';

@Component
export default class Description extends Vue {
  @Prop({})
  data!: Skill;

  get isChara() {
    return this.data.isChara;
  }
}
</script>

<style scoped>
.skills-description-wrapper {
  margin-right: 8px;
  margin-left: 8px;
}
.skills-img {
  margin-bottom: 16px;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}
.skills-img img {
  object-fit: contain;
  width: 100%;
}
.skills_img_rotate:hover {
  animation: rotate-anime 0.5s linear infinite;
}
@keyframes rotate-anime {
  0%  {transform: rotate(0);}
  100%  {transform: rotate(360deg);}
}
.skills-title {
  display: flex;
}
.skills-title-ja {
  display: flex;
}
.skills-type {
  display: flex;
  flex-direction: column;
}
.skills-description {
  display: flex;
  margin-top: 16px;
}
.skills-column {
  font-size: 16px;
}
.skills-contents {
  margin-left: 8px;
}
</style>
