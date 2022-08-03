<template>
  <div class="wrapper-options">
    <div class="options">
      <a @click="handleCreateContact" class="btn btn--warning">
        Create Contact
      </a>
      <a @click="handleImport" class="btn btn--warning">Import</a>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "en": {}
}
</i18n>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { message } from 'ant-design-vue';

import routes from '@/routes';
@Component({
  name: 'Options',
})
export default class Options extends Vue {
  handleClickItem() {
    this.$router.push({
      path: routes.conversation.path,
    });
  }

  handleCreateContact() {
    this.comingSoon();
  }

  handleImport() {
    this.comingSoon();
  }

  comingSoon() {
    message.info('Coming soon!');
  }
}
</script>
<style lang="scss" scoped>
.wrapper-options {
  flex: 0.5;
  margin-left: 8px;
  height: 100%;
  max-width: 459px;
}

.options {
  background-color: #fff;
  border-radius: 25px;
  height: 100%;
  display: flex;
  padding: 54px 40px;
  flex-direction: column;

  @media screen and (max-width: 1400px) and (min-width: 1339px) {
    width: 329px;
  }

  @media screen and (max-width: 1240px) and (min-width: 1239px) {
    width: 289px;
  }
}
</style>
