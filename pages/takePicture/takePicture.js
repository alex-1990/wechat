Component({
  properties: {
    url: {
      type: String,
      observer(newVal, oldVal) {
        console.log(oldVal)
      }
    }
  },
  data: {
    ratio: 102 / 152,
    originUrl: '',
    cropperResult: "../../image/main/zheng.png",
    currentPage: 2
  },
  methods: {
    uploadTap() {
      let _this = this
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success(res) {
          _this.setData({
            originUrl: res.tempFilePaths[0],
            cropperResult: ''
          })
        }
      })
    },
    getCropperImg(e) {
      if (e.detail.url) {
        this.setData({
          originUrl: '',
          cropperResult: e.detail.url
        })
      }
    }
  }
})