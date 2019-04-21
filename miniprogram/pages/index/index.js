const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scroll_height: 0,
    indexList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const windowHeight = wx.getSystemInfoSync().windowHeight; // 屏幕的高度
    const windowWidth = wx.getSystemInfoSync().windowWidth; // 屏幕的宽度
    this.setData({
      scroll_height: windowHeight * 750 / windowWidth
    });
    this.getData();
  },
  getData: function (key) {
    db.collection('wushu-florist').where({
      level: 1
    }).get({
      success: res => {
        this.setData({ indexList: res.data });
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
  jumpDetail: function(e) {
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.dataset['id'],
    })
  }
})