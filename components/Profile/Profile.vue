<template>
  <div class="profile">
    <div class="profile-detail">
      <Detail />
      <Icons />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Detail: () => import('@/components/Profile/Detail/Detail.vue'),
    Icons: () => import('@/components/Profile/Icons/Icons.vue'),
  },
})
export default class Profile extends Vue {}
</script>

<style scoped>
.profile {
  width: 100%;
  display: flex;
}
.profile-detail {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
