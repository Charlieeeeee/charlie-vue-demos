<template>
  <div class="qrcode-page">
    <van-button type="primary" @click="generateQrCode">
      生成二维码
    </van-button>
    <!-- <div id="placeHolder"></div> -->
    <van-popup v-model="show" >
      <img class="qr-code-img" v-if="dataUrl" :src="dataUrl" alt="">
    </van-popup>
  </div>
</template>

<script>
import qrcode from "qrcode-generator"
export default {
    name:"qrcode",
    data() {
      return {
        dataUrl: "",
        show: false
      }
    },
    methods: {
      generateQrCode() {
        var typeNumber = 4;
        var errorCorrectionLevel = 'L';
        var qr = qrcode(typeNumber, errorCorrectionLevel);
        qr.addData('http://payeasy.cn/ZdnYr');
        qr.make();
        this.dataUrl = qr.createDataURL();
        this.show = true;
      }
    }
}
</script>

<style scoped lang="scss">
.qrcode-page{
  & /deep/ .qr-code-img {
    width: 300px;
    height: 300px;
  }
  & /deep/ .van-popup {
    // width: 300px;
    // height: 300px;
  }
}
</style>
