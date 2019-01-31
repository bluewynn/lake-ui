<template>
  <div class="lake-image-upload">
    <div
      class="lake-image-upload-preview-item"
      v-for="file in previewFiles"
      :key="file.uuid"
      :style="{ backgroundImage: `url(${file.url})`}"
    ></div>
    <div class="lake-image-upload-add">
      <lake-upload
        url="/api/v1/upload"
        :multiple="multiple"
        :auto="false"
        :before-upload-filter="beforeUploadFilter"
        :on-change="onChange"
      >上传图片</lake-upload>
    </div>
  </div>
</template>

<script>
import upload from './upload.vue';

export default {
  name: 'lake-image-upload',
  components: { upload },
  props: {
    limit: {
      type: Number,
      default: 0,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      previewFiles: [],
    };
  },
  methods: {
    beforeUploadFilter(files) {
      const processedFiles = files;

      if (this.limit > 0) {
        if (this.limit > processedFiles.length) {
          this.$emit('limit', processedFiles, processedFiles.slice(this.limit, processedFiles.length));

          return processedFiles.slice(0, this.limit);
        }
      }

      return processedFiles;
    },
    onChange(files) {
      this.previewFiles = files.map(file => ({
        uuid: file.uuid,
        pureName: file.pureName,
        url: window.URL.createObjectURL(file),
      }));
    },
  },
};
</script>

<style lang="less" scoped>
.lake-image-upload {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  &-add,
  &-preview-item {
    display: block;
    width: 70px;
    height: 70px;
    border: 1px solid #999;
    line-height: 70px;
    margin: 0 10px 10px 0;
  }
  &-add {
    text-align: center;
    font-size: 13px;
    color: #999;
    background-color: #fff;
  }
  &-preview-item {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}
</style>
