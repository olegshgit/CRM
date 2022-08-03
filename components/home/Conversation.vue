<template>
  <div class="wrapper-conversation">
    <div class="conversation">
      <div class="search">
        <img
          src="~assets/images/img_search.svg"
          alt="Search"
          class="search__thumbnail"
        />
        <a-input
          placeholder="search conversations"
          @change="onChange"
          allow-clear
        />
      </div>
      <a-list :data-source="sourceData">
        <a-list-item slot="renderItem" slot-scope="item">
          <div class="conversation-item" @click="handleClickItem">
            <div class="conversation-item__title">
              <p class="name">{{ item.title }}</p>
              <p class="time">{{ item.time }}</p>
            </div>
            <p class="conversation-item__des single-line">
              {{ item.des }}
            </p>
          </div>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "en": {}
}
</i18n>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import routes from '~/routes';

export interface Data {
  title: string;
  des: string;
  time: string;
}
@Component({
  name: 'Conversation',
  components: {},
})
export default class Conversation extends Vue {
  searchVal = '';
  data: Data[] = [
    {
      title: 'Anna Smith',
      des: 'How are your today?',
      time: 'a few seconds ago',
    },
    {
      title: 'John Elizabeth',
      des: 'Hello! I’m going to be out of the office until [date]. If you need something before then, please contact [colleague] at [email] or [phone number] to receive assistance.',
      time: '44 seconds ago',
    },
    {
      title: 'James Smith',
      des: 'Hello! Thank you for your email. I am out of the office right now but get back to you ASAP. You can expect a reply by [day] latest. For anything you need right away, you can contact [alternative contact option].',
      time: 'a minute ago',
    },
    {
      title: 'John Joan',
      des: 'Offering precise messages offers transparent information and reduces the risk of confusion.',
      time: '	an hour ago',
    },
    {
      title: 'Mark Smith',
      des: 'A good autoresponder can send visitors to your company’s website if they need immediate help.',
      time: '2 hours ago',
    },
    {
      title: 'John Richard',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
      time: '3 hours ago',
    },
    {
      title: 'John Susan',
      des: 'How are your today?',
      time: '4 hours ago',
    },
    {
      title: 'Susan Smith',
      des: 'Hello! I’m going to be out of the office until [date]. If you need something before then, please contact [colleague] at [email] or [phone number] to receive assistance.',
      time: '2 hours ago',
    },
    {
      title: 'John Stephen',
      des: 'Hello! Thank you for your email. I am out of the office right now but get back to you ASAP. You can expect a reply by [day] latest. For anything you need right away, you can contact [alternative contact option].',
      time: '2 hours ago',
    },
    {
      title: 'Stephen Smith',
      des: 'Offering precise messages offers transparent information and reduces the risk of confusion.',
      time: '2 hours ago',
    },
    {
      title: 'John Smith',
      des: 'A good autoresponder can send visitors to your company’s website if they need immediate help.',
      time: '2 hours ago',
    },
    {
      title: 'John William',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
      time: '2 hours ago',
    },
  ];

  get sourceData() {
    return this.data.filter(
      (item) =>
        item.des
          .toLocaleLowerCase()
          .includes(this.searchVal.toLocaleLowerCase()) ||
        item.title
          .toLocaleLowerCase()
          .includes(this.searchVal.toLocaleLowerCase())
    );
  }

  onChange(e: any) {
    const { value } = e.target;
    this.searchVal = value;
  }

  handleClickItem() {
    this.$nuxt.$loading.start();
    setTimeout(() => {
      this.$nuxt.$loading.finish();
      this.$router.push({
        path: routes.conversation.path,
      });
    }, 500);
  }
}
</script>
<style lang="scss" scoped>
.wrapper-conversation {
  flex: 1;
  margin-left: 8px;
  margin-right: 8px;
  background-color: #fff;
  border-radius: 25px;
}

.conversation {
  height: calc(100% - 160px);

  @media screen and (max-width: 1400px) and (min-width: 1339px) {
    width: 674px;
  }

  @media screen and (max-width: 1240px) and (min-width: 1239px) {
    width: 593.75px;
  }

  .search {
    display: flex;
    background-color: #f9f9f9;
    border-radius: 15px;
    padding-top: 9px;
    padding-bottom: 9px;
    align-items: center;
    padding-left: 16px;
    margin: 45px 35px 0px 37px;
    margin-bottom: 20px;

    @media screen and (max-width: 1400px) {
      margin-left: 32.5px;
      margin-right: 30.5px;
    }

    @media screen and (max-width: 1240px) {
      margin-left: 31.8px;
      margin-right: 29.3px;
    }

    &__thumbnail {
      width: 26px;
      height: 26px;
      margin-right: 16px;
    }
  }

  ::v-deep .ant-input {
    border: 1px solid #f9f9f9 !important;
    background-color: #f9f9f9;
    color: #155281;
    padding-left: unset !important;

    &::placeholder {
      color: #155281 !important;
      font-size: 16px !important;
      line-height: 175% !important;
      font-family: 'Segoe UI' !important;
    }
  }

  ::v-deep .ant-input:focus {
    box-shadow: none !important;
  }

  .conversation-item {
    width: 100%;
    padding: 20px 37px 20px 39px;
    cursor: pointer;
    transition: all 0.3ms ease;

    @include responsive(xl) {
      padding: 20px 38px;
    }

    &:hover {
      opacity: 0.6;
      transition: all 0.3ms ease;
      font-style: italic;
    }

    &__title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 18px;

      .name {
        font-size: 20px;
        color: #155281;
        line-height: 135%;
      }

      .time {
        font-size: 14px;
        color: #ecbc40;
        font-family: 'Segoe UI';
      }
    }
    &__des {
      font-size: 16px;
      color: #155281;
      line-height: 131.25%;
      font-family: 'Segoe UI';
    }
  }

  ::v-deep .ant-list {
    overflow: scroll !important;
    height: 100%;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  ::v-deep .ant-list-split {
    border-bottom: 0.1px solid #e8e8e8;
  }
}
</style>
