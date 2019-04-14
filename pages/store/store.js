// pages/store/store.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scroll_height: 0,
    serviceList: [{
      'id': 0,
      'name': 'Wi-Fi',
      'icon': 'wifi'
    }, {
      'id': 1,
      'name': '刷卡',
      'icon': '卡'
    }, {
      'id': 2,
      'name': '停车',
      'icon': '停车'
    }, {
      'id': 3,
      'name': '空调',
      'icon': '空调'
    }, {
      'id': 4,
      'name': '微信支付',
      'icon': '微信'
    }, {
      'id': 5,
      'name': '支付宝',
      'icon': '支付宝'
    }, {
      'id': 6,
      'name': '到店自提',
      'icon': '自提'
    }, {
      'id': 7,
      'name': '茶饮',
      'icon': '茶饮'
    }, {
      'id': 8,
      'name': '洗手间',
      'icon': '洗手间'
    }, ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const windowHeight = wx.getSystemInfoSync().windowHeight; // 屏幕的高度
    const windowWidth = wx.getSystemInfoSync().windowWidth; // 屏幕的宽度
    this.setData({
      scroll_height: windowHeight * 750 / windowWidth
    });
  },
  showLocation: function() {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function(res) {
        wx.openLocation({
          latitude: 30.6207959736,
          longitude: 104.0962958339,
          name: "成都锦华路万达广场",
          scale: 15
        })
      }
    })
  }
})