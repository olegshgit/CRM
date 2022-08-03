<template>
  <div class="conversation">
    <contact-info />
    <chat />
    <collateral />
  </div>
</template>

<i18n lang="json">
{
  "en": {}
}
</i18n>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import Chat from '@/components/conversation/Chat.vue';
import ContactInfo from '@/components/conversation/ContactInfo.vue';
import Collateral from '@/components/conversation/Collateral.vue';

@Component({
  name: 'ConversationPage',
  layout: 'admin',
  components: {
    ContactInfo,
    Chat,
    Collateral,
  },
})
export default class Conversation extends Vue {}
</script>

<style lang="scss" scoped>
.conversation {
  display: flex;
  flex-direction: row;
  padding: 0px 19px 22px 17px;

  @include responsive(md) {
    flex-direction: column;
  }
}
</style>
