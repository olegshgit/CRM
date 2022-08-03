<template>
  <div class="wrapper-chat">
    <div class="chat">
      <div class="back-to-conversation">
        <a @click="handleBack">
          <img src="~/assets/images/img_arrow-left.svg" alt="" />{{ $t('all') }}
        </a>
      </div>
      <div class="chat__content">
        <message
          v-for="(msg, idx) in messages"
          :key="idx"
          :message="msg"
          :class="idx === messages.length - 1 ? 'last' : undefined"
        />
      </div>
      <div class="input-message">
        <a-tabs :activeKey="activeKey">
          <a-tab-pane key="1">
            <template #tab>
              <span :class="activeKey ? 'active-tab' : ''">
                {{ $t('sms') }}
              </span>
            </template>
            SMS
          </a-tab-pane>
          <a-tab-pane key="2">
            <template #tab>
              <span> {{ $t('email') }} </span>
            </template>
            Email
          </a-tab-pane>
          <a-tab-pane key="3">
            <template #tab>
              <span> {{ $t('facebook') }} </span>
            </template>
            Facebook
          </a-tab-pane>
          <a-tab-pane key="4">
            <template #tab>
              <span> {{ $t('live-chat') }} </span>
            </template>
            Live Chat
          </a-tab-pane>
          <a-tab-pane key="5">
            <template #tab>
              <img src="~/assets/images/img_video-call.svg" alt="" />
            </template>
          </a-tab-pane>
        </a-tabs>

        <div class="input-options">
          <textarea
            :value="typeMessage"
            @input="updateValue($event.target.value)"
          ></textarea>
          <div class="options">
            <div class="options-group">
              <a class="btn-attachment">
                <img src="~/assets/images/img_attachment.svg" alt="" />
              </a>
              <a class="btn-emoji" @click="handleModalEmoji">
                <img src="~/assets/images/img_emoji.svg" alt="" />
                <client-only>
                  <picker @select="addEmoji" v-if="shownEmojiDialog" />
                </client-only>
              </a>
            </div>
            <a
              id="btn-sent"
              :class="['btn-sent', disabledBtnSend ? 'disabled-sent-btn' : '']"
              @click="handleSend"
              :disabled="disabledBtnSend"
              v-on:keyup.enter="onEnter"
            >
              <img src="~/assets/images/img_send_black.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "all": "All Conversations",
    "sms": "SMS",
    "email": "Email",
    "facebook": "Facebook",
    "live-chat": "Live Chat"
  }
}
</i18n>

<script lang="ts">
import { Vue, Component, Ref } from 'nuxt-property-decorator';
import moment from 'moment';
import { Picker } from 'emoji-mart-vue';

import Message from './Message.vue';
import { MessageType } from '@/types/enum/MessageType';
import { IMessage } from '@/types/Conversation';

@Component({
  name: 'Chat',
  components: { Message, Picker },
})
export default class Chat extends Vue {
  shownEmojiDialog = false;
  activeKey = 1;
  typeMessage = '';
  messages: IMessage[] = [
    {
      id: 1,
      time: 'Jul 14, 2022 15:07',
      type: MessageType.SENT,
      message: 'Hi',
    },
    {
      id: 2,
      time: 'Jul 14, 2022 15:07',
      type: MessageType.SENT,
      message: 'Can I help you?',
    },
    {
      id: 3,
      time: 'Jul 14, 2022 15:18',
      type: MessageType.RECEIVED,
      message: 'Where are you from?',
    },
    {
      id: 4,
      time: 'Jul 14, 2022 15:18',
      type: MessageType.SENT,
      message: "I'm from American.",
    },
  ];

  get disabledBtnSend() {
    return this.typeMessage == '';
  }

  mounted() {
    setTimeout(() => this.scrollToElement(), 100);
  }

  addEmoji(val: any) {
    this.typeMessage += val.native;
  }

  updateValue(val: string) {
    this.typeMessage = val;
  }

  handleModalEmoji() {
    this.shownEmojiDialog = !this.shownEmojiDialog;
  }

  onEnter() {
    this.handleSend();
  }

