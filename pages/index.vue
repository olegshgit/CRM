<template>
  <div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Context } from '@nuxt/types';

import routes from '@/routes';

@Component({
  name: 'Root',
  layout: 'admin'
})
export default class Root extends Vue {
  middleware(ctx: Context){
    return ctx.redirect(routes.home.path);
  }
}
</script>
