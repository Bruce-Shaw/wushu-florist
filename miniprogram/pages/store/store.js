const { storeIconConfig, storeInfo } = require('../../utils/config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scroll_height: 0,
    serviceList: storeIconConfig,
    storeInfo,
    showModal: true,
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
  },
  callPhone: function() {
    wx.makePhoneCall({
      phoneNumber: this.data.storeInfo.phone,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  closeModal: function() {
    this.setData({ showModal: true });
  },
  openModal: function() {
    this.setData({ showModal: false });
  }
})