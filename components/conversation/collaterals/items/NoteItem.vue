<template>
  <div class="note-item">
    <p class="date-time">Jul 02, 2022 3:17 PM</p>
    <p class="content">
      Sed ut perspiciatis unde omnis iste natus error sit? Accusantium
      doloremque...
    </p>
  </div>
</template>

<i18n lang="json">
{
  "en": {}
}
</i18n>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  name: 'NoteItem',
})
export default class NoteItem extends Vue {}
</script>
<style lang="scss" scoped>
.note-item {
  background-color: #f9f9f9;
  border-radius: 22px;
  padding: 16px;

  .date-time {
    color: #ecbc40;
    font-size: 14px;
    margin-bottom: 8px;
  }

  .content {
    font-size: 16px;
    color: #155281;
    line-height: 175%;
    font-family: 'Segoe UI';
  }
}
</style>
