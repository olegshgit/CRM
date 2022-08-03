<template>
  <div :class="['message-row', isSentMessage ? 'flex-start' : 'flex-end']">
    <div class="message">
      <p :class="['message__time', isSentMessage ? '' : 'text-align-end ']">
        {{ time }}
      </p>
      <p
        :class="[
          'message__content',
          isSentMessage
            ? 'message-bg--sent message__content--left'
            : 'message-bg--received message__content--right',
        ]"
      >
        {{ content }}
      </p>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "en": {}
}
</i18n>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { IMessage } from '~/types/Conversation';
import { MessageType } from '~/types/enum/MessageType';

@Component({
  name: 'Message',
})
export default class Message extends Vue {
  @Prop()
  readonly message!: IMessage;

  get isSentMessage() {
    return this.message.type == MessageType.SENT;
  }

  get time() {
    return `via SMS - ${this.message.time}`;
  }

  get content() {
    return this.message.message;
  }
}
</script>
<style lang="scss" scoped>
.message-bg {
  &--sent {
    background-color: #f9f9f9 !important;
    color: #155281;
  }

  &--received {
    background-color: #155281 !important;
    color: #fff;
  }
}

.message-row {
  display: flex;
  margin-bottom: 28px;

  .message {
    display: flex;
    flex-direction: column;
    max-width: 500px;

    &__time {
      display: inline-block;
      color: #ecbc40;
      font-size: 14px;
      line-height: 120%;
      margin-bottom: 12px;
      user-select: none;
    }

    &__content {
      display: inline-block;
      font-size: 16px;
      line-height: 175%;
      padding: 16px 26px;
      border-radius: 15px;
      font-family: 'Segoe UI';

      &--left {
        position: relative;

        &::after {
          content: '';
          top: -10px;
          left: 24px;
          position: absolute;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid #f9f9f9;
        }
      }

      &--right {
        position: relative;

        &::after {
          content: '';
          top: -10px;
          right: 24px;
          position: absolute;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid #155281;
        }
      }
    }
  }
}
</style>
