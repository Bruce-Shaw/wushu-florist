const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgWidth: '',
    imgHeight: '',
    curData: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDetailById(options.id);
    const windowWidth = wx.getSystemInfoSync().windowWidth; // 屏幕的宽度
    const imgWidth = windowWidth - 100;
    const imgHeight = Math.ceil(imgWidth / 3 * 4);
    this.setData({ imgWidth, imgHeight });
  },
  getDetailById: function (id) {
    db.collection('wushu-florist').where({
      _id: id
    }).get({
      success: res => {
        if (res.data.length) {
          const params = res.data[0];
          if (Object.prototype.hasOwnProperty.call(params, 'imgs')) {
            try {
              params.imgs = params.imgs.split(',');
            } catch(e) {
              console.log(e);
            }
          }
          this.setData({ curData: params });
        }
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  },
})