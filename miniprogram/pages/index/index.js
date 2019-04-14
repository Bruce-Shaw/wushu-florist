const db = wx.cloud.database();

const {
  congfigIndex
} = require('../../utils/config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scroll_height: 0,
    indexList: congfigIndex.indexList,
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
    this.getData();
  },
  getData: function(pageNow=1, pageSize=10, key) {
    // try {
    //   db.collection('wushu-florist')
    //     .skip(pageNow)
    //     .limit(pageSize) // 限制返回数量为 10 条
    //     .get({
    //       success: function(res) {
    //         console.log(res)
    //         that.data.topics = res.data;
    //         // that.setData({
    //         //   topics: that.data.topics,
    //         // })
    //         wx.hideNavigationBarLoading(); //隐藏加载
    //         wx.stopPullDownRefresh();
    //       },
    //       fail: function(event) {
    //         wx.hideNavigationBarLoading(); //隐藏加载
    //         wx.stopPullDownRefresh();
    //       }
    //     })
    // } catch (e) {
    //   wx.hideNavigationBarLoading(); //隐藏加载
    //   wx.stopPullDownRefresh();
    //   console.error(e);
    // }

    wx.cloud.callFunction({
      name: 'getData',
      data: { pageNow, pageSize, key },
      success: res => {
        console.log(res)
      },
      fail: err => {
        console.error(err)
      }
    })
  }
})