<template>
  <div class="detail">
    <div class="detail-status">
      <div class="detail-img">
        <img
          alt="Aoba Suzukaze"
          width="100px"
          height="100px"
          :src="detailInfo.profileImgSrc"
        />
      </div>
      <div class="detail-name-age">
        <div class="detail-name">
          <p>
            {{ detailInfo.name }} <br />
            {{ detailInfo.hn }}
          </p>
        </div>
        <div class="detail-age">
          <p>
            {{ detailAge }} <br />
            {{ detailToNextAge }}
          </p>
        </div>
      </div>
    </div>
    <div class="detail-job">
      <p>
        {{ detailInfo.job }} <br />
        {{ detailInfo.jobDescription }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import detail from './detail.json'

type DetailInfo = {
  name: string
  profileImgSrc: string
  hn: string
  job: string
  jobDescription: string
}

dayjs().locale('ja')

@Component
export default class Detail extends Vue {
  detailInfo: DetailInfo = detail

  get detailAge() {
    import('dayjs').then((dayjs) => {
      dayjs.locale('ja')
    })
    const t = dayjs('1999-03-13T00:00:00')
    return `Lv：${dayjs().diff(t, 'y')}`
  }

  get detailToNextAge() {
    if (dayjs().isBefore(dayjs().month(3).date(13))) {
      return `次のレベルまで： ${dayjs().diff(
        dayjs().month(3).date(13),
        'd'
      )} 日`
    }
    return `次のレベルまで： ${dayjs()
      .year(dayjs().year() + 1)
      .month(3)
      .date(13)
      .diff(dayjs(), 'd')} 日`
  }
}
</script>

<style scoped>
.detail {
  width: 100%;
  border: solid 3px whitesmoke;
  box-sizing: border-box;
  border-radius: 15px;
}
.detail-img {
  flex-grow: 2;
}
.detail-img img {
  width: 100%;
  height: auto;
}
.detail-status {
  display: flex;
}
.detail-name-age {
  flex-grow: 3;
  margin-left: 8px;
  margin-right: 8px;
  display: flex;
  flex-direction: column;
}
.detail-name {
  max-width: 100%;
  margin: 16px;
  text-align: center;
}
.detail-name p {
  display: inline-block;
  text-align: left;
}
.detail-age {
  max-width: 100%;
  margin: 16px;
  text-align: center;
}
.detail-age p {
  display: inline-block;
  text-align: left;
}
.detail-job {
  max-width: 100%;
  margin: 16px;
  text-align: center;
}
.detail-job p {
  display: inline-block;
  text-align: left;
}
@media screen and (max-width: 500px) {
  .detail-age {
    margin: 8px;
  }
  .detail-name {
    margin: 8px;
  }
  .detail-job {
    margin: 8px;
  }
}
</style>
