<template>
  <div class="footer">
    <p><span class="copyright">&copy;</span> {{ period }} Yuta Imanishi</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import dayjs from 'dayjs'

@Component
export default class Footer extends Vue {
  year = dayjs().year()

  get period() {
    let returnPeriod = '2020'
    if (this.year > 2020) {
      returnPeriod = `2020 - ${this.year}`
    }
    return returnPeriod
  }
}
</script>

<style scoped>
.footer {
  margin-right: 16px;
}
.copyright {
  font-family: initial;
  font-weight: normal;
}
</style>