  handleSend() {
    const curTime = moment().format('MMM DD, YYYY HH:MM');

    this.messages.push({
      id: this.messages.length + 1,
      time: curTime,
      type: MessageType.RECEIVED,
      message: this.typeMessage,
    });
    this.typeMessage = '';
    // TODO auto message
    setTimeout(() => {
      const randomMessages = [
        '「Example Message」Hello',
        "「Example Message」What's your name?",
        '「Example Message」How old are you?',
        '「Example Message」Thank you for contacting us! We will be in touch shortly, but you may also find answers to some of your questions on our FAQ page at xxx.xxx',
        '「Example Message」We will be in touch soon. We look forward to serving you.',
        '「Example Message」We are sorry to see that your experience with us has been less than satisfactory. We would like the opportunity to make things right. Our team will look into your complaint and get in touch with you in the next 24 hours. In the meantime, please enjoy this 10 percent off coupon.',
        '「Example Message」Thank you for your recent purchase! Remember that we are here to answer any questions you have as you use your new product. ',
      ];
      const n = Math.floor(Math.random() * (randomMessages.length - 0 + 1)) + 0;
      const curTime = moment().format('MMM DD, YYYY HH:MM');
      this.messages.push({
        id: this.messages.length + 1,
        time: curTime,
        type: MessageType.SENT,
        message: randomMessages[n],
      });
      this.scrollToElement();
    }, 700);

    this.scrollToElement();
  }

  handleBack() {
    this.$router.back();
  }

  scrollToElement() {
    this.$nextTick(() => {
      this.$el
        .getElementsByClassName('last')[0]
        .scrollIntoView({ behavior: 'smooth' });
    });
  }
}
</script>
<style lang="scss" scoped>
.wrapper-chat {
  flex: 1;
}

.chat {
  background-color: #fff;
  border-radius: 25px;
  display: flex;
  margin-left: 16px;
  margin-right: 16px;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media screen and (max-width: 1400px) and (min-width: 1339px) {
    width: 674px;
  }

  @media screen and (max-width: 1240px) and (min-width: 1239px) {
    width: 593.75px;
  }

  @include responsive(sm) {
    margin: unset;
  }

  .back-to-conversation {
    display: flex;
    align-items: center;
    transition: all 0.3ms ease;
    padding-left: 24px;
    border-bottom: 2px rgba($color: #c7c7c7, $alpha: 0.7) solid;

    a {
      display: flex;
      padding-top: 28px;
      padding-bottom: 27px;
      align-items: center;
      color: #ca441c;
      font-size: 20px;
      line-height: 135%;
      font-display: 'Segoe UI Semibold 600';
      user-select: none;

      @include responsive(xl) {
        font-size: 20px;
      }

      img {
        margin-right: 22.3px;
        width: auto;
        height: 21px;
        transition: all 0.3ms ease;

        @include responsive(xl) {
          margin-right: 22px;
        }
      }
    }

    &:hover {
      opacity: 0.6;
    }
  }

  &__content {
    padding: 22px 36px;
    height: calc(100vh - 408px);
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .input-options {
    background-color: #f9f9f9;
    border-radius: 15px;

    textarea {
      width: 100%;
      height: 154px;
      border-color: transparent;
      background-color: transparent;
      padding: 24px;
      font-size: 16px;
      line-height: 120%;
      resize: none;

      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .options {
      display: flex;
      justify-content: space-between;
      padding: 8px 0px;
      border-top: 1px rgba($color: #c7c7c7, $alpha: 0.3) solid;

      .options-group {
        margin-left: 12px;

        .btn-attachment > img {
          margin-right: 12px;
          transition: all 0.3ms ease;

          &:hover {
            opacity: 0.6;
            transition: all 0.3ms ease;
          }
        }

        .btn-emoji > img {
          position: relative;
          transition: all 0.3ms ease;

          &:hover {
            opacity: 0.6;
            transition: all 0.3ms ease;
          }
        }
      }

      .btn-sent > img {
        margin-right: 12px;
        width: 24px;
        height: auto;
        transition: all 0.3ms ease;

        &:hover {
          opacity: 0.6;
          transition: all 0.3ms ease;
        }
      }
    }
  }
  .input-message {
    border-top: rgba($color: #c7c7c7, $alpha: 0.6) 2px solid;
    padding-left: 36px;
    padding-right: 36px;
    padding-bottom: 30px;
  }

  ::v-deep .ant-tabs-tab {
    margin: unset !important;
    padding-left: 25px !important;
    padding-right: 25px !important;
  }

  ::v-deep .ant-tabs-bar {
    margin: unset !important;
    border-bottom: unset !important;
  }

  ::v-deep .emoji-mart {
    position: absolute;
    bottom: 100px !important;
  }

  ::v-deep .ant-tabs-tab span {
    color: #155281;
  }

  .active-tab {
    color: #ecbc40 !important;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 48px;
      height: 2px;
      top: 28px;
      left: -8px;
      background-color: #ecbc40;
    }
  }

  .disabled-sent-btn {
    opacity: 0.7;
  }
}
</style>
