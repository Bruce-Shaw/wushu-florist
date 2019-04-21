const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    curData: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDetailById(options.id);
  },
  getDetailById: function (id) {
    db.collection('wushu-florist').where({
      _id: id
    }).get({
      success: res => {
        if (res.data.length) {
          this.setData({ curData: res.data[0] });
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