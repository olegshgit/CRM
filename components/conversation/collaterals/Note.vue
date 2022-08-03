<template>
  <div class="note">
    <a class="add-image" @click="handleAdd">
      <img src="~assets/images/img_add.svg" class="date-time" alt="Date Time" />
      {{ $t('add') }}
    </a>
    <div class="content">
      <note-item />
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

import NoteItem from './items/NoteItem.vue';

@Component({
  name: 'Note',
  components: { NoteItem },
})
export default class Note extends Vue {
  handleAdd() {
    this.comingSoon();
  }

  comingSoon() {
    message.info('Coming soon!');
  }
}
</script>
<style lang="scss" scoped>
.note {
}
</style>
