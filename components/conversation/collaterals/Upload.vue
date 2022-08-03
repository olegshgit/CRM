<template>
  <div class="upload">
    <a-upload
      :file-list="fileList"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture-card"
      @preview="handlePreview"
    >
      <a class="add-image">
        <img
          src="~assets/images/img_add.svg"
          class="date-time"
          alt="Date Time"
        />
        ADD NEW
      </a>
    </a-upload>
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
  name: 'Upload',
})
export default class Upload extends Vue {
  fileList = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://www.tourmyindia.com/states/jammu-kashmir/image/pari-mahal-srinagar2.jpg',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://www.esl.co.uk/sites/default/files/styles/image_gallery/public/city/esl-languages-usa-los-angeles-hero.jpg',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://media.gettyimages.com/photos/skyscrapers-of-los-angeles-skylinearchitectureurbancityscape-picture-id478821794?s=612x612',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/bf/5e/5e/caption.jpg?w=700&h=-1&s=1',
    },
  ];

  handlePreview = async (file: any) => {
    this.$emit('preview', file);
  };
}
</script>
<style lang="scss" scoped>
.upload {
  ::v-deep .ant-upload-picture-card-wrapper {
    display: flex;
    flex-direction: column-reverse;
  }

  ::v-deep .ant-upload.ant-upload-select-picture-card {
    width: unset !important;
    height: unset !important;
    background-color: unset !important;
    border: unset !important;
    margin-bottom: unset !important;

    span {
      padding: unset !important;
    }
  }

  ::v-deep .anticon-delete {
    display: none;
  }

  ::v-deep .ant-upload-list-item {
    padding: unset !important;
  }
}
</style>
