<template>
  <div class="wrapper-collateral">
    <div class="collateral">
      <div class="collateral__title">
        <h2>{{ $t('title') }}</h2>
      </div>
      <div class="collateral__content">
        <a-collapse :activeKey="activeKey">
          <a-collapse-panel key="1" :header="$t('attachments')">
            <upload @preview="handlePreview" />
          </a-collapse-panel>

          <a-collapse-panel
            key="2"
            :header="$t('notes')"
            style="padding-top: 20px; background-color: #fff"
          >
            <note />
          </a-collapse-panel>
          <a-collapse-panel
            key="3"
            :header="$t('mentions')"
            style="padding-top: 20px; background-color: #fff"
          >
            <mention />
          </a-collapse-panel>
        </a-collapse>
      </div>
      <div>
        <a-modal
          :visible="previewVisible"
          :footer="null"
          @cancel="handleCancel"
          v-if="previewVisible"
        >
          <img alt="Photo" style="width: 100%" :src="previewImage" />
        </a-modal>
      </div>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Collateral File",
    "attachments": "Attachments",
    "notes": "Notes",
    "mentions": "Mentions"
  }
}
</i18n>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import Upload from './collaterals/Upload.vue';
import Note from './collaterals/Note.vue';
import Mention from './collaterals/Mention.vue';

@Component({
  name: 'Collateral',
  components: {
    Upload,
    Note,
    Mention,
  },
})
export default class Collateral extends Vue {
  activeKey = 1;
  previewVisible = false;
  previewImage = '';

  handleCancel() {
    this.previewVisible = false;
  }

  handlePreview(file: any) {
    this.previewVisible = true;
    this.previewImage = file.url;
  }
}
</script>
<style lang="scss" scoped>
.wrapper-collateral {
  flex: 0.5;
  max-width: 459px;
}

.collateral {
  background-color: #fff;
  border-radius: 25px;
  display: flex;
  padding-top: 45px;
  padding-left: 30px;
  flex-direction: column;
  height: 100%;

  @media screen and (max-width: 1400px) and (min-width: 1339px) {
    width: 329px;
  }

  @media screen and (max-width: 1240px) and (min-width: 1239px) {
    width: 289px;
  }

  @media screen and (max-width: 1400px) {
    padding-top: 49px;
  }

  @media screen and (max-width: 1400px) {
    padding-top: 53px;
  }

  &__title {
    margin-bottom: 4px;

    h2 {
      font-size: 40px;
      color: #155281;
      line-height: 132.5%;

      @include responsive(xl) {
        font-size: 36px;
      }

      @include responsive(lg) {
        font-size: 32px;
      }
    }
  }

  &__content {
    height: 100%;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow: scroll;
    margin-bottom: -14px;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  ::v-deep .ant-upload-picture-card-wrapper {
    display: flex;
    flex-direction: column-reverse;
  }

  ::v-deep .ant-collapse-header {
    color: #ca441c !important;
    font-size: 20px !important;
    line-height: 135% !important;
    user-select: none !important;
    padding: unset !important;
    padding-left: 44px !important;
    background: #fff;
    position: relative;

    @media screen and (max-width: 1280px) {
      padding-left: 32px !important;
    }
  }

  ::v-deep .ant-collapse-arrow {
    content: url('~assets/images/img_arrow.svg');
    width: 21px;
    height: 8.32px;
    position: absolute;
    top: 34% !important;
    transform: rotate(90deg) !important;
    left: 0px !important;

    svg {
      display: none !important;
    }
  }

  ::v-deep .ant-collapse-item-active {
    .ant-collapse-arrow {
      content: url('~assets/images/img_arrow.svg');
      width: 21px;
      height: 8.32px;
      transform: rotate(-360deg) !important;
      position: absolute;
    }
  }

  ::v-deep .ant-collapse-header:hover {
    color: #155281 !important;
  }

  ::v-deep .ant-collapse > .ant-collapse-item {
    border-bottom: unset !important;
  }

  ::v-deep .ant-collapse-content {
    border-top: unset !important;
    border-bottom: 1px solid #d9d9d9;
  }

  ::v-deep .ant-collapse-content-active {
    padding-left: 24px !important;
  }

  @media screen and (max-width: 1280px) {
    ::v-deep .ant-upload-list-picture-card-container {
      margin: unset !important;
      padding: unset !important;
      width: 100px !important;
    }

    ::v-deep .ant-upload-list-item {
      margin: unset !important;
      padding: unset !important;
      width: 96px !important;
      height: 96px !important;
    }

    ::v-deep .ant-collapse-content-box {
      padding-left: 0px !important;
    }
  }
}
</style>
