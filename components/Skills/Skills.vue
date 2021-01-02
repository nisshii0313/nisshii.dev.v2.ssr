<template>
  <div class="skills">
    <div
      v-for="(i, index) in skillsData.skills"
      :key="index"
    >
      <div :class="[
        { 'skills-img-position': index % 2 === 1 },
        'skills-description-wrapper',
      ]">
        <div class="skills-img">
          <img
            :class="{ skills_img_rotate: i.isChara }"
            :src="i.icon"
            :alt="i.name"
            width="100px"
            height="100px"
            decoding="async"
            loading="lazy"
          />
        </div>
        <div class="skills-detail">
          <div class="skills-title">
            <p>なまえ：</p>
            <p class="skills-contents">{{ i.name }}</p>
          </div>
          <div class="skills-title-ja">
            <p>読み方：</p>
            <p class="skills-contents">{{ i.nameJa }}</p>
          </div>
        </div>
      </div>
      <div class="skills-description">
        <p>{{ i.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import skillsDataJson from './skills.json'

export type Skill = {
  name: string
  nameJa: string
  icon: string
  description: string
  isChara: boolean
}

type SkillsData = {
  skills: Skill[]
}

@Component
export default class Skills extends Vue {
  tab = null
  skillsData: SkillsData = skillsDataJson
}
</script>

<style scoped>
.skills {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 40px;
  margin-left: 40px;
  margin-bottom: 40px;
}
.skills-description-wrapper {
  display: flex;
  justify-content: space-between;
  margin-right: 8px;
  margin-left: 8px;
  margin-bottom: 8px;
}
.skills-img-position {
  flex-flow: row-reverse;
}
.skills-img img {
  object-fit: contain;
}
.skills_img_rotate:hover {
  animation: rotate-anime 0.5s linear infinite;
}
@keyframes rotate-anime {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.skills-detail {
  display: flex;
  flex-direction: column;
}
.skills-title {
  display: flex;
}
.skills-title-ja {
  display: flex;
}
.skills-description {
  border: solid 3px whitesmoke;
  box-sizing: border-box;
  border-radius: 15px;
  margin-bottom: 16px;
  padding-left: 8px;
  padding-right: 8px;
}
.skills-column {
  font-size: 16px;
}
.skills-contents {
  margin-left: 8px;
}
@media screen and (max-width: 500px) {
  .skills {
    margin-right: 16px;
    margin-left: 16px;
  }
}
</style>
