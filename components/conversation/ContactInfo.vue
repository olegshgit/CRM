<template>
  <div class="wrapper-contact-info">
    <div class="contact-info">
      <div class="contact-info__title">
        <h2>Contact Info</h2>
        <p>Level 3.2</p>
      </div>
      <div class="contact-info__content">
        <div class="contact-info__item">
          <p class="label">First Name</p>
          <p class="value">John</p>
        </div>
        <div class="contact-info__item">
          <p class="label">Last Name</p>
          <p class="value">Smith</p>
        </div>
        <div class="contact-info__item">
          <p class="label">Email</p>
          <p class="value">jsmith@gmail.com</p>
        </div>
        <div class="contact-info__item">
          <p class="label">Phone</p>
          <p class="value">(+1) 555-555-5555</p>
        </div>
        <div class="contact-info__item">
          <p class="label">DOB</p>
          <p class="value">01/01/79</p>
        </div>
        <div class="contact-info__item">
          <p class="label">Company</p>
          <p class="value">Google</p>
        </div>
        <div class="contact-info__item">
          <p class="label">SSN</p>
          <p class="value">123-456-7890</p>
        </div>
        <div class="contact-info__item">
          <p class="label">Date Created</p>
          <p class="value">08/19/21</p>
        </div>
        <img
          src="~assets/images/img_date-time.png"
          class="date-time"
          alt="Date Time"
        />
      </div>
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

@Component({
  name: 'ContactInfo',
})
export default class ContactInfo extends Vue {}
</script>
<style lang="scss" scoped>
.wrapper-contact-info {
  flex: 0.5;
  max-width: 459px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 45px;
  background-color: #fff;
  height: 100%;
  border-radius: 25px;

  @media screen and (max-width: 1400px) and (min-width: 1339px) {
    width: 329px;
  }

  @media screen and (max-width: 1240px) and (min-width: 1239px) {
    width: 289px;
  }

  @media screen and (max-width: 1400px) {
    padding-top: 49px;
  }

  @media screen and (max-width: 1400px) {
    padding-top: 53px;
  }

  &__title {
    margin-bottom: 26px;
    padding-left: 30px;

    h2 {
      color: #155281;
      font-size: 40px;
      line-height: 132.5%;

      @include responsive(xl) {
        font-size: 36px;
      }

      @include responsive(lg) {
        font-size: 32px;
      }
    }

    p {
      color: #ca441c;
      font-size: 20px;
      line-height: 135%;
    }
  }

  &__content {
    padding-left: 30px;
    width: 100%;
    height: calc(100% - 120px);
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__item {
    margin-bottom: 26px;

    .label {
      color: #ca441c;
      font-size: 16px;
      line-height: 131.25%;

      @include responsive(xl) {
        margin-bottom: 6px;
      }
    }

    .value {
      color: #155281;
      font-size: 20px;
      line-height: 131.25%;
    }
  }

  .date-time {
    width: 56px;
    height: 48px;
  }
}
</style>
