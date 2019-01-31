<template>
  <div class="lake-upload">
    <input
      :style="{ display: 'none' }"
      type="file"
      ref="file"
      :disabled="disabled"
      :multiple="multiple"
      :accept="accept"
      @change="onFileChange"
    >
    <div @click="onFileSelect">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lake-upload',
  props: {
    url: {
      type: String,
      default: '',
      required: true,
    },
    data: {
      type: Object,
      default() {
        return {};
      },
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    accept: {
      // 同 input accept
      type: String,
      default: 'image/png, image/jpeg, image/jpg, image/gif',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    auto: {
      type: Boolean,
      default: true,
    },
    uploadRequest: {
      type: Object,
    },
    onChange: Function, // 同 input onchange
    beforeUploadFilter: Function, // 需要返回一个 [File] 数组作为过滤后的上传文件
    onStart: Function,
    beforeUpload: Function, // return false 则取消上传单个文件
    onProgress: Function,
    onSuccess: Function,
    onError: Function,
  },
  data: () => ({
    reqs: {},
    processedFiles: [],
    requestIndex: 0,
  }),
  beforeDestroy() {
    this.abort();
  },
  methods: {
    onFileSelect() {
      if (this.disabled) return;

      this.$refs.file.value = '';
      this.$refs.file.click();
    },
    onFileChange($event) {
      if (this.disabled) return;

      let processedFiles = Array.from($event.target.files);

      if (!processedFiles.length) return;

      processedFiles.forEach(file => {
        file.uuid = `${+new Date()}-${this.requestIndex}`;
        file.pureName = file.name.split('.')[0];
        this.requestIndex++;
      });

      this.onChange && this.onChange(processedFiles);

      if (this.beforeUploadFilter !== undefined) {
        processedFiles = this.beforeUploadFilter(processedFiles);
      }

      this.processedFiles = processedFiles;
      this.auto && this.runUploadProcess(this.processedFiles);
    },
    runUploadProcess(processedFiles = []) {
      if (!processedFiles.length) return;

      files.forEach(file => {
        this.onStart && this.onStart(file, files);
        this.uploadFile(file, files);
      });
    },
    uploadFile(file = null, files = []) {
      if (this.beforeUpload !== undefined) {
        if (this.beforeUpload(file, files)) {
          this.postFile(file);
        }
      }

      if (this.beforeUpload === undefined) {
        this.postFile(file);
      }
    },
    postFile(file) {
      this.reqs[file.uuid] = this.uploadRequest(file, {
        url: this.url,
        data: this.data,
        onProgress: (percent, curFile) => {
          this.onProgress(percent, curFile);
        },
        onSuccess: (response, curFile) => {
          delete this.reqs[curFile.uuid];
          this.onSuccess(response, curFile);
        },
        onError: (error, curFile) => {
          delete this.reqs[curFile.uuid];
          this.onError(error, curFile);
        },
      });
    },

    /**
     * 暴露在 ref 上的接口
     * open && upload && abort
     */
    open() {
      this.onFileSelect();
    },
    upload() {
      this.runUploadProcess(this.processedFiles);
    },
    abort(file) {
      if (file) {
        if (this.reqs[file.uuid]) {
          // cancel request
          this.reqs[file.uuid].cancel();
          delete this.reqs[file.uuid];
        }

        // delete file
        this.processedFiles = this.processedFiles.filter(item => item.uuid !== file.uuid);
      } else {
        Object.keys(this.reqs).forEach(uuid => {
          if (this.reqs[uuid]) {
            this.reqs[uuid].cancel();
            delete this.reqs[uuid];
          }
        });
        this.processedFiles = [];
      }
    },
  },
};
</script>
