<template>
  <div class="home">
    <orthodontic-lane />
    <conversation />
    <options />
  </div>
</template>

<i18n lang="json">
{
  "en": {}
}
</i18n>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import OrthodonticLane from '@/components/home/OrthodonticLane.vue';
import Conversation from '@/components/home/Conversation.vue';
import Options from '@/components/home/Options.vue';

@Component({
  name: 'HomePage',
  layout: 'admin',
  components: {
    OrthodonticLane,
    Conversation,
    Options,
  },
})
export default class HomePage extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  height: calc(100vh - 150px); 
  padding: 0px 19px 22px 17px;
  border: 0;
  display: flex;
  flex-direction: row;

  @include responsive(md) {
    flex-direction: column;
  }
}

.gutter-row {
  margin-top: 16px;
}

.gutter-box {
  background-color: #fff;
  height: 100vh;
  border-radius: 10px;
}
</style>
