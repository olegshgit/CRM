<template>
  <div class="mention">
    <a class="add-image" @click="handleAdd">
      <img src="~assets/images/img_add.svg" class="date-time" alt="Date Time" />
      {{ $t('add') }}
    </a>
    <div class="content">
      <mention-item />
    </div>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "add": "ADD NEW"
  }
}
</i18n>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { message } from 'ant-design-vue';

import MentionItem from './items/MentionItem.vue';

@Component({
  name: 'Note',
  components: {
    MentionItem,
  },
})
export default class Mention extends Vue {
  handleAdd() {
    this.comingSoon();
  }

  comingSoon() {
    message.info('Coming soon!');
  }
}
</script>
<style lang="scss" scoped>
.mention {
}
</style>
