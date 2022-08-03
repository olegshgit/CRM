<template>
  <div class="wrapper">
    <div class="container">
      <div class="ri-nav">
        <div class="menu">
          <a @click="handleBPM" class="menu-item">{{ $t('bpm') }}</a>
          <a @click="handleFORM" class="menu-item menu-item--107">
            {{ $t('form') }}
          </a>
          <a
            @click="handleCRM"
            class="menu-item menu-item--active menu-item--137"
          >
            {{ $t('crm') }}
          </a>
        </div>
        <div class="search">
          <div class="search-content">
            <img
              src="~assets/images/img_search.svg"
              alt="Search"
              class="search__thumbnail"
            />
            <a-input placeholder="search contact" allow-clear />
          </div>
        </div>
        <div class="ri-nav-avatar">
          <a-avatar :size="78">
            <template #icon>
              <img src="~assets/images/img_avatar.png" alt="" />
            </template>
          </a-avatar>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "form": "FORM",
    "bpm": "BPM",
    "crm": "CRM"
  }
}
</i18n>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import 'ant-design-vue/dist/antd.css';
import { message } from 'ant-design-vue';

@Component({
  name: 'CRMHeader',
})
export default class CRMHeader extends Vue {
  handleBPM() {
    this.comingSoon();
  }

  handleFORM() {
    this.comingSoon();
  }

  handleCRM() {
    // TODO
  }

  comingSoon() {
    message.info('Coming soon!');
  }
}
</script>
<style lang="scss" scoped>
.ri-nav {
  height: 120px;
  background-color: #155281;
  display: flex;

  .menu {
    display: flex;
    margin-left: 75px;

    .menu-item {
      font-size: 40px;
      color: #fff;
      margin-right: 111px;
      position: relative;
      padding-top: 34px;
      padding-bottom: 33px;
      font-family: 'seguisb';
      line-height: 132.5%;

      &--107 {
        margin-right: 133px;

        @media screen and (max-width: 1400px) {
          margin-right: 90.5px;
        }
      }

      &--137 {
        margin-right: 161px;

        @media screen and (max-width: 1400px) {
          margin-right: 90.5px;
        }
      }

      @media screen and (max-width: 1400px) {
        margin-right: 72px;
      }

      &--active {
        color: #ecbc40;

        &::after {
          bottom: 0px;
          content: '';
          width: 133px;
          height: 4px;
          background-color: #ecbc40;
          position: absolute;
          left: -23.14px;
        }
      }
    }
  }

  .search {
    flex: 1;
    margin-right: 137px;
    margin-top: 37px;

    @media screen and (max-width: 1400px) {
       margin-right: 0px;
    }

    .search-content {
      background-color: #f9f9f9;
      border-radius: 15px;
      display: flex;
      padding: 9px;
      padding-left: 16px;
      align-items: center;
      width: 100%;

      img {
        width: 26px;
        height: 26px;
        margin-right: 16px;
      }
    }
  }

  .ri-nav-avatar {
    margin-right: 75px;
    padding-top: 21px;

    @media screen and (max-width: 1400px) {
      margin-right: 75px;
      margin-left: 74px;
    }
  }
}

::v-deep .ant-input {
  border: 1px solid #f9f9f9 !important;
  background-color: #f9f9f9;
  color: #155281;

  padding-left: unset !important;

  &::placeholder {
    color: #155281 !important;
    font-size: 16px !important;
    line-height: 175% !important;
    font-family: 'Segoe UI' !important;
  }
}

::v-deep .ant-input:focus {
  box-shadow: none !important;
}
</style>
