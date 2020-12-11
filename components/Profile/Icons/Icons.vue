<template>
  <div class="icons-list">
    <div class="icons-label">
      <p>そうび</p>
    </div>
    <div class='icons-line'>
      <div>
        <div mr-1>
          <p>E: </p>
        </div>
        <div>
          <p class="icons-line-bg">
            <img
              alt="twitter"
              width="100"
              height="100"
              :src='iconInfo.imgSrc.twitter'
              :href='iconInfo.linkUrls.twitter'
              decoding="async"
              loading="lazy"
            >
          </p>
        </div>
      </div>
      <div>
        <div>
          <p>E: </p>
        </div>
        <div>
          <p class="icons-line-bg">
            <img
              alt="github"
              width="100"
              height="100"
              :src='iconInfo.imgSrc.github'
              :href='iconInfo.linkUrls.github'
              decoding="async"
              loading="lazy"
            >
          </p>
        </div>
      </div>
      <div>
        <div>
          <p>E: </p>
        </div>
        <div>
          <p class="icons-line-bg">
            <img
              alt="facebook"
              width="100"
              height="100"
              :src='iconInfo.imgSrc.facebook'
              :href='iconInfo.linkUrls.facebook'
              decoding="async"
              loading="lazy"
            >
          </p>
        </div>
      </div>
    </div>
    <div class='icons-line'>
      <div>
        <p>E: </p>
        <p class="icons-line-bg">
          <img
            alt="speaker-deck"
            width="100"
            height="100"
            :src='iconInfo.imgSrc.speakerDeck'
            :href='iconInfo.linkUrls.speakerDeck'
            decoding="async"
            loading="lazy"
          >
        </p>
      </div>
      <div>
        <p>E: </p>
        <p class="icons-line-bg">
          <img
            alt="hatena"
            width="100"
            height="100"
            :src='iconInfo.imgSrc.hatena'
            :href='iconInfo.linkUrls.hatena'
            decoding="async"
            loading="lazy"
          >
        </p>
      </div>
      <div>
        <p>E: </p>
        <p class="icons-line-bg">
          <img
            class="icons-qiita"
            alt="qiita"
            width="100"
            height="100"
            :src='iconInfo.imgSrc.qiita'
            :href='iconInfo.linkUrls.qiita'
            decoding="async"
            loading="lazy"
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import iconInfoJson from './icons.json';

type IconInfo = {
  linkUrls: {
    twitter: string,
    github: string,
    speakerDeck: string,
    hatena: string,
    facebook: string,
    qiita: string
  },
  imgSrc: {
    twitter: string,
    github: string,
    speakerDeck: string,
    hatena: string,
    facebook: string,
    qiita: string
  }
}

@Component
export default class Icons extends Vue {
  iconInfo: IconInfo = iconInfoJson;
}
</script>

<style scoped>
p {
  display: inline-block;
  vertical-align: middle;
  margin: 0 !important;
}
.icons-label {
  display: inline-block;
  line-height: 1;
  background: black;
  padding: 8px 15px;
  top: -17px;
  left: 16px;
  border-radius: 15px;
}
.icons-list {
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  border: solid 3px whitesmoke;
  box-sizing: border-box;
  border-radius: 15px;
}
.icons-line {
  max-width: 100%;
  padding-left: 8px;
  padding-right: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
}
.icons-line-bg {
  background-color: white;
  height: 110px;
  width: 110px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icons-line a {
  display: flex;
  align-items: center;
}
.icons-line img {
  display:inline-block;
  width: 100px;
}
.icons-qiita {
  height: 100%;
  border-radius: 50%;
}
.icon-quipment {
  margin-right: 8px;
}
@media screen and (max-width: 500px) {
  .icons-line-bg {
    height: 56px;
    width: 56px;
    margin-left: 8px;
  }
  .icons-line img {
    width: 50px;
  }
}
</style>
