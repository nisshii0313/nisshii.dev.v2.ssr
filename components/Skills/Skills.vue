<template>
  <div class="skills">
    <v-tabs v-model="tab" vertical hide-slider dark class="skills-tabs">
      <v-tab v-for="(i, index) in skillsData.skills" :key="index">
        <img
          class="skills-icon-img"
          :src="i.icon"
          :alt="i.name"
          decoding="async"
          loading="lazy"
        />
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" dark class="skills-details">
      <v-tab-item
        v-for="(i, index) in skillsData.skills"
        :key="index"
        :transition="false"
        :reverse-transition="false"
      >
        <Description :data="i" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import skillsDataJson from './skills.json'

export type Skill = {
  name: string
  nameJa: string
  type: string
  icon: string
  description: string
  isChara: boolean
}

type SkillsData = {
  skills: Skill[]
}

@Component({
  components: {
    Description: () =>
      import('@/components/Skills/Description/Description.vue'),
  },
})
export default class Skills extends Vue {
  tab = null
  skillsData: SkillsData = skillsDataJson
}
</script>

<style scoped>
.skills {
  display: flex;
  justify-content: space-between;
  margin-right: 40px;
  margin-left: 40px;
  margin-bottom: 40px;
}
.skills-tabs {
  max-width: 100px;
  border-radius: 15px;
  margin-right: 16px;
}
.skills-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: white;
  border-radius: 50%;
}
.skills-icon-img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  opacity: 0.5;
}
.skills-details {
  border-radius: 15px;
  width: 100%;
}
.v-tab {
  margin-bottom: 32px;
}
.v-tab--active::before {
  opacity: 0 !important;
}
.v-tab--active img {
  opacity: 1 !important;
}
@media screen and (max-width: 500px) {
  .skills {
    margin-right: 16px;
    margin-left: 16px;
  }
}
</style>
<style>
.v-slide-group__wrapper {
  padding-top: 32px;
}
.v-slide-group__content {
  width: 100%;
  height: calc(100vh - 150px);
  overflow: scroll;
}
.v-window__container {
  padding-top: 32px;
  padding-bottom: 32px;
}
</style>
