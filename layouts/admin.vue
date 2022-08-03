<template>
  <div>
    <CRMHeader class="crm-header"/>
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import CRMHeader from '@/components/common/CRMHeader.vue';

@Component({
  name: 'AdminLayout',
  components: { CRMHeader },
})
export default class AdminLayout extends Vue {}
</script>

<style lang="scss" scoped>
.crm-header{
  margin-bottom: 25px;
}
</style>
