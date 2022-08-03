<template>
  <div class="wrapper-orthodontic">
    <div class="orthodontic-lane">
      <h2 class="orthodontic-lane__title">{{ $t('title') }}</h2>
      <div class="orthodontic-lane__pie-chart">
        <img src="~assets/images/img_pie-chart.png" alt="PieChart" />
        <h3>450</h3>
      </div>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Orthodontic Lane"
  }
}
</i18n>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  name: 'OrthodonticLane',
})
export default class OrthodonticLane extends Vue {}
</script>
<style lang="scss" scoped>
.wrapper-orthodontic {
  flex: 0.5;
  margin-right: 8px;
  max-width: 459px;
}

.orthodontic-lane {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 45px;
  background-color: #fff;
  border-radius: 25px;
  line-height: 132.5%;
  height: 100%;

  @media screen and (max-width: 1400px) and (min-width: 1339px) {
    width: 329px;
  }

  @media screen and (max-width: 1240px) and (min-width: 1239px) {
    width: 289px;
  }

  @media screen and (max-width: 1400) {
    padding-top: 49px;
    margin-bottom: 31px;
  }

  @media screen and (max-width: 1240) {
    padding-top: 53px;
    margin-bottom: 30px;
  }

  &__title {
    font-size: 40px;
    line-height: 120%;
    color: #155281;
    margin-bottom: 30.1px;

    @media screen and (max-width: 1456px) {
      font-size: 36px;
    }

    @media screen and (max-width: 1400px) {
      font-size: 36px;
    }

    @media screen and (max-width: 1316px) {
      font-size: 32px;
    }

    @media screen and (max-width: 1240px) {
      font-size: 32px;
    }
  }

  &__pie-chart {
    width: 342px;
    height: 342px;
    margin-left: 58px;
    margin-right: 58px;
    position: relative;

    @media screen and (max-width: 1800px) {
      width: 266px;
      height: 266px;
      margin-left: 31px;
      margin-right: 31px;
    }

    @media screen and (max-width: 1400px) {
      width: 266px;
      height: 266px;
      margin-left: 31px;
      margin-right: 31px;
    }

    @media screen and (max-width: 1390px) {
      width: 235px;
      height: 235px;
      margin-left: 27px;
      margin-right: 27px;
    }

    @media screen and (max-width: 1240px) {
      width: 234px;
      height: 234px;
      margin-left: 27px;
      margin-right: 27px;
    }

    img {
      width: 100%;
      height: 100%;
      position: absolute;
    }

    h3 {
      font-size: 100px;
      line-height: 133%;
      color: #787878;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      @media screen and (max-width: 1400px) {
        font-size: 80px;
      }

      @media screen and (max-width: 1240px) {
        font-size: 70px;
      }
    }
  }
}
</style>
