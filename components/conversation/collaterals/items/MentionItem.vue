<template>
  <div class="mention-item">
    <p class="date-time">Jul 01, 2022 10:42 AM</p>
    <p class="content">
      <span>@John Smith</span>Sed ut perspiciatis unde omnis iste natus error
      sit? Accusantium
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
  name: 'MentionItem',
})
export default class MentionItem extends Vue {}
</script>
<style lang="scss" scoped>
.mention-item {
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

    span {
      color: #ecbc40;
      margin-right: 4px;
    }
  }
}
</style>
